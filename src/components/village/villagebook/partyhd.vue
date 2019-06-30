<template>

        <virtualList :size="32" :remain="8" style="margin-top:25px">
            <item v-for="item of tableData" :key="item.id" v-bind:item="item"  />
        </virtualList>

</template>
<script>
    import item from './item.vue'
    import virtualList from 'vue-virtual-scroll-list'

    export default {
        name: 'demo',
        data () {
            return {
                tableData: [],
            }
        },
        components: { item, virtualList },
        methods: {
            getPhddata:function(){ 

                this.$http.get('http://localhost/api/party/hdAll').then(function(res){  
                                for (let i = 0; i < res.data.data.length; i++) {
                                    const info={date:res.data.data[i].hdadddate,title:res.data.data[i].hdtitle,hdtype:res.data.data[i].hdtype,hdloc:res.data.data[i].hdloc,hdnum:res.data.data[i].hdnum,hdbtime:res.data.data[i].hdbtime,hdetime:res.data.data[i].hdetime,hdsum:res.data.data[i].hdsum,hdpic:res.data.data[i].hdpic}
                                    //日期，标题，类型，地点，人数，活动开始时间，活动结束日期，活动简介，活动图片
                                    this.tableData.push(info) //存入json数组
                                }
                            },function(){
                        console.log('请求失败处理');
                    });
                
            }
            
        }, 
        computed: { //计算属性 取存在状态库中的值
            
            
        },
        watch:{
                
        },
        mounted:function(){//页面初始化函数
        this.getPhddata();
        }
    }
</script>
<style lang="scss">
.item_title{
    color: white;
    height: 20px;
}
</style>
