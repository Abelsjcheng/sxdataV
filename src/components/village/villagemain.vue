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
import piechart from '../main/charts/piechart'//饼图
import tabledata from '../main/charts/tabledata' //table数据组
import mainmap from '../main/mainmap' //百度地图层
import barchart from '../main/charts/barchart'//柱状图
import radarchart from '../main/charts/radarchart'//雷达图
import linechart from '../main/charts/linechart'//折线图
import painfo from '../main/annoucement/painfo'//公告信息列表
export default {
  components: {piechart,tabledata,mainmap,barchart,radarchart,linechart,painfo
    },
  name: 'villagemain'

}
</script>
