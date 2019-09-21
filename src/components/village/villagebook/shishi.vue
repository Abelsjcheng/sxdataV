<template>
    <div style="position:  relative;">
        <div class="modtitle">实时政事 </div>
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

                this.$http.get('http://110.53.162.165:5050/api/party/shishiAll').then(function(res){  
                                for (let i = 0; i < res.data.data.length; i++) {
                                     if(res.data.data[i].aid==selectaid){
                                        const info={
                                            date:res.data.data[i].adddate,//日期
                                            title:res.data.data[i].title,//标题
                                            content:res.data.data[i].content,//内容
                                            type:res.data.data[i].type,//类型
                                            uname:res.data.data[i].uname,//信息发布人
                                            pic:res.data.data[i].pic}//图片
                                        
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