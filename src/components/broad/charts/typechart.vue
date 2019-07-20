<template>
      <v-chart  :options="polar" style="width:100%;height:100%"/>    
</template>

<script>
export default {
name: "typechart",
  data () {
    return {
        polar: {
          title : {
                text: '广播状态',
                x:'center',
                textStyle:{
                    color: '#91c7ae'
                    }
          },
          tooltip : {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          color:['#61a0a8','#c92828'],
          legend: {
              orient: 'vertical',
              left: 'left',
              data: ['正常播出单','紧急播出单'],
              textStyle:{
                  color: 'white'
                  }
          },
          series : [
              {
                  name: '广播状态',
                  type: 'pie',
                  radius : '55%',
                  center: ['50%', '60%'],
                  data:[
                      {value:0, name:'正常播出单'},
                      {value:0, name:'紧急播出单'}
                  ],
                  itemStyle: {
                      emphasis: {
                          shadowBlur: 10,
                          shadowOffsetX: 0,
                          shadowColor: 'rgba(0, 0, 0, 0.5)'
                      }
                  }
              }
            ]
        }
    }
  },
   methods: {
    get:function(){ 
            this.$http.get('http://110.53.162.165:5050/api/btime/bds').then(function(res){
                        
                          this.polar.series[0].data.push({value:res.data.data[0].bcount,name:res.data.data[0].scategory});
                          this.polar.series[0].data.push({value:res.data.data[1].bcount,name:res.data.data[1].scategory});
                           
                        },function(){
                    console.log('请求失败处理');
                });
        }
  },
  
   mounted:function(){//页面初始化函数
        this.get();
        
    }
  
  
}
</script>

