<template>
      <v-chart  :options="polar" style="width:100%;height:100%"/>    
</template>

<script>
import { mapGetters } from 'vuex';
export default {
name: "typechart",
  data () {
    return {
      polar: {
        title : {
            text: '广播状态',
            x:'center',
            textStyle:{
                color: '#91c7ae'
                }
             },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        color:['#61a0a8','#ec6578b5'],
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['正常播出单','紧急播出单'],
            textStyle:{
                color: 'white'
                }
        },
        series : [
            {
                name: '广播状态',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:234, name:'正常播出单'},
                    {value:135, name:'紧急播出单'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
       }
    }
  },
   methods: {
    get:function(){ 
            this.$http.get('http://110.53.162.165:5050/api/btime/bds').then(function(res){
                        for (let i = 0; i < res.data.data.length; i++) {
                          this.polar.serise[1].data[0].value=res.data.data[i].bcount
                           this.polar.serise[1].data[1].value=res.data.data[i].scategory

                            // const tersdata={aname:res.data.data[i].aname,run:res.data.data[i].run,down:res.data.data[i].down}
                            // this.mdata.push(tersdata)
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
     /* listenselectplace:function(vag){//实时监听状态库中值的改变 
        for (let i = 0; i < this.mdata.length; i++) {
            if(vag==this.mdata[i].aname)
            {
              this.terdata={aname:this.mdata[i].aname,run:this.mdata[i].run,down:this.mdata[i].down}
            }
          }
      }*/
  },
   mounted:function(){//页面初始化函数
        this.get();
        
    }
  
  
}
</script>
