<template>
      <v-chart  :options="polar" style="width:23vw;height:29vh"/>    
</template>

<script>
import { mapGetters } from 'vuex';
export default {
name: "typechart",
  data () {
    return {
      polar: {
              title : {
                  text: '各\n时\n长\n广\n播\n数',
                  y: 'top',
                  textStyle:{
                      color: '#91c7ae',
                      fontsize:32,
                      },
                  
                  },
              tooltip : {
            trigger: 'item',
            formatter: "数目： <br/>{b} min: {c} "
        },
              angleAxis: {
                axisLine:{ //坐标轴轴线相关设置。
                    lineStyle:{
                    color:'#e8e4e4', //坐标轴线线的颜色。
                  
                    }
                },
               
              },
              radiusAxis: {
                  type: 'category',
                  data: ['0~2', '2~4', '4~6', '6~8','8~10','>10'],
                  axisLine:{ //坐标轴轴线相关设置。
                    lineStyle:{
                    color:'#e8e4e4', //坐标轴线线的颜色。
                  
                    }
                },
                  radius : '65%',
                  center: ['50%', '70%'],
                  
              },
              polar: {
              },
              series: [{
                  type: 'bar',
                  data: [390,180,960,600,1300,1200],
                  coordinateSystem: 'polar'
              }],
              itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
      }
    }
  },
    methods: {
    get:function(){ 
            this.$http.get('http://110.53.162.165:5050/api/bp/bl').then(function(res){
                        for (let i = 0; i < res.data.data.length; i++) {
                          this.polar.serise[1].data[0].value=res.data.data[i].lenth
                           this.polar.serise[1].data[1].value=res.data.data[i].count

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