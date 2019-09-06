<template>
    <div class="iot_char_right" v-show="chartvisible">
      <v-chart  :options="polar" style="width:20vw;height:29vh"/>    
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
name: "phchart",
  data () {
    return {
    polar: {
            title: {
                left: 'center',
                text: '河水酸碱度',
                textStyle:{
                        color: '#ffffff'
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
                dataZoom: [{
                type: 'inside',
                start: 0,
                end: 100
            },
                ],
            xAxis: {
                type: 'category',
                axisLine:{
                                lineStyle:{
                                color:'#ffffff',
                                width:1,//这里是为了突出显示加上的
                                }
                            },
                data: []
            },
            yAxis: {
                type: 'value',
                max:15,
                axisLine:{
                                lineStyle:{
                                color:'#ffffff',
                                width:1,//这里是为了突出显示加上的
                                }
                            },
                data:[6,8,4,7,2,5,9,3]

            },
            series: [
                {
                    name:'酸碱度',
                    type:'line',
                    symbol: 'none',
                    sampling: 'average',
                    data:[],
                    itemStyle: {
                        normal: {
                            color: '#f2c31a'
                        }
                    },
                    // areaStyle: {
                    //     normal: {
                    //         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    //             offset: 0,
                    //             color: '#8ec6ad'
                    //         }, {
                    //             offset: 1,
                    //             color: '#ffe'
                    //         }])
                    //     }
                    // },
                }
            ]
        },
       chartvisible:false

    }
  },
   methods:{
      getcoldata:function(selectip){ //
              //发送get请求
                  this.polar.series[0].data=[];
                  this.polar.xAxis.data=[];
                  this.$http.get('http://localhost:8080/tccp/user/getAllUser').then(function (res) {
                      
                     // console.log(res.data.data[0].temp);
                    
                      for (let i = 0; i<res.data.length; i++) {
                          if(res.data[i].ip==selectip){
                            this.polar.series[0].data.push(res.data[i].ph);
                            this.polar.xAxis.data.push(res.data[i].time);
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
     ...mapGetters(["selectip"]),
     ...mapGetters(["chartSet"]),
     listenchartSet(){  //监听 chartSet值的变化
       return this.chartSet;
     },
     listenselectip(){
      return this.selectip;
    },
  },
   
  watch:{
      listenselectip (vag) {
          console.log(vag);
          this.getcoldata(vag);
      },
      listenchartSet:{
          handler(vag){  //handler执行具体方法
            if(vag.name=='ph') //河水酸碱度
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
        // this.getcoldata("2019-03-17 13:02:31","2019-03-22 15:18:55",20);
        
    }
  
}
</script>
