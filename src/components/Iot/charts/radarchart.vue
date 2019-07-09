<template>
    <div class="iot_char_right" v-show="chartvisible">
      <v-chart  :options="polar" style="width:20vw;height:29vh"/>   
    </div> 
</template>

<script>
import { mapGetters } from 'vuex';
export default {
name: "radarchart",
  data () {
    return {
      // polar: {         
      //   tooltip: {},
      //   color: ['#1FC06E'],
      //   legend: [
      //       {
      //           data: ['最新环境数据'],
      //           x:'left',
      //           textStyle:{
      //           color: ['#1FC06E']//字体颜色
      //        } ,
      //       }
      //   ],
      //   radar: {
      //       // shape: 'circle',
      //       name: {
      //           textStyle: {
      //               color: '#fff',
      //               backgroundColor: '#999',
      //               borderRadius: 3,
      //               padding: [3, 5]
      //       }
      //       },
      //       indicator: [
      //       { name: '雨量', max: 100},
      //       { name: '水位', max: 30},
      //       { name: '酸碱度', max: 15},
      //       { name: '空气质量', max: 100},
      //       { name: '温度', max: 50},
      //       { name: '湿度', max: 100},
            
      //       ],
            
      //   },
        
      //   series: [{
      //       name: '最新环境数据',
      //       type: 'radar',
            
      //       // areaStyle: {normal: {}},
      //       data : [
      //           {
      //               value : [],
      //               name : '最新环境数据'
      //           }
      //       ]
      //   }]
      // }
        polar:{
            title: {
                text: 'PM2.5浓度变化图',
                x:'center',
                textStyle:{
                        color: '#ffffff'
                        }
            },
            tooltip : {  //提示框组件
                trigger: 'axis',  //触发类型，坐标轴触发
                axisPointer: {
                    type: 'cross',
                    animation: false,
                    label: {
                        backgroundColor: '#505765'
                    }
                }
            },
        grid: {
                left: '0.8%',
                right: '7%',
                top:'12%',
                bottom: '10%',
                containLabel: true
            },
        toolbox: {  //工具框组件
                feature: {
                    saveAsImage: {}
                }
            },
            dataZoom: [  //数据区域缩放
                {
                    show: true,  //是否显示
                    realtime: true,
                    start: 65,
                    end: 85
                },
                {
                    type: 'inside',   //
                    realtime: true,
                    start: 10, //数据窗口范围的起始百分比，10%
                    end: 100//数据窗口范围的结束的百分比
                }
            ],
        xAxis: {
                name:'',
                type: 'category',  //
                axisLabel: {
                    color: function (value) {
                        return value ==  '#00ffb2';
                    }
                },
                axisLine:{ //坐标轴轴线相关设置。
                            lineStyle:{
                            color:'#ffffff', //坐标轴线线的颜色。
                            width:1,//这里是为了突出显示加上的
                            }
                        },
                data: ['2018-04-21 12:37:14', '2018-04-22 12:37:14', '2018-04-23 12:37:14', '2018-04-24 12:37:14', '2018-04-21 12:37:14', '2018-04-21 12:37:14', '2018-04-21 12:37:14']
            },
        yAxis: {
                name:'',
                max:100,
                textStyle:{
                show:true
                },
                type: 'value',
                axisLine:{ //坐标轴轴线相关设置。
                            lineStyle:{
                            color:'#ffffff', //坐标轴线线的颜色。
                            width:1,//这里是为了突出显示加上的
                            }
                        },
            },
        series: [
                {
                    name:'PM2.5浓度（单位：μg/m3）',
                    type:'line',
                    stack: '总量',
                    data:[10, 13, 10, 34, 90, 30, 20]
                },
            
            ]
        },
       chartvisible:false

    }
  },
  methods:{
      getcoldata:function(){ //
              //发送get请求
                  
                  this.$http.get('http://www.teavamc.com/api/rivervis/envbytl').then(function (res) {
                     
                    this.polar.series[0].data[0].value=res.data[0].pm
                    
                    
                    })
                    .catch(function (error) {
                      console.log(error);
                    });
             
      }
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
            if(vag.name=='pm') //温度表
            {
                this.getcoldata(vag.timeframe[0],vag.timeframe[1],vag.limit);
                this.chartvisible=vag.chartvisible;
            }
        },
        deep: true//是否深度监听设置deep: true  则可以监听到vag.timeframe的变化，此时会给vag的所有属性都加上这个监听器，
        //immediate: true 代表如果在 wacth 里声明了 变量 之后，就会立即先去执行里面的handler方法
      }
  },
  mounted:function(){//页面初始化函数
        this.getcoldata();

    }
  
 }
//  methods:{
//       getcoldata:function(btime,etime,lim){ //
//               //发送get请求
//                   this.polar.series[0].data=[];
//                   this.polar.series[1].data=[];
//                   this.polar.xAxis.data=[];
//                   this.$http.get('http://www.teavamc.com/api/rivervis/envbytl',
//                   {params :{begintime:btime,endtime:etime,limit:lim}}).then(function (res) {
                      
//                      // console.log(res.data.data[0].temp);
                    
//                       for (let i = 0; i<res.data.data.length; i++) {
//                             this.polar.series[0].data.push(res.data.data[i].temp);
//                             this.polar.series[1].data.push(res.data.data[i].hum);
//                             this.polar.xAxis.data.push(res.data.data[i].time);
//                           }
                       
//                     })
//                     .catch(function (error) {
//                       console.log(error);
//                     });  
//       },
//       LopTime(){
//         setInterval(this.getcoldata,10000)   //目前用定时器进行ajax轮询 ，后期用websocket
//       },
//   },
//   computed: { //计算属性 取存在状态库中的值
//      ...mapGetters(["chartSet"]),
//      listenchartSet(){  //监听 chartSet值的变化
//        return this.chartSet;
//      }
//   },
//   watch:{
//       listenchartSet:{
//           handler(vag){  //handler执行具体方法
//             this.getcoldata(vag.timeframe[0],vag.timeframe[1],vag.limit);
//         },
//         deep: true//是否深度监听设置deep: true  则可以监听到vag.timeframe的变化，此时会给vag的所有属性都加上这个监听器，
//         //immediate: true 代表如果在 wacth 里声明了 变量 之后，就会立即先去执行里面的handler方法
//       }
//   },
//   mounted:function(){//页面初始化函数
//         this.getcoldata("2019-03-17 13:02:31","2019-03-22 15:18:55",20);
//         //this.LopTime();
//     }
  
  
// }
</script>
