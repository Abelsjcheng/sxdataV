<template>
      <!-- 加载柱状图 并设置图表大小 -->
      <v-chart  :options="polar"  style="width:100%;height:100%;" />    
</template>
<script>
export default {
    name: "viigroupchart",
  data () {
    return {
      polar: {
                title :{                //标题
                    text: '地域占地统计',
                    x:'left',         //居中
                    textStyle:{
                    color: '#ffffff'    //标题颜色
                    }
                },
                grid:{
                    
                    containLabel:true
                },
                dataZoom:[{
                    type:'inside',
                    radiusAxisIndex:0,
                    filterMode: 'empty',
                    start: 0,
                    end: 100

                }],
                tooltip:{
                    trigger:'axis'
                },
                angleAxis: {
                    type: 'category',
                    data: [],
                    z: 10,
                    axisTick:{
                        lineStyle:{
                            color:'#fff'
                        }
                    },
                    axisLabel:{
                        color:'#fff'
                    },
                    axisLine:{
                        lineStyle:{
                            color:'#fff'
                        }
                    }
                    
                },
                radiusAxis: {
                    axisLine:{
                        lineStyle:{
                            color:'#fff'
                        }
                    }
                },
                polar: {
                    center:['60%','50%']
                },
                series: [{
                    type: 'bar',
                    data: [],
                    coordinateSystem: 'polar',
                    name: '总面积',
                    stack: 'a'
                }, {
                    type: 'bar',
                    data: [],
                    coordinateSystem: 'polar',
                    name: '农用地小计',
                    stack: 'a'
                }, {
                    type: 'bar',
                    data: [],
                    coordinateSystem: 'polar',
                    name: '耕地',
                    stack: 'a'
                }, {
                    type: 'bar',
                    data: [],
                    coordinateSystem: 'polar',
                    name: '园地',
                    stack: 'a'
                }, {
                    type: 'bar',
                    data: [],
                    coordinateSystem: 'polar',
                    name: '林地',
                    stack: 'a'
                }, {
                    type: 'bar',
                    data: [],
                    coordinateSystem: 'polar',
                    name: '农田水利设施用地',
                    stack: 'a'
                }, {
                    type: 'bar',
                    data: [],
                    coordinateSystem: 'polar',
                    name: '养殖水面',
                    stack: 'a'
                }, {
                    type: 'bar',
                    data: [],
                    coordinateSystem: 'polar',
                    name: '其他农用地',
                    stack: 'a'
                }],
                legend: {
                    show: true,
                    data: [],
                    x:'left',  //靠左
                    orient:'vertical',
                    top:40,
                    textStyle:{
                        color:'#fff'
                    }
                }
       }
    }
  },
  methods:{
      getcoldata:function(){ //
              //发送get请求
                  this.polar.legend.data=["总面积","农用地小计","耕地","园地","林地","农田水利设施用地","养殖水面","其他农用地"];
                  this.$http.get('api/count/g_viiGroup').then(function (res) {
                      
                      for (let i = 0; i<res.data.data.length; i++) {
                          this.polar.angleAxis.data.push(res.data.data[i].grouptype);
                          this.polar.series[0].data.push(res.data.data[i].area);
                          this.polar.series[1].data.push(res.data.data[i].farmland);
                          this.polar.series[2].data.push(res.data.data[i].plowland);
                          this.polar.series[3].data.push(res.data.data[i].orchard);
                          this.polar.series[4].data.push(res.data.data[i].forest);
                          this.polar.series[5].data.push(res.data.data[i].fland);
                          this.polar.series[6].data.push(res.data.data[i].aqarea);
                          this.polar.series[7].data.push(res.data.data[i].otherland);
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



