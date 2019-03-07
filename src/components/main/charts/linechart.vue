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
                text: '某数据关系图',
                x: 'center',
                textStyle:{
                    color: '#ffffff'
                }
            },
            legend: {
                data:['电压'],
                x: 'left'
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
                data: ['2018-12-30 16:55:21','2018-12-30 16:55:24','2018-12-30 16:55:27','2018-12-30 16:55:30','2018-12-30 16:55:33','2018-12-30 16:55:36','2018-12-30 16:55:39'],
                
                axisLine:{ //坐标轴轴线相关设置。
                    lineStyle:{
                    color:'#ffffff', //坐标轴线线的颜色。
                    dth:1,//这里是为了突出显示加上的
                    }
                }
            },
            yAxis: {
                name : '温度(c)',
                type : 'value',
                max : 40,
				axisLine:{
		            lineStyle:{
		            color:'#ffffff',
		            width:1,//这里是为了突出显示加上的
		            }
				}
            },
            series: [{
                name:'温度',
                symbolSize: 8,
                hoverAnimation: false,
                data: [20, 25, 21, 22, 23, 30, 35],
                type: 'line'
            }]
       }
    }
  },
  methods:{
      get:function(){ //
              //发送get请求

                  this.axios.get('http://47.94.238.110/RiverVis/api/newpow?',{id:862105024039301})
                    .then(function (response) {

                      console.log(response.charge);
                    })
                    .catch(function (error) {
                      console.log(error);
                    });
             
      }
  },
  mounted:function(){//页面初始化函数
        this.get();

    }
  
}
</script>
