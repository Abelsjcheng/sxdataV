<template>  
    <el-container class="iot_overview">
      <el-aside width="21.2vw" class="aside_left">
        <cartesianchart/>
        <basicareachart/>
        <lineitemstylechart/>
        
      </el-aside>
      <el-container>
        <el-main class="iot_main">
          <el-row :gutter="10">
            <el-col :span="16"><div class="iot_map"><mainmap /></div></el-col>

            <el-col :span="8"><div class="iot_char_col"><ChartControl /></div></el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="12"><div class="iot_info"><warninfo/></div></el-col> <!-- 预警模块 -->
            <el-col :span="12"><div class="iot_camera"><radarchart02 /></div></el-col> <!-- 终端信息模块 -->

          </el-row>
        </el-main>
      </el-container>
      <el-aside width="21.2vw" class="aside_right">
        <linechart />
        <radarchart/>
        <piechart/>
      </el-aside>
    </el-container>

</template>

<script>
import radarchart02 from '@/components/Iot/charts/radarchart02'//终端信息

import mainmap from './iotmap' //百度地图层
import linechart from '@/components/Iot/charts/linechart'//温湿度折线图
import cartesianchart from '@/components/Iot/charts/cartesianchart' //雨量图
import lineitemstylechart from '@/components/Iot/charts/lineitemstylechart' //流量图
import basicareachart from '@/components/Iot/charts/basicareachart'//水位图
import ChartControl from '@/components/Iot/ChartControl/ChartControl' //图表控制器
import piechart from '@/components/Iot/charts/piechart' //河水酸碱度
import radarchart from '@/components/Iot/charts/radarchart' //PM2.5浓度变化图
import warninfo from '@/components/Iot/annoucement/warninfo' //预警模块
import { mapGetters } from 'vuex';
export default {
  components: {radarchart02,mainmap,linechart,ChartControl,cartesianchart,lineitemstylechart,basicareachart,piechart,radarchart,warninfo
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
.iot_overview{
  background-color: #040f3c;
  height:92vh;
}

.aside_left {
    background: url(../../static/img/line_img.png) top right repeat-y;
   
  }
.aside_right {
    background: url(../../static/img/line_img.png) top left repeat-y;
   
  }

.iot_main{
  margin-top: 5px;
  overflow: hidden;
}
.el-row {
    margin-bottom: 4px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  .iot_map{
    border-radius: 4px;
    height: 60vh;
    box-sizing: border-box;
    border: 2px solid #016ae0;
  }
  .iot_char_col{
    border-radius: 4px;
    height: 60vh;
    box-sizing: border-box;
    border: 2px solid #016ae0;
  }
  .iot_info{
    height: 30vh;
    border-radius: 4px;
    box-sizing: border-box;
    border: 2px solid #016ae0;
  }
  .iot_camera{
    height: 30vh;
    border-radius: 4px;
    box-sizing: border-box;
    border: 2px solid #016ae0;
  }

  

</style>
