<template>
      <v-chart  :options="polar"  style="width:23vw;height:29vh" />    
</template>

<script>
export default {
name: "barchart",
  data () {
    return {
      polar: {
                title :{
                    text: '某数据统计',
                    x:'center',
                    textStyle:{
                    color: '#00ffb2'
                    }
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        crossStyle: {
                            color: '#999'
                        }
                    }
                },
                toolbox: {
                    feature: {
                        dataView: {show: true, readOnly: false},
                        magicType: {show: true, type: [ 'bar']},
                        restore: {show: true},
                        saveAsImage: {show: true}
                    }
                },
                grid:{
                    
                    top:'75px',
                    left: '5%'
                },
                legend: {
                    itemWidth: 20,
                    itemHeight: 10,
                    itemGap:2,
                    data:['水量','温度'],
                    x:'left',
                    top:'25px',
                    textStyle: {
                        color: ['#1FC06E','#396CC0']
                    }
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                        axisPointer: {
                            type: 'shadow'
                        },
                        axisLabel:{
                            interval:0,//横轴信息全部显示
                        },
                        axisLine:{
                            lineStyle:{
                            color:'#0087ED',
                            width:1,//这里是为了突出显示加上的
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: '水量',
                        min: 0,
                        max: 250,
                        interval: 50,
                        axisLabel: {
                            formatter: '{value}'
                        },
						nameTextStyle: {
							color: ['#1FC06E']
						},
						axisLine:{
		                    lineStyle:{
		                    color:'#1FC06E',
		                    width:1,//这里是为了突出显示加上的
		                    }
						}
                    },
                    {
                        type: 'value',
                        name: '温度',
                        min: 0,
                        max: 25,
                        interval: 5,
                        axisLabel: {
                            formatter: '{value}'
                        },
						nameTextStyle: {
							color: ['#0087ED']
						},
						axisLine:{
		                    lineStyle:{
		                    color:'#0087ED',
		                    width:1,//这里是为了突出显示加上的
		                    }
						}
                    }
                ],
                series: [
                {
                    name:'水量',
                    type:'bar',
                    data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                    color:['#1FC06E']
                },
                {
                    name:'温度',
                    type:'bar',
                    data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                    color:['#396CC0']
                }
            ]
       }
    }
  },
  
  
}
</script>
