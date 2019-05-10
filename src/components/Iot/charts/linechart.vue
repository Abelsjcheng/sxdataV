<template>
      <v-chart  :options="polar" style="width:54vw;height:29vh"/>    
</template>

<script>
import { mapGetters } from 'vuex';
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
                data:['温度','湿度'],
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
            dataZoom: {
                show : true,
                realtime : true,
                start : 0,
                end : 100,
                backgroundColor:'#ffffff'
            },
            
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
                }
            ]
       },
        
    }
  },
  methods:{
      getcoldata:function(btime,etime,lim){ //
              //发送get请求
                  this.polar.series[0].data=[];
                  this.polar.series[1].data=[];
                  this.polar.xAxis.data=[];
                  this.$http.get('http://www.teavamc.com/api/rivervis/envbytl',{params :{begintime:btime,endtime:etime,limit:lim}}).then(function (res) {
                  
                    
                      for (let i = 0; i<res.data.data.length; i++) {
                            this.polar.series[0].data.push(res.data.data[i].temp);
                            this.polar.series[1].data.push(res.data.data[i].hum);
                            this.polar.xAxis.data.push(res.data.data[i].time);
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
  computed: { //计算属性 取存在状态库中的值
     ...mapGetters(["chartSet"]),
     listenchartSet(){  //监听 chartSet值的变化
       return this.chartSet;
     }
  },
  watch:{
      listenchartSet:{
          handler(vag){  //handler执行具体方法
            this.getcoldata(vag.timeframe[0],vag.timeframe[1],vag.limit);
        },
        deep: true//是否深度监听设置deep: true  则可以监听到vag.timeframe的变化，此时会给vag的所有属性都加上这个监听器，
        //immediate: true 代表如果在 wacth 里声明了 变量 之后，就会立即先去执行里面的handler方法
      }
  },
  mounted:function(){//页面初始化函数
        this.getcoldata("2019-03-17 13:02:31","2019-03-22 15:18:55",20);
        //this.LopTime();
    }
  
  
}
</script>
