<template>
      <v-chart  :options="polar" style="width:23vw;height:29vh"/>    
</template>

<script>
export default {
name: "radarchart",
  data () {
    return {
      polar: {         
        tooltip: {},
        color: ['#1FC06E'],
        legend: [
            {
                data: ['最新环境数据'],
                x:'left',
                textStyle:{
                color: ['#1FC06E']//字体颜色
             } ,
            }
        ],
        radar: {
            // shape: 'circle',
            name: {
                textStyle: {
                    color: '#fff',
                    backgroundColor: '#999',
                    borderRadius: 3,
                    padding: [3, 5]
            }
            },
            indicator: [
            { name: '雨量', max: 100},
            { name: '水位', max: 30},
            { name: '酸碱度', max: 15},
            { name: '空气质量', max: 100},
            { name: '温度', max: 50},
            { name: '湿度', max: 100},
            
            ],
            
        },
        
        series: [{
            name: '最新环境数据',
            type: 'radar',
            
            // areaStyle: {normal: {}},
            data : [
                {
                    value : [],
                    name : '最新环境数据'
                }
            ]
        }]
      }
    }
  },
  methods:{
      getcoldata:function(){ //
              //发送get请求
                  
                  this.$http.get('http://localhost:8081/RiverVis/api/envdata').then(function (res) {
                     
                    this.polar.series[0].data[0].value=[res.data[0].rain,res.data[0].wlevel,res.data[0].ph,res.data[0].pm,res.data[0].temp,res.data[0].hum];
                    
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
