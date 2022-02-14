<template>
    <div class="party-data"> 
            <div class="partytable">
                <div style="height:50px">
                    <img height="50" width="50"  src='../../../static/img/party.png'/>
                    <h3 class="partyd_name">党员总数</h3>
                </div>
                <i class="partyd_num">{{pmdata.psum}}</i>
            </div>


            
            <div class="partytable">
                <div style="height:50px">
                    <img height="50" width="50"  src='../../../static/img/partym.png'/>
                    <h3 class="partyd_name">男性党员数</h3>
                </div>
                <i class="partyd_num">{{pmdata.pman}}</i>
            </div>
            

           
            <div class="partytable">
                <div style="height:50px">
                    <img height="50" width="50"  src='../../../static/img/partywm.png'/>
                    <h3 class="partyd_name">女性党员数</h3>
                </div>
                <i class="partyd_num">{{pmdata.pwoman}}</i>   
            </div>

    </div>

</template>
<script>
import { mapGetters } from 'vuex';
export default {
    name: 'partymdata',
    data () {
        return {
        pmdatas:[],
        pmdata:{parea:'',psum:0,pman:0,pwoman:0}
        }
    },
    methods: {
        
        getPartydata:function(){ 

                this.$http.get('api/count/p_m').then(function(res){  
                                this.pmdata.psum=res.data.data[0].psum;
                                this.pmdata.pman=res.data.data[0].pman;
                                this.pmdata.pwoman=res.data.data[0].pwoman;

                                                    
                            },function(){
                        console.log('请求失败处理');
                    });
                this.$http.get('api/count/pm').then(function(res){
                        for (let i = 0; i < res.data.data.length; i++) {
                          
                            const pdata={parea:res.data.data[i].parea,psum:res.data.data[i].psum,pman:res.data.data[i].man,pwoman:res.data.data[i].woman}
                            this.pmdatas.push(pdata)
                          }
                        },function(){
                    console.log('请求失败处理');
                });
            }
    }, 
    computed: { //计算属性 取存在状态库中的值
        ...mapGetters(["selectplace"]),
        listenselectplace(){ //返回状态库中的值
            return this.selectplace;
        },
        ...mapGetters(["selectaid"]),
        listenselectaid() {
            return this.selectaid;
        },
},
    watch:{
        listenselectplace:function(vag){//实时监听状态库中值的改变 
                for (let i = 0; i < this.pmdatas.length; i++) {
                    if(vag==this.pmdatas[i].parea)
                    {   
                        this.pmdata.psum =this.pmdatas[i].psum
                        this.pmdata.pman =this.pmdatas[i].pman
                        this.pmdata.pwoman =this.pmdatas[i].pwoman
                    }
                                
                } 
                if(vag==''){
                    this.getPartydata();
                }
            }      
    },
     mounted:function(){//页面初始化函数
        this.getPartydata();
        console.log(this.selectaid); 
    }
}
</script>

<style lang="scss" scoped>
.party-data{
    display: flex;
    flex-direction:column;
    justify-content: space-around;
    align-items:center; //垂直居中
    background: rgba(0,0,0,.2);
    //background-color: rgb(58, 8, 39);
    height: 40vh;
}
.partytable{
    img{
        float: left;
    }
			position: relative;
            margin: 15px 0;
			.partyd_name{
                margin-top: 12.5px;
                float: left;
                font-style: normal;
                color: white;
			}
			
}

.partyd_num{
                text-align: center;
                display: block;
                font-style: normal;
                color: yellow;
                font-size: 1.3rem;
			}

</style>

