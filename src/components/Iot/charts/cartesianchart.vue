<template>
      <v-chart  :options="polar" style="width: 100%;height:40%"/>    
</template>

<script>
import { mapGetters } from 'vuex';
export default {
name: "cartesianchart",
 data () {
    return {
        polar: {
            title: {
                text: '雨量（单位：mm）',
                textStyle:{
                    color: '#ffffff'
                }
            },
            tooltip: {},
            xAxis: {
                type : 'category',
                boundaryGap : false,
                data : [],
                axisLine:{ //坐标轴轴线相关设置。
                    lineStyle:{
                    color:'#ffffff', //坐标轴线线的颜色。
                    width:1,//这里是为了突出显示加上的
                    }
                }
                
               
            },
            yAxis: {
                type : 'value',
                axisLine:{ //坐标轴轴线相关设置。
                    lineStyle:{
                    color:'#ffffff', //坐标轴线线的颜色。
                    width:1,//这里是为了突出显示加上的
                    }
                }
                
            },
            series: [
                {
                    type: 'graph',
                    layout: 'none',
                    coordinateSystem: 'cartesian2d',
                    symbolSize: 30,
                    label: {
                        normal: {
                            show: true
                        }
                    },
                    edgeSymbol: ['circle', 'arrow'],
                    edgeSymbolSize: [4, 10],
                    data: [],
                    links: [],
                    lineStyle: {
                        normal: {
                            color: 'white'
                        }
                    }
                }
            ]
        }

    }
 },
 methods:{
     build(){
            this.polar.xAxis.data= ['周一','周二','周三','周四','周五','周六','周天'];
            
            this.polar.series[0].data = this.polar.xAxis.data.map(function (item, i) {
                return Math.round(Math.random() * 50 * (i + 1));
            });
            this.polar.series[0].links = this.polar.series[0].data.map(function (item, i) {
                return {
                    source: i,
                    target: i + 1
                };
            });
     },
    /*getcoldata:function(btime,etime,lim){ //
              //发送get请求
                  this.polar.series[0].data=[];
                  this.polar.xAxis.data=[];
                  this.$http.get('http://www.teavamc.com/api/rivervis/envbytl',{params :{begintime:btime,endtime:etime,limit:lim}}).then(function (res) {
                  
                    
                      for (let i = 0; i<res.data.data.length; i++) {
                            this.polar.series[0].data.push(res.data.data[i].rain);
                            this.polar.xAxis.data.push(res.data.data[i].time);
                          }
                       
                    })
                    .catch(function (error) {
                      console.log(error);
                    });
               
             
      },*/
 },
 mounted:function(){
     this.build();
     this.getcoldata("2019-03-18 13:02:31","2019-03-24 15:18:55",20);
 }
}
</script>