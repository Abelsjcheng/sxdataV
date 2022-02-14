<template>
    <div style="position:  relative;height:100%">
        <div class="modtitle">在线学习 </div>
        <div style="margin-top:23.5px">
            <item v-for="item of infolist" :key="item.id" v-bind:item="item"  />
            <el-pagination
                style="position: absolute;bottom: 22px;right: 0px;"
                @current-change="handleCurrentChange"
                :current-page.sync="pageNo"
                :page-size="pageSize"
                layout="total,prev, pager, next"
                :total="tableData.length">
            </el-pagination>
        </div>
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
                pageNo: 1,//当前页码
                pageSize: 8,//每页数 17
                infolist:[]
            }
        },
        components: { item, virtualList },
        methods: {
            getPhddata:function(selectaid){ 
                var j=0;
                this.$http.get('api/party/eduAll').then(function(res){ 
                                for (let i = 0; i < res.data.data.length; i++) {
                                    if(res.data.data[i].aid==selectaid){
                                        j=j+1;
                                        const info={
                                            date:res.data.data[i].adddate,//日期
                                            title:res.data.data[i].courtit,//课程名称
                                            courass:res.data.data[i].courass,//课程地址
                                            content:res.data.data[i].coursum,//课程介绍
                                            pic:res.data.data[i].courpic,//图片
                                            uname:res.data.data[i].uname,//信息发布人
                                            };//图片
                                        this.tableData.push(info) //存入json数组
                                        if(j<=this.pageSize){
                                            this.infolist.push(info);
                                        }
                                    } 
                                }
                            },function(){
                        console.log('请求失败处理');
                    });
                
            },
            handleCurrentChange(val){
                this.infolist=[];
                if((val*this.pageSize-this.tableData.length)>0){
                    for(let i=(val-1)*this.pageSize;i<this.tableData.length;i++){
                    this.infolist.push(this.tableData[i]);
                    }
                }else{
                    for(let i=(val-1)*this.pageSize;i<val*this.pageSize;i++){
                        this.infolist.push(this.tableData[i]);
                    }
                }
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
