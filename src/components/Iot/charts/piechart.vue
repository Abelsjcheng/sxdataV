<template>
      <v-chart  :options="polar" style="width:23vw;height:29vh"/>    
</template>

<script>
export default {
name: "piechart",
  data () {
    return {
      polar: {
        title : {
            text: '终端:862105024041885最新数据',
            x:'center',
            textStyle:{
            color: '#00ffb2'
            }
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} (v)"
        },
        series : [
            {
                name: '终端采集数据',
                type: 'pie',
                radius : '70%',
                center: ['50%', '55%'],
                
                data:[
                    {value:33, name:'电池1电压'},
                    {value:31, name:'电池组电压'},
                    {value:23, name:'24v输出电压'},
                    {value:23, name:'28v输出电压'},
                    {value:13, name:'18v1输出电压'},
                    {value:15, name:'18v2输出电压'},
                    {value:15, name:'外部电压'},
                    {value:15, name:'太阳能电压'}
                ],
                label: {
                normal: {
                    textStyle: {
                        color: '#05d2e2'
                    }
                }
                },
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
         ]
       }
    }
  },
   methods:{
      getpowdata:function(){ //
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
  mounted:function(){//页面初始化函数
        this.getpowdata();
    }
  
}
</script>
