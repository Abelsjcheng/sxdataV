<template>
    <div>
        <div class="newaffairs">
            <div>
                <a class="newaffairs_title">{{tableData[0].title}} </a>
                <em class="newaffairs_data">{{tableData[0].date}} </em> 
                
            </div>
            <a v-html="tableData[0].content"> </a>
        </div>
        <virtualList :size="30" :remain="8" >
            <item v-for="item of tableData" :key="item.id" v-bind:item="item"  />
        </virtualList>
    </div>
</template>
<script>
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
            getPhddata:function(){ 

                this.$http.get('http://localhost/api/party/affairAll').then(function(res){  
                                for (let i = 0; i < res.data.data.length; i++) {
                                     const info=
                                    {
                                        date:res.data.data[i].adddate,//项目发布日期
                                        title:res.data.data[i].title,//党务标题
                                        content:res.data.data[i].content,//党务内容
                                        pic:res.data.data[i].pic,//项目图片路径

                                    }                                   
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
        filters: {

            ellipsis (value) {

                if (!value) return ''

                if (value.length > 30) {

                    return value.slice(0,30) + '...'

                }

                return value

             }

        },
        mounted:function(){//页面初始化函数
        this.getPhddata();
        }
    }
</script>

<style lang="scss">
.newaffairs{
    margin-top:20px;
}
.newaffairs_title{
    height: auto;
    padding-left: 15px;
    font-size: 25px;
    font-weight: bold;
    line-height: 32px;
    overflow: hidden;
}
.newaffairs_data{
    font-size: 12px;
    color: #999;
    line-height: 32px;
    height: 32px;
    float: right;
    padding-right: 16px;
}
</style>