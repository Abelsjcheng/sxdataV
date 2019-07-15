<template>
    <div class="party-data"> 
            <div class="partytable">

                <img height="50" width="50"  src='../../../static/img/party.png'/>
                <h3 class="partyd_name">党员总数</h3>
                <i class="partyd_num">{{pmdata.psum}}</i>
            </div>


            
            <div class="partytable">
                <img height="50" width="50"  src='../../../static/img/partym.png'/>
                <h3 class="partyd_name">男性党员数</h3>
                <i class="partyd_num">{{pmdata.pman}}</i>
            </div>
            

           
            <div class="partytable">
                <img height="50" width="50"  src='../../../static/img/partywm.png'/>
                <h3 class="partyd_name">女性党员数</h3>
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

                this.$http.get('http://110.53.162.165:5050/api/count/p_m').then(function(res){  
                                this.pmdata.psum=res.data.data[0].psum;
                                this.pmdata.pman=res.data.data[0].pman;
                                this.pmdata.pwoman=res.data.data[0].pwoman;

                                                    
                            },function(){
                        console.log('请求失败处理');
                    });
                this.$http.get('http://110.53.162.165:5050/api/count/pm').then(function(res){
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
    }
}
</script>

<style lang="scss" scoped>
.party-data{
    
    width: 80%;
    position: absolute;

    left:50%;

    top:50%;

    transform: translate(-50%, -50%);
    background: rgba(0,0,0,.2);
    //background-color: rgb(58, 8, 39);
}
.partytable{
    img{
        margin-left: 15%;
    }
			position: relative;
            margin: 15px 0;

			.partyd_name{
                position: absolute;
                top: 15px;
                margin-bottom: -5px;
                display: inline-block;
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

