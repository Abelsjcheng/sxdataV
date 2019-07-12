<template>
<div class="partywork">
    <div class="pwtitle">党员值班</div>
    <div class="pwitem">值班党员:{{pwdata.uname}} </div>
    <div class="pwitem">党员组名:{{pwdata.grouptype}}</div>   
    <div class="pwitem">值班地点:{{pwdata.address}}</div>    
    <div class="pwitem">值班日期:{{pwdata.worktime}}</div>
    <div class="pwitem">值班口号:{{pwdata.content}}</div>
</div>
</template>

<script>
export default {
    data () {
        return {
        pwdata:{grouptype:'',uname:'',worktime:'',address:'',content:''}
        }
    },
    methods: {
        
        getPartywdata:function(){ 

                this.$http.get('http://110.53.162.165:5050/api/pwork/five').then(function(res){  
                                this.pwdata.grouptype=res.data.data[0].grouptype;
                                this.pwdata.uname=res.data.data[0].uname;
                                this.pwdata.worktime=res.data.data[0].worktime;                    
                                this.pwdata.address=res.data.data[0].address;
                                this.pwdata.content=res.data.data[0].content;
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
        this.getPartywdata();
    }
}
</script>

<style lang="scss">
.partywork{
    position: relative;
    width: 95%;
    margin: 10px 0 0 10px;
    background: rgba(0,0,0,.2);
}
.pwtitle{
    color: #ffffff;
    font-size: 18px;
    padding: 10px;
    
}
.pwitem{
    color: #ffffff;
    margin: 10px 0 0 10px;
}
</style>

