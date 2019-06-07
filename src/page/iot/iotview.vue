<template>
    <div >
    <!-- 左视图层 -->
    <div class="m_left" v-bind:style="{ display: activedisplay}">
      <div class="m_left1" >
          <tabledata />
        </div>
      <!--
        
        
        <div class="m_left1" >
          <barchart />
        </div>
        <div class="m_left1" >
          <radarchart />
        </div> 
      -->
      <ChartControl />
    </div>
    <!-- 右视图层 -->
    <div class="m_right" v-bind:style="{ display: activedisplay}">
      
      <div class="mlot_right">
        <piechart /> 
         <!-- 待重新开发-->
         
      </div>
      <!-- 待重新开发 公告与政策 
      <div class="m_right2">
         <Iotinfo/> 
         
      </div>
      -->
    </div>
    <div class="m_bottom" v-bind:style="{ display: activedisplay}">
      <div class="m_bottom1">
        <!-- 折线图 -->
          <linechart />
      </div>
    </div>
    <!-- 地图层 -->
    <mainmap />
  </div>
</template>

<script>
import piechart from '@/components/Iot/charts/piechart'//饼图
import tabledata from '@/components/Iot/charts/tabledata' //table数据组
import mainmap from './iotmap' //百度地图层
import barchart from '@/components/Iot/charts/barchart'//柱状图
import radarchart from '@/components/Iot/charts/radarchart'//雷达图
import linechart from '@/components/Iot/charts/linechart'//折线图
import Iotinfo from '@/components/Iot/annoucement/Iotinfo'//公告信息列表
import ChartControl from '@/components/Iot/ChartControl/ChartControl' //图表控制器
import { mapGetters } from 'vuex';
export default {
  components: {piechart,tabledata,mainmap,barchart,radarchart,linechart,Iotinfo,ChartControl
    },
  name: 'Iotmain',
  data () {
    return {
      activedisplay:true
    };
  },
  methods:{
  },
  computed: { //计算属性 取存在状态库中的值
     ...mapGetters(["isdisplay"]),
     listendisplay(){  //监听显示按钮 
       return this.isdisplay;
     }
  },
  watch:{
      listendisplay:function(vag){ //实现监听方法 ：图表显示
        if(vag==true){
          console.log(vag)
          this.activedisplay='block';
        }else if(vag==false){
          this.activedisplay='none';
        }
      }
  }

}
</script>
<style lang="scss" >
.m_left{
  width: 23vw;
  height: 92vh;  
  position: absolute;
  left: 0;
}
.m_right{
  width: 23vw;
  height: 92vh;  
  position: absolute;
  right: 0;
}
div {
    display: block;
}
.m_bottom{
  height:29vh;
  margin:0 2px;
  bottom: 5px;
  left: 23vw;
  width: 53.5vw;
  position: absolute;
  z-index:2;
  background: rgba(0,0,0,0.5);
}


</style>
