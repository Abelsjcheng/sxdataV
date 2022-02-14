<template>
    <div class="iot_char_right" v-show="chartvisible">
      <v-chart  :options="polar" style="width:20vw;height:29vh"/>    
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
name: "tempAhumchart",
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
            
            toolbox: {
                show: true,
                 right: 10, //toolbox的定位位置
                feature: {
                    
                    dataView: {readOnly: false},
                    magicType: {type: ['line', 'bar']},
                }
            },
             tooltip : {
                trigger: 'axis',
                axisPointer: {
                type: 'cross',
                animation: false,
                label: {
                       backgroundColor: '#505765'
            }
        }
    },
            legend: {
                data:['温度','湿度'],
                x: 'left', 
                 textStyle: {  //组件每项颜色
                        color: ['#1FC06E','#396CC0']
                    }
            },
             dataZoom:[{
                    type:'inside',
                    
                    filterMode: 'empty',
                    start: 0,
                    end: 100

                }],
    
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
                    name : '温度(/°C)',
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
                    data: [22,23,23,37,40,32,27,28],
                    type: 'line'
                    
                },
                {
                    name:'湿度',
                    yAxisIndex:1,
                    symbolSize: 8,
                    hoverAnimation: false,
                    data: [ 99,23,54,67,44,86,55],
                    type: 'line'
                
                }
            ]
       },
       chartvisible:false
    }
  },
  methods:{
      getcoldata:function(selectaid,btime,etime,lim){ //
              //发送get请求
                  this.polar.series[0].data=[];
                  this.polar.series[1].data=[];
                  this.polar.xAxis.data=[];
                  this.$http.get('api/rivervis/envbytl',
                  {params :{begintime:btime,endtime:etime,limit:lim}}).then(function (res) {
                      
                     // console.log(res.data.data[0].temp);
                    
                      for (let i = 0; i<res.data.data.length; i++) {
                          if(res.data.data[i].aid==selectaid){
                            this.polar.series[0].data.push(res.data.data[i].temp);
                            this.polar.series[1].data.push(res.data.data[i].hum);
                            this.polar.xAxis.data.push(res.data.data[i].time);
                          }
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
     },
     ...mapGetters(["selectaid"]),
     listenselectaid() {
      return this.selectaid;
    },
  },
  watch:{
      listenselectaid (vag) {
        // this.getcoldata(vag,"2019-03-16 13:02:31","2019-03-24 15:18:55",20);
        },
      listenchartSet:{
          handler(vag){  //handler执行具体方法
            if(vag.name=='temp') //温度表
            {
                // this.getcoldata(vag.timeframe[0],vag.timeframe[1],vag.limit);
                this.chartvisible=vag.chartvisible;
            }
        },
        deep: true//是否深度监听设置deep: true  则可以监听到vag.timeframe的变化，此时会给vag的所有属性都加上这个监听器，
        //immediate: true 代表如果在 wacth 里声明了 变量 之后，就会立即先去执行里面的handler方法
      }
  },
  mounted:function(){//页面初始化函数
         this.getcoldata(this.selectaid,"2019-03-17 13:02:31","2019-03-22 15:18:55",50);
        //this.LopTime();
    }
  
  
}
</script>
