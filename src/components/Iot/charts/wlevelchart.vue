<template>
    <div class="iot_char" v-show="chartvisible">
      <v-chart  :options="polar" style="width:20vw;height:29vh"/>    
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
name: "wlevelchart",
 data () {
    return {
        polar:
        {
            title: {
                text: '水位统计图',
                x: 'center',
                textStyle:{
                    color: '#ffffff'
                }
            },
           tooltip: {
                trigger: 'axis',
                axisPointer: {
                    animation: false
                }
            },
            dataZoom:[{
                    type:'inside',
                    
                    filterMode: 'empty',
                    start: 0,
                    end: 100

                }],
           xAxis: {
                type: 'category',
                boundaryGap: false,
                data: [],
                axisLine:{ //坐标轴轴线相关设置。
                    lineStyle:{
                    color:'#ffffff', //坐标轴线线的颜色。
                    width:1,//这里是为了突出显示加上的
                    }
                }
           },
          yAxis: {
              type: 'value',
              name : '(/m)',
              axisLine:{ //坐标轴轴线相关设置。
                    lineStyle:{
                    color:'#ffffff', //坐标轴线线的颜色。
                    width:1,//这里是为了突出显示加上的
                    }
                }
           },
          series: [{
              data: [],
              type: 'line',
              areaStyle: {}
          }]
        },
       chartvisible:false

    }
 },
 methods:{
      getcoldata:function(selectaid,btime,etime,lim){ //
              //发送get请求
                  this.polar.series[0].data=[];
                  this.polar.xAxis.data=[];
                  this.$http.get('http://110.53.162.165:5050/api/rivervis/envbytl',
                  {params :{begintime:btime,endtime:etime,limit:lim}}).then(function (res) {
                       for (let i = 0; i<res.data.data.length; i++) {
                          if(res.data.data[i].aid==selectaid){
                            this.polar.series[0].data.push(res.data.data[i].wlevel);
                            this.polar.xAxis.data.push(res.data.data[i].time);
                          }
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
 computed: { //计算属性 取存在状态库中的值
     ...mapGetters(["chartSet"]),
     listenchartSet(){  //监听 chartSet值的变化
       return this.chartSet;
     },
     ...mapGetters(["selectaid"]),
     listenselectaid() {
      return this.selectaid;
    },
  },
  watch:{
      listenselectaid (vag) {
        // this.getcoldata(vag,"2019-03-16 13:02:31","2019-03-24 15:18:55",20);
    },
      listenchartSet:{
          handler(vag){  //handler执行具体方法
            if(vag.name=='wlevel') //
            {
             
                //this.getcoldata(vag.timeframe[0],vag.timeframe[1],vag.limit);
                this.chartvisible=vag.chartvisible;
            }
        },
        deep: true//是否深度监听设置deep: true  则可以监听到vag.timeframe的变化，此时会给vag的所有属性都加上这个监听器，
        //immediate: true 代表如果在 wacth 里声明了 变量 之后，就会立即先去执行里面的handler方法
      }
  },
  mounted:function(){//页面初始化函数
        // this.getcoldata("2019-03-17 13:02:31","2019-03-22 15:18:55",20);
        //this.LopTime();
         this.getcoldata(this.selectaid,"2019-03-17 13:02:31","2019-03-22 15:18:55",50);
  }
}
</script>