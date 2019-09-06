<template>
     <div class="iot_char" v-show="chartvisible">
        <v-chart  :options="polar" style="width: 100%;height:29vh"/>  
     </div>  
</template>

<script>
import { mapGetters } from 'vuex';
export default {
name: "rainchart",
 data () {
    return {
        polar: {
            title: {
                text: '雨量统计图',
                x: 'center',
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
                name : '(/mm)',
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
        },
       chartvisible:true

    }
 },
 methods:{
    //  build(){
    //         this.polar.xAxis.data= ['周一','周二','周三','周四','周五','周六','周天'];
            
    //         this.polar.series[0].data = this.polar.xAxis.data.map(function (item, i) {
    //             return Math.round(Math.random() * 50 * (i + 1));
    //         });
    //         this.polar.series[0].links = this.polar.series[0].data.map(function (item, i) {
    //             return {
    //                 source: i,
    //                 target: i + 1
    //             };
    //         });
    //  },
    getcoldata:function(selectip){ //
              //发送get请求
                  this.polar.series[0].data=[];
                  this.polar.xAxis.data= ['周一','周二','周三','周四','周五','周六','周天'];
                  
                  this.$http.get('http://localhost:8080/tccp/user/getAllUser').then(function (res) {
                    //   console.log(selectip);
                      for (let i = 0; i<res.data.length; i++) {
                          if(res.data[i].ip==selectip){
                            this.polar.series[0].data.push(res.data[i].rain);
                            // this.polar.xAxis.data.push(res.data[i].time);
                            this.polar.series[0].links = this.polar.series[0].data.map(function (item, i) {
                                return {
                                    source: i,
                                    target: i + 1
                                };
                            });
                          }
                      }
                    })
                    .catch(function (error) {
                      console.log(error);
                    });
               
             
      },
 },
 computed: { //计算属性 取存在状态库中的值
     ...mapGetters(["chartSet"]),
     listenchartSet(){  //监听 chartSet值的变化
       return this.chartSet;
     },
    ...mapGetters(["selectip"]),
    listenselectip(){  
      return this.selectip;
    },
  },
  watch:{
    listenselectip (vag) {
    //   console.log(vag);
        this.getcoldata(vag);
    },
      listenchartSet:{
          handler(vag){  //handler执行具体方法
            if(vag.name=='rain') //
            {
                //this.getcoldata(vag.timeframe[0],vag.timeframe[1],vag.limit);
                this.chartvisible=vag.chartvisible;
            }
        },
        deep: true//是否深度监听设置deep: true  则可以监听到vag.timeframe的变化，此时会给vag的所有属性都加上这个监听器，
        //immediate: true 代表如果在 wacth 里声明了 变量 之后，就会立即先去执行里面的handler方法
      }
  },
 mounted:function(){
     this.getcoldata(this.selectip);
     //this.getcoldata("2019-03-18 13:02:31","2019-03-24 15:18:55",20);
 }
}
</script>

<style lang="scss">

</style>
