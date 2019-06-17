<template>
      <v-chart  :options="polar" style="width:23vw;height:29vh"/>    
</template>

<script>
import { mapGetters } from 'vuex';
export default {
name: "tabledata",
  data () {
    return {
      mdata:[],
      sumdata:{sum:'',run:'',down:''},
      terdata:{aname:'null',run:'null',down:'null'},
    polar: {
         title:{
         text: '运停数据端数',
         x:'center',
        show: true,
       textStyle:{
      color:'#1FC06E',
      fontSize:20,
     fontWeight: 'bold'
    }
    },
    
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
        
    },
    // legend: {
    //     orient: 'vertical',
    //     x: 'left',
    //     show: true,
    //     data:['运行数','停止数']
    // },
    series: [
        {
            name:'总运停端数',
            // formatter:'{a}: {c} ({d}%)',
            type:'pie',
             radius: ['30%', '55%'],
             center : ['25%', '50%'],
            avoidLabelOverlap: true,
            label: {
                normal: {
                    position: 'center',
                    show: false,
                    //  formatter:'{a}/{b}/{c}/{d}%',
                    // formatter:'{a}',
                    formatter:'{c}',
                    textStyle:{
                      color:'#fff',
                      fontSize:40,
                      fontWeight: 'bold'
                    }
                    
                //     legend: {
                //         orient: 'vertical',
                //         x: 'left',
                //         show: true,
                //         data:['总运行数','总停止数']
                //     },
                    
                 },

                emphasis: {
                    position: 'center',
                    // formatter:'{a}/{b}/{c}/{d}%'
                    formatter:'{b}\n{c} ({d}%)',
                    show: true,
                    textStyle: {
                        color:'#008520',
                        fontSize: '15',
                        fontWeight: 'bold'
                    }
                }
            },
            itemStyle:{
              normal:{
                //   color:['#fff','#1FC06E']
              }  
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:89,
                 name:'总运行数',
                 itemStyle:{normal:{
                  color:'#27727B'}
                // selected:true,
                // tooltip:{
                //     tigger:'item',
                //     formatter:'{a} <br/>{b}: {c} ({d}%)'
                    }
                    
                },
                 {value:65, 
                 name:'总停止数',
                 itemStyle:{normal:{
                  color:'#495278'}}
                  }
            ]
        },

        {
            name:'区运停端数',
            // formatter:'{a}: {c} ({d}%)',
            type:'pie',
              radius: ['30%', '55%'],
            center: ['75%', '50%'],
            avoidLabelOverlap: true,
            label: {
                normal: {
                    position: 'center',
                    show: false,
                    //  formatter:'{a}/{b}/{c}/{d}%',
                    // formatter:'{a}',
                    formatter:'{c}',
                    textStyle:{
                      color:'#fff',
                      fontSize:40,
                      fontWeight: 'bold'
                    }
                //     legend: {
                //         orient: 'vertical',
                //         x: 'left',
                //         show: true,
                //         data:['区运行数','区停止数']
                //     },
                 
                    
                },
                emphasis: {
                    position: 'center',
                    // formatter:'{a}/{b}/{c}/{d}%'
                    formatter:'{b}\n{c} ({d}%)',
                    show: true,
                    textStyle: {
                        color:'#008520',
                        fontSize: '15',
                        fontWeight: 'bold'
                    }
                }
            },
            itemStyle:{
              normal:{
                //   color:['#fff','#1FC06E']
              }  
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:76,
                 name:'区运行数',
                 itemStyle:{normal:{
                  color:'#27727B'}
                // selected:true,
                // tooltip:{
                //     tigger:'item',
                //     formatter:'{a} <br/>{b}: {c} ({d}%)'
                    }
                    
                },
                 {value:35,
                 name:'区停止数',
                 itemStyle:{normal:{
                  color:'#495278'}}
                  }
            ]
        }

    ]
}

    }
  },
  methods: {
    get:function(){ 
            //发送get请求 获取终端总数
            this.$http.get('http://110.53.162.165:5050/api/device/sumters').then(function(res){   
                            this.polar.series[0].data[0].value=res.data.data.run
                            this.polar.serise[0].data[0].value=res.data.data.down
                        },function(){
                    console.log('请求失败处理');
                });
            //发送get请求 获取某村终端数信息
            this.$http.get('http://110.53.162.165:5050/api/device/tersga').then(function(res){
                        for (let i = 0; i < res.data.data.length; i++) {
                          this.polar.serise[1].data[0].value=res.data.data[i].run
                           this.polar.serise[1].data[1].value=res.data.data[i].down

                            // const tersdata={aname:res.data.data[i].aname,run:res.data.data[i].run,down:res.data.data[i].down}
                            // this.mdata.push(tersdata)
                          }
                        },function(){
                    console.log('请求失败处理');
                });
        }
  },
  computed: { //计算属性 取存在状态库中的值
     ...mapGetters(["selectplace"]),
     listenselectplace(){ //返回状态库中的值
       return this.selectplace;
     },
     
  },
  watch:{
     /* listenselectplace:function(vag){//实时监听状态库中值的改变 
        for (let i = 0; i < this.mdata.length; i++) {
            if(vag==this.mdata[i].aname)
            {
              this.terdata={aname:this.mdata[i].aname,run:this.mdata[i].run,down:this.mdata[i].down}
            }
          }
      }*/
  },
   mounted:function(){//页面初始化函数
        this.get();
        
    }
  
  
}
</script>
