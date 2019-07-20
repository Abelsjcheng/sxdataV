<template>
    <div class="iot_char" v-show="chartvisible">
      <v-chart  :options="polar" style="width:100%;height:100%"/>   
    </div> 
</template>

<script>
import { mapGetters } from 'vuex';
export default {
name: "radarchart02",
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
                { name: 'charge', max: 11},
                { name: 'work', max: 2},
                { name: 'pow1', max: 30},
                { name: 'grouppower', max: 40},
                { name: 'v24', max: 40},
                { name: 'v28', max: 40}
                ]
            },
            series: [{
                name: '物联网状态数据',
                type: 'radar',
                // areaStyle: {normal: {}},
                data : [
                    {
                        value : [1, 2, 23.31, 32.99, 32.99,32.99],
                        name : '物联网状态数据'
                    }
                ]
            }]
         },
       chartvisible:true

    }
  },
  methods:{
      getcoldata:function(){ //
              //发送get请求
                  
                  this.$http.get('http://www.teavamc.com/api/rivervis/envbytl').then(function (res) {
                     
                    this.polar.series[0].data[0].value=res.data[0].pm
                    
                    
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
            if(vag.name=='pm') //温度表
            {
                this.getcoldata(vag.timeframe[0],vag.timeframe[1],vag.limit);
                this.chartvisible=vag.chartvisible;
            }
        },
        deep: true//是否深度监听设置deep: true  则可以监听到vag.timeframe的变化，此时会给vag的所有属性都加上这个监听器，
        //immediate: true 代表如果在 wacth 里声明了 变量 之后，就会立即先去执行里面的handler方法
      }
  },
  mounted:function(){//页面初始化函数
        this.getcoldata();

    }
  
 }
 </script>