<template>
  <div >
    <!-- 左视图层 -->
    <div class="m_left">
      <div class="m_left1">
        <!-- table数据组 -->
        <tabledata /> 
      </div>
      <div class="m_left1">
        <!-- 柱状图 -->
        <barchart />
      </div>
      <div class="m_left1">
        <!-- 雷达图 -->
        <radarchart />
      </div>
    </div>
    <!-- 右视图层 -->
    <div class="m_right">
      <div class="m_right1">
        <!-- 饼图 -->
        <piechart />   
      </div>
      <div class="m_right2">
        <!-- 公告与政策 -->
        <painfo/>
      </div>
    </div>
    <div class="m_bottom">
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
import piechart from './charts/piechart'//饼图
import tabledata from './charts/tabledata' //table数据组
import mainmap from './mainmap' //百度地图层
import barchart from './charts/barchart'//柱状图
import radarchart from './charts/radarchart'//雷达图
import linechart from './charts/linechart'//折线图
import painfo from './annoucement/painfo'//公告信息列表
export default { //注册组件
components: {piechart,tabledata,mainmap,barchart,radarchart,linechart,painfo
    },
name: "mianview",
  data () {
    return {
    };
  },
  
  
}
</script>

<style>


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
  background: rgba(0,0,0,0.5);
}
</style>
