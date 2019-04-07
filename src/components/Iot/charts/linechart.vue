<template>
      <v-chart  :options="polar" style="width:54vw;height:29vh"/>    
</template>

<script>
export default {
name: "linechart",
  data () {
    return {
      polar: {
            title: {
                text: '温湿度数据',
                x: 'center',
                textStyle:{
                    color: '#ffffff'
                }
            },
            legend: {
                data:['温度','湿度','PH','空气质量'],
                x: 'left', 
                    textStyle: {  //组件每项颜色
                        color: ['#1FC06E','#396CC0']
                    }
                
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    animation: false
                }
            },
            grid: {
                
                height: '65%'
            },
            toolbox: {
                show: true,
                 right: 20, //toolbox的定位位置
                iconStyle:{
                        color:'#ffffff'
                },
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    dataView: {readOnly: false},
                    magicType: {type: ['line', 'bar']},
                    restore: {},
                    saveAsImage: {}
                }
            },
            axisPointer: {
                link: {xAxisIndex: 'all'}
            },
            dataZoom: [
                {
                    type: 'inside',//时间轴缩放
                    show : true,
                    realtime : true,
                    start : 80,
                    end : 100,
                    backgroundColor:'#ffffff'
                }
            ],
            
            xAxis: {
                type: 'category',
                data: [],
                
                axisLine:{ //坐标轴轴线相关设置。
                    lineStyle:{
                    color:'#ffffff', //坐标轴线线的颜色。
                    width:1,//这里是为了突出显示加上的
                    }
                }
            },
            yAxis: [
                {
                    name : '温度(c)',
                    type : 'value',
                    max : 50,
                    axisLine:{
                        lineStyle:{
                        color:'#ffffff',
                        width:1,//这里是为了突出显示加上的
                        }
                    }
                },
                {
                    name : '湿度',
                    type : 'value',
                    max : 100,
                    axisLine:{
                        lineStyle:{
                        color:'#ffffff',
                        width:1,//这里是为了突出显示加上的
                        }
                    }
                }
            ],
            series: [
                {
                    name:'温度',
                    symbolSize: 8,
                    hoverAnimation: false,
                    data: [],
                    type: 'line'
                },
                {
                    name:'湿度',
                    yAxisIndex:1,
                    symbolSize: 8,
                    hoverAnimation: false,
                    data: [],
                    type: 'line'
                },
                {
                    name:'PH',
                    yAxisIndex:1,
                    symbolSize: 8,
                    hoverAnimation: false,
                    data: [],
                    type: 'line'
                },
                {
                    name:'空气质量',
                    yAxisIndex:1,
                    symbolSize: 8,
                    hoverAnimation: false,
                    data: [],
                    type: 'line'
                }
            ]
       },
        
    }
  },
  methods:{
      getcoldata:function(){ //
              //发送get请求
                  var datalength;
                  this.polar.series[0].data=[];
                  this.polar.series[1].data=[];
                  this.polar.xAxis.data=[];
                  this.$http.get('http://localhost:8081/RiverVis/api/envdata').then(function (res) {
                   /* datalength=res.data.data.length;
                    console.log(res.data.data.length)
                    if(res.data.data.length>20)
                        datalength=20;
                    else{
                        datalength=res.data.data.length;
                    }*/
                     console.log(res.data.length)
                      for (let i = res.data.length-1; i >=0; i--) {
                            this.polar.series[0].data.push(res.data[i].temp);
                            this.polar.series[1].data.push(res.data[i].hum);
                            this.polar.series[2].data.push(res.data[i].ph);
                            this.polar.series[3].data.push(res.data[i].pm);
                            this.polar.xAxis.data.push(res.data[i].time);
                          }
                    })
                    .catch(function (error) {
                      console.log(error);
                    });
             
      },
      LopTime(){
        setInterval(this.getcoldata,10000)   //目前用定时器进行ajax轮询 ，后期用websocket
      },
  },
  mounted:function(){//页面初始化函数
        this.getcoldata();
        this.LopTime();
    }
  
  
}
</script>
