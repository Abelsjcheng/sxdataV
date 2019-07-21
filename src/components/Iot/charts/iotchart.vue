<template>
    <div class="iot_zdchar" v-show="chartvisible">
      <v-chart  :options="polar" style="width:100%;height:100%"/>   
    </div> 
</template>

<script>
import { mapGetters } from 'vuex';
export default {
name: "iotchart",
  data () {
    return {
         polar:{
           title: {
            text: '物联网状态数据',
            textStyle:{
                color:'#fff',
                fontSize:'16'
            }
            },
            tooltip: {
                trigger: 'item',
            },
            // legend: {
            //     data: ['物联网状态数据'],

            // },
            radar: {
                // shape: 'circle',
                name: {
                    textStyle: {
                        color: '#fff',
                        backgroundColor: '#256',
                        borderRadius: 3,
                        padding: [3, 5]
                }
                },
                indicator: [
                { name: '电池1电压', max: 50},
                { name: '电池组电压', max: 50},
                { name: '24v输出电压', max: 50},
                { name: '28v输出电压', max: 50},
                { name: '18v1输出电压', max: 50},
                { name: '18v2输出电压', max: 50},
                { name: '外部电压', max: 50},
                { name: '太阳能电压;', max: 50}
                ]
            },
            series: [{
                name: '物联网状态数据',
                type: 'radar',
                // areaStyle: {normal: {}},
                data : [
                    {
                        value : [],
                        name : '物联网状态数据'
                    }
                ]
            }]
         },
       chartvisible:true

    }
  },
  methods:{
      getcoldata:function(btime,etime,lim,tid){ //
              //发送get请求
                  
                  this.$http.get('http://110.53.162.165:5050/api/iot/iotbyitl',
                  {params :{begintime:btime,endtime:etime,limit:lim,IMEI:tid}}).then(function (res) {
                    let length=res.data.data.length-1;
                    this.polar.series[0].data[0].value=[
                      res.data.data[length].pow1,
                      res.data.data[length].grouppow,
                      res.data.data[length].v24,
                      res.data.data[length].v28,
                      res.data.data[length].outv1,
                      res.data.data[length].outv2,
                      res.data.data[length].extendpow,
                      res.data.data[length].solarpow
                      ];
                    
                    })
                    .catch(function (error) {
                      console.log(error);
                    });
             
      }
  },
  computed: { //计算属性 取存在状态库中的值
     ...mapGetters(["chartSet"]),
     listenchartSet(){  //监听 chartSet值的变化
       return this.chartSet;
     }
  },
  watch:{
      listenchartSet:{
          handler(vag){  //handler执行具体方法
            if(vag.name=='iot') //
            {
                this.getcoldata(vag.timeframe[0],vag.timeframe[1],vag.limit,987654321123450);
                this.chartvisible=vag.chartvisible;
            }
        },
        deep: true//是否深度监听设置deep: true  则可以监听到vag.timeframe的变化，此时会给vag的所有属性都加上这个监听器，
        //immediate: true 代表如果在 wacth 里声明了 变量 之后，就会立即先去执行里面的handler方法
      }
  },
  mounted:function(){//页面初始化函数
        this.getcoldata("2019-03-17 13:02:31","2019-08-22 15:18:55",20,987654321123450);

    }
  
 }
 </script>

 <style lang="scss" scoped>
 .iot_zdchar{
   position: relative;
    height:28vh;
    width: 96%;
    margin:4.5px 0;
    padding:5px 10px;	
    color:#fff;
    text-align:center;
    z-index:2;
    background: url(../../../static/img/bgbg1.png) no-repeat;
    background-size: 100% 100%;
    box-shadow: inset 0px 0px 20px #038d98;
 }
 </style>
 