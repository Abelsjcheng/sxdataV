<template>
      <!-- 加载柱状图 并设置图表大小 -->
      <v-chart  :options="polar"  style="width:23vw;height:29vh" />    
</template>

<script>
export default {
name: "barchart",
  data () {
    return {
      polar: {
                title :{                //标题
                    text: '雨量水位数据关系图',
                    x:'center',         //居中
                    textStyle:{
                    color: '#00ffb2'    //标题颜色
                    }
                },
                tooltip: {              //数据提示框
                    trigger: 'axis',    //触发类型：坐标轴触发
                    axisPointer: {
                        type: 'cross',  //提示器类型：十字准星指示器
                        crossStyle: {
                            color: '#999' //颜色
                        }
                    }
                },
                toolbox: {              //工具栏  
                    right: 20, //toolbox的定位位置
                    iconStyle:{
                        color:{
                            type: 'radial',
                            x: 0.5,
                            y: 0.5,
                            r: 0.5,
                            colorStops: [{
                                offset: 0, color: '#ffffff' // 0% 处的颜色
                            }, {
                                offset: 1, color: '#ffffff' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        },
                        borderColor:'#000'
                    },
                    feature: {          //工具配置
                        dataView: {show: true, readOnly: false}, //数据视图工具
                        magicType: {show: true, type: [ 'bar']}, //切换图表类型
                        restore: {show: true}, //配置项还原。
                        saveAsImage: {show: true} //保存为图片。
                    }
                },
                dataZoom: {
                    type: 'inside',
                    show: false,
                    start: 0,
                    end: 100
                },
                grid:{ //网格布局
                    
                    top:'75px',  //距顶75px
                    left: '5%' //距左5%
                },
                legend: { //图例组件
                    itemWidth: 20, //组件宽
                    itemHeight: 10, //组件高
                    itemGap:2,  //每项间隔
                    data:['雨量','水位'], //数据数组
                    x:'left',  //靠左
                    top:'25px', 
                    textStyle: {  //组件每项颜色
                        color: ['#1FC06E','#396CC0']
                    }
                },
                xAxis: {
                        type: 'category', //坐标轴类型：通过 data 设置类目数据。
                        data: [],
                        /*axisPointer: {
                            type: 'shadow' //指示器类型：阴影
                        },
                        axisLabel:{
                            interval:0,//横轴信息全部显示
                        },*/
                        axisLine:{
                            lineStyle:{
                            color:'#0087ED', //坐标轴线线的颜色。
                            width:1,//这里是为了突出显示加上的
                            }
                        }
                    },
                yAxis: [
                    {
                        type: 'value', //坐标轴类型：连续数据。
                        name: '雨量',
                        min: 0, //最小
                        max: 50,  //最大
                        //interval: 50, //设置坐标轴分割间隔。
                        axisLabel: {
                            formatter: '{value}' //刻度标签的内容
                        },
						nameTextStyle: {
							color: ['#1FC06E'] //坐标轴名称颜色
						},
						axisLine:{
		                    lineStyle:{
		                    color:'#1FC06E',//坐标轴线线的颜色。
		                    width:1,//这里是为了突出显示加上的
		                    }
						}
                    },
                    {
                        type: 'value',
                        name: '水位',
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
                series: [ //设置图表类型
                {
                    name:'雨量',
                    type:'bar',
                    data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                    color:['#1FC06E']
                },
                {
                    name:'水位',
                    type:'bar',
                    data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                    color:['#396CC0']
                }
            ]
       }
    }
  },
  methods:{
      getcoldata:function(){ //
              //发送get请求
                  var datalength;
                  this.polar.series[0].data=[];
                  this.polar.series[1].data=[];
                  this.polar.xAxis.data=[];
                  this.$http.get('http://localhost:8081/RiverVis/api/envdata').then(function (res) {
                   /* datalength=res.data.data.length;
                    console.log(res.data.data.length)
                    if(res.data.data.length>20)
                        datalength=20;
                    else{
                        datalength=res.data.data.length;
                    }*/
                      for (let i = res.data.length-1; i >=res.data.length-20; i--) {
                            this.polar.series[0].data.push(res.data[i].rain);
                            this.polar.series[1].data.push(res.data[i].wlevel);

                            this.polar.xAxis.data.push(res.data[i].time)
                          }
                          
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
