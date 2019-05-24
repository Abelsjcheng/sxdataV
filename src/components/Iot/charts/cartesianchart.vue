<template>
      <v-chart  :options="polar" style="width:54vw;height:29vh"/>    
</template>

<script>
import { mapGetters } from 'vuex';
export default {
name: "cartesianchart",
 data () {
    return {
        polar: {
            title: {
                text: '雨量（单位：mm）'
            },
            tooltip: {},
            xAxis: {
                type : 'category',
                boundaryGap : false,
                data : ['周一','周二','周三','周四','周五','周六','周天']
            },
            yAxis: {
                type : 'value'
            },
            series: [
                {
                    type: 'graph',
                    layout: 'none',
                    coordinateSystem: 'cartesian2d',
                    symbolSize: 40,
                    label: {
                        normal: {
                            show: true
                        }
                    },
                    edgeSymbol: ['circle', 'arrow'],
                    edgeSymbolSize: [4, 10],
                    data: [10,10,20],
                    links: [],
                    lineStyle: {
                        normal: {
                            color: '#2f4554'
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
     getcoldata:function(btime,etime,lim){ //
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
               
             
      };
 },
 mounted:function(){
     this.build();
     this.getcoldata("2019-03-17 13:02:31","2019-03-22 15:18:55",20);
 }
 
 
}

/*

methods:{
      getcoldata:function(btime,etime,lim){ //
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
               
             
      };
     
  };


mounted:function(){//页面初始化函数
        this.getcoldata("2019-03-17 13:02:31","2019-03-22 15:18:55",20);
        //this.LopTime();
    } */
</script>