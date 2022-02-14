<template>
      <!-- 加载柱状图 并设置图表大小 -->
      <v-chart  :options="polar"  style="width:100%;height:100%;" />    
</template>

<script>
export default {
name: "villagerchart",
  data () {
    return {
      polar: {
                title :{                //标题
                    text: '村镇村民人口统计',
                    x:'left',         //居中
                    textStyle:{
                    color: '#ffffff'    //标题颜色
                    }
                },
                legend: {
                    left:'right',
                    textStyle:{
                        color:'white'
                    }
                },
                grid:{ //网格布局
                    containLabel:true, //防止标签溢出
                    height:'170px',
                    width:'430px',
                    left:'6%'
                },
                tooltip: {},
                dataZoom:[{
                    type:'inside',
                    start: 0,
                    end: 100

                }],
                dataset: {
                    dimensions: ['marea', '村民总数', '男性', '女性'],
                    source: [
                        
                    ]
                },
                xAxis: {
                    type: 'category',
                    axisLine:{
                        lineStyle:{
                            color:'white',
                        }
                    }
                },
                yAxis: {
                    name : '(/人)',
                    axisLine:{
                        lineStyle:{
                            color:'white',
                        }
                    }
                },
                // Declare several bar series, each will be mapped
                // to a column of dataset.source by default.
                series: [
                    {type: 'bar'},
                    {type: 'bar'},
                    {type: 'bar'}
                ]
       }
    }
  },
  methods:{
      getcoldata:function(){ //
              //发送get请求

                  this.$http.get('api/count/mSort').then(function (res) {

                      for (let i = 0; i<res.data.data.length; i++) {
                          const pdata={
                            marea: res.data.data[i].marea, //地区名
                            '村民总数': res.data.data[i].msum,		//党员总数
                            '男性': res.data.data[i].man,		//党员男性数
                            '女性': res.data.data[i].woman		//党员女性数
                          };
                            this.polar.dataset.source.push(pdata);
                          }
                          
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



