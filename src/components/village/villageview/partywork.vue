<template>
<div class="partywork">
    <div class="pwtitle">党员值班</div>
    <div class="pwitem">值班党员:{{pwdata.uname}} </div>
    <div class="pwitem">党员组名:{{pwdata.grouptype}}</div>   
    <div class="pwitem">值班地点:{{pwdata.address}}</div>    
    <div class="pwitem">联系方式:{{pwdata.phone}}</div> 
    <div class="pwitem">值班日期:{{pwdata.worktime}}</div>
    <div class="pwitem">值班口号:{{pwdata.content}}</div>
</div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    data () {
        return {
        pwdata:{grouptype:'',uname:'',worktime:'',phone:'',address:'',content:''}
        }
    },
    methods: {
        
        getPartywdata:function(selectip){
                this.$http.get('http://110.53.162.165:5050/api/pwork/five').then(function(res){
                      for (let i = 0; i<res.data.data.length; i++) {
                         if(res.data.data[i].id==j){
                                this.pwdata.grouptype=res.data.data[i].grouptype;
                                this.pwdata.uname=res.data.data[i].uname;
                                this.pwdata.worktime=res.data.data[i].worktime; 
                                this.pwdata.phone=res.data.data[i].phone;                   
                                this.pwdata.address=res.data.data[i].address;
                                this.pwdata.content=res.data.data[i].content;
                          }
                     }
                },function(){
                        console.log('请求失败处理');
                    });
                
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
     mounted:function(){//页面初始化函数
        this.getPartywdata(this.selectip);
    }
}
</script>

<style lang="scss">
.partywork{
    display: flex;
    flex-direction:column;
    justify-content: space-around;
    width: 95%;
    height: 29%;
    background: rgba(0,0,0,.2);
}
.pwtitle{
    color: #ffffff;
    font-size: 18px;
    padding: 10px;
    
}
.pwitem{
    color: #ffffff;
    font-size: 14px;
}
</style>

