<template>
      <v-chart  :options="polar"/>    
</template>

<script>
export default {
name: "charts1",
  data () {
    return {
      polar: {
        title : {
            text: '某数据统计',
            x:'107',
            textStyle:{
            color: '#00ffb2'
            }
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        tooltip:{
        show: true,
        position:'left'
        },
        series : [
            {
                name: '访问来源',
                type: 'pie',
                radius : '30%',
                center: ['25%', '30%'],
                
                data:[
                    {value:335, name:'微信访问'},
                    {value:310, name:'公众号访问'},
                    {value:234, name:'扫码进入'},
                    {value:135, name:'分享进入'},
                    {value:1548, name:'搜索访问'}
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
  
  
}
</script>
