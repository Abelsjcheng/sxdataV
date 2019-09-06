<template>
    <div>
        <div class="newaffairs" @click="openDialogVisible(newpartyaffair) ">
            <div>
                <a class="newaffairs_title">{{newpartyaffair.title}} </a>
                <em class="newaffairs_data">{{newpartyaffair.date}} </em> 
                
            </div>
            <a v-html="ellipsis(newpartyaffair.content)"> </a>
        </div>
        
        <virtualList :size="30" :remain="8" >
            <item v-for="item of tableData" :key="item.id" v-bind:item="item"  />
        </virtualList>
        <!--自定义组件 弹出窗口用于显示具体信息 v-bind： 动态赋值-->
        <infocontent v-bind:item="paitem" v-bind:centerDialogVisible="centerDialogVisible" v-on:dialogClose="centerDialogVisible =$event" />
                                                                                        <!-- v-on: 用于监听子组件的传值并做处理（监听器） $event为传递的参数-->
    </div>
</template>
<script>
    import { mapGetters } from 'vuex';
    import item from './item.vue'
    import virtualList from 'vue-virtual-scroll-list'
    import infocontent from './dialog/infocontent.vue';
    export default {
        name: 'partyedu',
        data () {
            return {
                tableData: [],
                newpartyaffair:{date:'',title:'',content:'',pic:'',uname:''},
                centerDialogVisible: false, //传入子组件的dialog是否显示参数
                paitem:{} //传入子组件的对象信息
            }
        },
        components: { item, virtualList,infocontent },
        methods: {
            getPhddata:function(selectip){ 
                if(selectip=='2001:da8:d004:6002:44f3:7b39:4ca6:fb57'){
                    this.newpartyaffair={date:'2019-8-22 19:25:46',title:'农村建模',content:'<p>莲花村小镇由于近期陈情令播出火爆，旅游业成为了该小镇的第一大经济来源，乘一艘小船停在湖中间采摘莲蓬，简直快意人哉。因为资金富足，所以村长决定狠抓教育事业，为国家输送人才，由此数学建模得以开展。数学建模就是根据实际问题来建立数学模型，对数学模型来进行求解，然后根据结果去解决实际问题.</p>',pic:require("../../../static/img/affair2.jpg"),uname:'李晓橙'};
                    for (let i = 0; i < 3; i++) {
                    const info=
                                    {
                                        date:'2019-8-22 19:25:46',//项目发布日期
                                        title:'农村建模',//党务标题
                                        content:'<p>莲花村小镇由于近期陈情令播出火爆，旅游业成为了该小镇的第一大经济来源，乘一艘小船停在湖中间采摘莲蓬，简直快意人哉。因为资金富足，所以村长决定狠抓教育事业，为国家输送人才，由此数学建模得以开展。</p>',//党务内容
                                        pic:require("../../../static/img/affair2.jpg"),//项目图片路径
                                        uname:'李晓橙' //信息发布人

                                    }                                   
                                    this.tableData.push(info) //存入json数组
                    }
                                    this.$store.commit("SET_NEWPARTYAFFAIRS",this.tableData);
                }else{
                this.$http.get('http://110.53.162.165:5050/api/party/affairAll').then(function(res){  
                        this.newpartyaffair={date:res.data.data[0].adddate,title:res.data.data[0].title,content:res.data.data[0].content,pic:res.data.data[0].pic,uname:res.data.data[0].uname};     
                                for (let i = 0; i < res.data.data.length; i++) {
                                     const info=
                                    {
                                        date:res.data.data[i].adddate,//项目发布日期
                                        title:res.data.data[i].title,//党务标题
                                        content:res.data.data[i].content,//党务内容
                                        pic:require("../../../static/img/affair3.jpg"),//项目图片路径
                                        uname:res.data.data[i].uname //信息发布人

                                    }                                   
                                    this.tableData.push(info) //存入json数组
                                }
                                this.$store.commit("SET_NEWPARTYAFFAIRS",this.tableData);
                            },function(){
                        console.log('请求失败处理');
                    });
                }
            },
            ellipsis (value) {

                if (!value) return ''

                if (value.length > 130) {

                    return value.slice(0,130) + '...'

                }

                return value

             },
             openDialogVisible(vag){
                this.centerDialogVisible=true;
                this.paitem=vag;

            }
            
        }, 
        computed: { //计算属性 取存在状态库中的值
            ...mapGetters(["selectip"]),
            listenselectip(){  
                return this.selectip;
            },
        },
        watch:{
                
        },
        filters: {

            

        },
        mounted:function(){//页面初始化函数
        this.getPhddata(this.selectip);
        console.log(this.selectip);
        }
    }
</script>

<style lang="scss">
.newaffairs{
    margin-top:20px;
    border-bottom: 1px solid #d8dbdd !important;
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