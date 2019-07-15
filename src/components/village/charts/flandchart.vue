<template>
    <div class="vill_chart">
      <!-- 加载柱状图 并设置图表大小 -->
      <v-chart  :options="polar"  style="width:100%;height:100%;" />    
    </div>
</template>
<script>
export default {
    name: "flandchart",
  data () {
    return {
      polar: {
                title :{                //标题
                    text: '地域林地占地统计',
                    x:'left',         //居中
                    textStyle:{
                    color: '#ffffff'    //标题颜色
                    }
                },
                tooltip: {
                     formatter: function (params) { //自定义浮窗
                        const res='组名:'+params.data[0]+'</br>集体经营面积:'+params.data[1]+'</br>承包到户面积:'+params.data[2];
                        return res;
                    },
                },
                visualMap: {
                    max: 1000,
                    inRange: {
                        color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
                    }
                },
                
                xAxis3D: {
                    name:'组名',
                    nameGap:40,
                    type: 'category',
                    data: [],
                    axisLine:{
                        lineStyle:{
                            color:'white',
                        }
                    }
                },
                yAxis3D: {
                    name : '(/集体经营面积)',
                    nameGap:25,
                    type: 'value',
                    scale:true,//脱离 0 值比例(不会强制包含零刻度)
                    axisLine:{
                        lineStyle:{
                            color:'white',
                        }
                    }
                },
                zAxis3D: {
                    name : '(/承包到户面积)',
                    nameGap:35,
                    type: 'value',
                    scale:true,//脱离 0 值比例(不会强制包含零刻度)
                    axisLine:{
                        lineStyle:{
                            color:'white',
                        }
                    }
                },
                grid3D: {
                    boxWidth: 200,
                    boxDepth: 80,
                    
                    viewControl: {
                        // projection: 'orthographic',
                        beta:55,
                        alpha:8,
                        distance:260
                    },
                    light: {
                        main: {
                            intensity: 1.2,
                            shadow: true
                        },
                        ambient: {
                            intensity: 0.3
                        }
                    }
                },
                series: [{
                    type: 'bar3D',
                    data:[],
                    shading: 'lambert',

                    label: {
                        textStyle: {
                            fontSize: 16,
                            borderWidth: 1
                        }
                    },

                    emphasis: {
                        label: {
                            textStyle: {
                                fontSize: 20,
                                color: '#900'
                            }
                        },
                        itemStyle: {
                            color: '#900'
                        }
                    }
                }]
       }
    }
  },
  methods:{
      getcoldata:function(){ //
              //发送get请求

                  this.$http.get('http://110.53.162.165:5050/api/count/g_fLand').then(function (res) {

                      for (let i = 0; i<res.data.data.length; i++) {
                          if(res.data.data[i].collective=="")
                          res.data.data[i].collective=0;
                          if(res.data.data[i].contracted=="")
                          res.data.data[i].contracted=0;
                          const pdata=[res.data.data[i].grouptype,res.data.data[i].collective,res.data.data[i].contracted];
                            this.polar.series[0].data.push(pdata);
                            this.polar.xAxis3D.data.push(res.data.data[i].grouptype);
                          }
                          
                    })
                    .catch(function (error) {
                      console.log(error);
                    });
             
      }
  },
  computed: { //计算属性 取存在状态库中的值
     
  },
  watch:{
      
  },
  mounted:function(){//页面初始化函数
        this.getcoldata();

    }
}
</script>
<style lang="scss">
.vill_chart{
   
    background: rgba(0,0,0,.2);
    width:100%;
    height: 95%;
    

}
</style>


