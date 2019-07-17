<template>
      <v-chart  :options="polar" style="width:23vw;height:29vh"/>   
</template>

<script>
export default {
name: "radarchart",
  data () {
    return {
      polar: {  
       title : {
        text: '操作类型',
        // x:'left',
        textStyle:{
          color:'#fff',
          fontSize:'18',
          fontFamily:'Arial',
        }
    },
    // position:'absolute',
    
    textStyle:{
        fontSize:23,
        
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
              fontSize:'20'
        } 
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
            radius : [30, 130],
            center : ['50%', '50%'],
            roseType : 'area',
            data:[
                {value:10, name:'文件传输'},
                {value:5, name:'电台广播'},
                {value:15, name:'停止播放'},
                {value:25, name:'关闭功效'},
                {value:20, name:'开启功效'}
            ],
             textStyle:{
                fontSize:'24'
              }, 
            //   label:{            //饼图图形上的文本标签
            //     normal:{
            //         show:true,
            //         position:'inner', //标签的位置
            //         textStyle : {
            //             fontWeight : 300 ,
            //             fontSize : 10   //文字的字体大小
            //         },
            //         formatter:'{d}%'   //显示%
 
                    
            //     }
            // },
        }
    ]
      }
    }
  },
  
  
}
</script>

<style lang="scss" scoped>
@media screen and (max-height:28vh){
    .left-score-image {
        width: 190px;
        height: 135px;
        margin-left: 36px;
        margin-top: 20px;
    }
}
</style>

