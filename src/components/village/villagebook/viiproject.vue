<template>
    <div style="position: relative;">
        <div class="modtitle">村重大项目信息 </div>
        <virtualList :size="32" :remain="8" style="margin-top:25px">
            <item v-for="item of tableData" :key="item.id" v-bind:item="item"  />
        </virtualList>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex';
    import item from './item.vue'
    import virtualList from 'vue-virtual-scroll-list'

    export default {
        name: 'partyedu',
        data () {
            return {
                tableData: [],
            }
        },
        components: { item, virtualList },
        methods: {
            getPhddata:function(selectaid){ 

                this.$http.get('api/project/all').then(function(res){  
                                for (let i = 0; i < res.data.data.length; i++) {
                                    if(res.data.data[i].aid==selectaid){
                                        const info=
                                        {
                                            date:res.data.data[i].pushdate,//项目发布日期
                                            title:res.data.data[i].proname,//项目名称
                                            type:res.data.data[i].protype,//项目类别
                                            money:res.data.data[i].money,//投资金额
                                            pic:res.data.data[i].propic,//项目图片路径
                                            moneynote:res.data.data[i].moneynote,//开支明细
                                            content:res.data.data[i].content,//项目内容
                                            address:res.data.data[i].address,//项目地址
                                            fname:res.data.data[i].fname,//负责人姓名
                                            fphone:res.data.data[i].fphone,//负责人手机号
                                            uname:res.data.data[i].uname,//信息发布人
                                        }
                                    
                                    this.tableData.push(info) //存入json数组
                                 }
                                }
                            },function(){
                        console.log('请求失败处理');
                    });
                
            }
            
        }, 
   computed: { //计算属性 取存在状态库中的值
            ...mapGetters(["selectaid"]),
            listenselectaid() {
            return this.selectaid;
            },
        },
        watch:{
            listenselectaid (vag) {
            },    
        },
        mounted:function(){
            this.getPhddata(this.selectaid);
        }
    }
</script>
<style lang="scss">

</style>


