<template>
      <v-chart  :options="polar" style="width:23vw;height:29vh"/>    
</template>

<script>
export default {
name: "linechart",
  data () {
    return {
      polar: {
            title: {
            text: '广播是否公共可视化',
            textStyle:{
                color:'#fff',
                fontSize:'15',
        }
        
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function (params) {
            var tar = params[1];
            return tar.name +  ' : ' + tar.value;
        }
    },
    textStyle:{
            color:'#daca43'
        },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type : 'category',
        splitLine: {show:false},
        data : ['总数','公共','非公共'],
    },
    yAxis: {
        type : 'value'
    },
    series: [
        {
            name: '公共',
            type: 'bar',
            stack:  '总数',
            itemStyle: {
                normal: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                },
                emphasis: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: [0, 1700, 0]
        },
        {
            name: '非公共',
            type: 'bar',
            stack: '总数',
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    color:'#fff'
                }
            },
            data:[2900, 1200,1700]
        }
    ]
       }
    }
  },
  methods:{
      get:function(){ //
              //发送get请求

                  
             
      }
  },
  mounted:function(){//页面初始化函数
        this.get();

    }
  
}
</script>
