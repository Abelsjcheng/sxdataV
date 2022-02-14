<template>
    <div class="iot_char_right" v-show="chartvisible">
      <v-chart  :options="polar" style="width:20vw;height:29vh"/>   
    </div> 
</template>

<script>
import { mapGetters } from 'vuex';
export default {
name: "pmchart",
  data () {
    return {
        polar:{
            title: {
                text: 'PM2.5浓度变化图',
                x:'center',
                textStyle:{
                        color: '#ffffff'
                        }
            },
            tooltip : {  //提示框组件
                trigger: 'axis',  //触发类型，坐标轴触发
                axisPointer: {
                    type: 'cross',
                    animation: false,
                    label: {
                        backgroundColor: '#505765'
                    }
                }
            },
        
        toolbox: {  //工具框组件
                feature: {
                    dataView: {readOnly: false},
                    magicType: {type: ['line', 'bar']},
                }
            },
            dataZoom:[{
                    type:'inside',
                    
                    filterMode: 'empty',
                    start: 0,//数据窗口范围的起始百分比
                    end: 100 //数据窗口范围的结束的百分比

                }],
            
        xAxis: {
                name:'',
                type: 'category',  //
                axisLabel: {
                    color: function (value) {
                        return value ==  '#00ffb2';
                    }
                },
                axisLine:{ //坐标轴轴线相关设置。
                            lineStyle:{
                            color:'#ffffff', //坐标轴线线的颜色。
                            width:1,//这里是为了突出显示加上的
                            }
                        },
                data: []
            },
        yAxis: {
                name:'(μg/m3)',
                max:100,
                textStyle:{
                show:true
                },
                type: 'value',
                axisLine:{ //坐标轴轴线相关设置。
                            lineStyle:{
                            color:'#ffffff', //坐标轴线线的颜色。
                            width:1,//这里是为了突出显示加上的
                            }
                        },
            },
        series: [
                {
                    name:'PM2.5浓度',
                    type:'line',
                    stack: '总量',
                    data:[]
                },
            
            ]
        },
       chartvisible:false

    }
  },
  methods:{
      getcoldata:function(selectaid,btime,etime,lim){ //
              //发送get请求
                  this.polar.series[0].data=[];
                  this.polar.xAxis.data=[];
                  this.$http.get('api/rivervis/envbytl',
                  {params :{begintime:btime,endtime:etime,limit:lim}}).then(function (res) {
                       for (let i = 0; i<res.data.data.length; i++) {
                          if(res.data.data[i].aid==selectaid){
                            this.polar.series[0].data.push(res.data.data[i].pm);
                            this.polar.xAxis.data.push(res.data.data[i].time);
                          }
                      }
                    })
                    .catch(function (error) {
                      console.log(error);
                    });  
      },
  },
  computed: { //计算属性 取存在状态库中的值
     ...mapGetters(["selectaid"]),
     ...mapGetters(["chartSet"]),
     listenchartSet(){  //监听 chartSet值的变化
       return this.chartSet;
     },
      listenselectaid() {
      return this.selectaid;
    },
  },
  watch:{
       listenselectaid (vag) {
    },
      listenchartSet:{
          handler(vag){  //handler执行具体方法
            if(vag.name=='pm') //
            {
                // this.getcoldata(vag.timeframe[0],vag.timeframe[1],vag.limit);
                this.chartvisible=vag.chartvisible;
            }
        },
        deep: true//是否深度监听设置deep: true  则可以监听到vag.timeframe的变化，此时会给vag的所有属性都加上这个监听器，
        //immediate: true 代表如果在 wacth 里声明了 变量 之后，就会立即先去执行里面的handler方法
      }
  },
  mounted:function(){//页面初始化函数
        this.getcoldata(this.selectaid,"2019-03-17 13:02:31","2019-03-22 15:18:55",50);

    }
  
 }

</script>
