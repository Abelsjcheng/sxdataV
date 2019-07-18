<template>
      <v-chart  :options="polar" style="width:100%;height:100%"/>   
</template>

<script>
export default {
name: "radarchart",
  data () {
    return {
      polar: {  
       title : {
            text: '操作类型',
            x:'left',
            textStyle:{
            color:'#fff',
            fontSize:'15',
            fontFamily:'Arial',
        }
    },
    
    // position:'absolute',
    
    textStyle:{
        fontSize:15,
        
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    // normal: {
    //     show: true,
    //     position: 'inside',     //图形里显示（比如在饼图块上显示百分比）
    //     formatter: '{d}%'       //显示的内容
    // },
    legend: {
        x : 'center',
        y : 'bottom',
        data:['文件传输','电台广播','停止播放','关闭功效','开启功效'],
        textStyle:{
              fontSize:'12',
              color:'#456'
        } ,
        
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {
                show: true,
                type: ['pie', 'funnel']
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    series : [
        {
            name:'操作类型',
            type:'pie',
            radius : ['20%', '60%'],
            center : ['50%', '40%'],
            roseType : 'area',
            data:[
                {value:10, name:'文件传输'},
                {value:5, name:'电台广播'},
                {value:15, name:'停止播放'},
                {value:25, name:'关闭功效'},
                {value:20, name:'开启功效'}
            ],
             textStyle:{
                fontSize:'20'
              }
        }
    ]
      }
    }
  },
  
  
}
</script>

// <style lang="scss" scoped>
// @media screen and (max-height:28vh){
//     .left-score-image {
//         width: 190px;
//         height: 135px;
//         margin-left: 36px;
//         margin-top: 20px;
//     }
// }
// </style>

