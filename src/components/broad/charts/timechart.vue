<template>
      <v-chart  :options="polar" style="width:23vw;height:29vh"/>    
</template>

<script>
export default {
name: "typechart",
  data () {
    return {
      polar: {
              title : {
                  text: '各时常广播数',
                  x:'center',
                  textStyle:{
                      color: 'white'
                      }
                  },
              angleAxis: {
              },
              radiusAxis: {
                  type: 'category',
                  data: ['0~2', '2~4', '4~6', '6~8'],
              },
              polar: {
              },
              series: [{
                  type: 'bar',
                  data: [10, 20, 30, 40],
                  coordinateSystem: 'polar'
              }]
      }
    }
  },
  
  
}
</script>