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
        color: ['#1FC06E','#396CC0'],
        legend: [
            {
                data: ['预算分配'],
                x:'left',

                textStyle:{
                color: ['#1FC06E']//字体颜色
             } ,
            },{
                data: ['实际开销'],
                x:'left',
                y:'10%',
                textStyle:{
                color: ['#396CC0']//字体颜色
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
            { name: '销售', max: 6500},
            { name: '管理', max: 16000},
            { name: '信息技术', max: 30000},
            { name: '客服', max: 38000},
            { name: '研发', max: 52000},
            { name: '市场', max: 25000},
            
            ],
            
        },
        
        series: [{
            name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            
            // areaStyle: {normal: {}},
            data : [
                {
                    value : [4300, 10000, 28000, 35000, 50000, 19000],
                    name : '预算分配'
                },
                {
                    value : [5000, 14000, 28000, 31000, 42000, 21000],
                    name : '实际开销'
                }
            ]
        }]
      }
    }
  },
  
  
}
</script>
