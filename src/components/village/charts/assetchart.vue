<template>
      <!-- 加载柱状图 并设置图表大小 -->
      <v-chart  :options="polar"  style="width:100%;height:100%;" />    
</template>
<script>
export default {
    name: "flandchart",
  data () {
    return {
      polar: {
                title: {
                text: '地区资产清查统计',
                textStyle:{
                    color: '#ffffff'    //标题颜色
                }
            },
            tooltip: {},
            legend: {
                data: [],
                selected:{
                    "暮云铺":true,
                    "上珠塘":false,
                    "曹家塘":false,
                    "长塘":false,
                    "暮云市":false,
                    "高家冲":false,
                    "文家冲":false,
                    "菜场":false,
                    "横冲子":false,
                    "新港":false,
                    "白庙咀":false,
                    "黄金湾":false,
                    "禁山子":false,
                    "清水塘":false,
                    "长沙垅":false,
                    "排兴垅":false,
                    "烂毛冲":false,
                    "暮云新村":false,

                },
                x:'left',  //靠左
                orient:'vertical',
                top:40,
                textStyle:{
                    color:'#fff'
                }
            },
            radar: 
                {
                    indicator: [
                        { text: '建设用地' },
                        { text: '工矿仓储用地' },
                        { text: '商服用地' },
                        { text: '农村宅基地' },
                        { text: '公共服务用地' },
                        { text: '交通水利用地' },
                        { text: '其他农用地' },
                    ],
                    center: ['63%', '50%'],
                    radius: 100,
                    startAngle: 90,
                    splitNumber: 4,
                    shape: 'circle',
                    name: {
                        
                        textStyle: {
                            color:'#fff'
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.5)'
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.5)'
                        }
                    }
                },
            series: [
                {
                    name: '雷达图',
                    type: 'radar',
                    itemStyle: {
                        emphasis: {
                            // color: 各异,
                            lineStyle: {
                                width: 4
                            }
                        }
                    },
                    data: []
                }
            ]   
       }
    }
  },
  methods:{
      getcoldata:function(){ //
              //发送get请求

                  this.$http.get('http://110.53.162.165:5050/api/count/g_asset').then(function (res) {

                      for (let i = 0; i<res.data.data.length; i++) {

                          const adata={
                                        value:[res.data.data[i].constructionland,res.data.data[i].imsland,res.data.data[i].businessland,res.data.data[i].homestead,res.data.data[i].publicland,res.data.data[i].twland,res.data.data[i].otherland],
                                        name:res.data.data[i].grouptype
                                    };
                                    
                            this.polar.series[0].data.push(adata);
                            
                            this.polar.legend.data.push(res.data.data[i].grouptype);
                          }
                        console.log(this.polar.legend.selected)
                    })
                    .catch(function (error) {
                      console.log(error);
                    });
             
      }
  },
  computed: { //计算属性 取存在状态库中的值
     
  },
  watch:{
      
  },
  mounted:function(){//页面初始化函数
        this.getcoldata();

    }
}
</script>



