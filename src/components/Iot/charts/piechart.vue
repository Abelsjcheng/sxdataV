<template>
    <div class="iot_char_right" v-show="chartvisible">
      <v-chart  :options="polar" style="width:20vw;height:29vh"/>    
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
name: "piechart",
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
                data: ['2018-04-21 12:37:14', '2018-04-22 12:37:14', '2018-04-23 12:37:14', '2018-04-24 12:37:14', '2018-04-21 12:37:14', '2018-04-21 12:37:14', '2018-04-21 12:37:14']
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
                    data:[6,8,4,7,2,5,9,3],
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
      getcoldata:function(){ //
              //发送get请求
                  
                  this.$http.get('http://localhost:8081/RiverVis/api/newpow?id=862105024024824').then(function (res) {
                    
                    this.polar.series[0].data[0].value=res.data.pow1;
                    this.polar.series[0].data[1].value=res.data.grouppow;
                    this.polar.series[0].data[2].value=res.data.v24;
                    this.polar.series[0].data[3].value=res.data.v28;
                    this.polar.series[0].data[4].value=res.data.outv1;
                    this.polar.series[0].data[5].value=res.data.outv2;
                    this.polar.series[0].data[6].value=res.data.extendpow;
                    this.polar.series[0].data[7].value=res.data.solarpow;
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
            if(vag.name=='ph') //河水酸碱度
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
        this.getpowdata();
    }
  
}
</script>
