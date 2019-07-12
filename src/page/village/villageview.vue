<template>
  <div class="partyview_main">
    <!-- 左视图层 
    <div class="m_left" v-bind:style="{ display: activedisplay}">
      <Kanban style="height: 92vh;" :stages="stages" :blocks="block1" @update-block="updateBlock">
        <div class="m_left1" :slot="1" :key="1">
          <tabledata />
        </div>
        <div class="m_left1" :slot="2" :key="2">
          <barchart />
        </div>
        <div class="m_left1"   :slot="3" :key="3">
          <radarchart />
        </div>
      </Kanban>
    </div>-->
    <!-- 右视图层 
    <div class="m_right" v-bind:style="{ display: activedisplay}">
      <Kanban style="height: 92vh;" :stages="stages" :blocks="block2" @update-block="updateBlock">
      <div class="m_right1" :slot="1" :key="1">-->
        <!-- 饼图 
        <piechart />   
      </div>
      <div class="m_right2" :slot="2" :key="2">-->
        <!-- 公告与政策 
        <painfo/>
      </div>
      </Kanban>
    </div>
    <div class="m_bottom" v-bind:style="{ display: activedisplay}">
      <div class="m_bottom1">-->
        <!-- 折线图 
          <linechart />
      </div>
    </div>-->
    <!-- 地图层 
    <mainmap />-->
    <el-container>
      <el-aside class="vii_left" width="350px">
        <partywork/>
      </el-aside>
      <el-container>
        
        <el-main class="vii_main">
          <el-row >
            <el-col :span="12">
              <div class="grid-village-map">
                
                <mainmap />
                <villagemdata />
              </div>
            </el-col> <!-- css 自行修改-->
            <el-col :span="12">
              <div class="grid-village-databox">
                <el-row >
                  <el-col :span="8"><div class="grid-village-annou"> <partymdata/></div></el-col>
                  <el-col :span="16"><div class="grid-village-char" > <partychart/><villagerchar/></div></el-col>
                </el-row>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="6"><div class="grid-village-echart1">党建模块 党务信息 实时政事</div></el-col>
            <el-col :span="7"><div class="grid-village-echart2">村重大项目信息</div></el-col>
            <el-col :span="7"><div class="grid-village-echart3">图表模块</div></el-col>
            <el-col :span="4"><div class="grid-village-echart4"></div></el-col>
          </el-row>
        </el-main>
        
      </el-container>
    </el-container>
</div>
</template>

<script>

import mainmap from './villagemap' //百度地图层
import partymdata from '@/components/village/villageview/partymdata'//党员数显示
import partywork from '@/components/village/villageview/partywork'
import villagemdata from '@/components/village/villageview/villagemdata'
import partychart from '@/components/village/charts/partychart'
import villagerchar from '@/components/village/charts/villagerchar'
import { mapGetters } from 'vuex';
export default {
  components: {mainmap,partymdata,partywork,villagemdata,partychart,villagerchar
    },
  name: 'villagemain',
  data () {
    return {

    };
  },
  methods:{
    
  },
  computed: { //计算属性 取存在状态库中的值

  },
  watch:{

  }

}
</script>
<style lang="scss" >

.partyview_main{
  background-image:url(../../static/img/partybackground.jpg);
  background-size: cover;
  opacity: 0.9;
}
  
  .vii_left {
   // background-color: #D3DCE6;
    color: #333;
   
  }
  
  .vii_main {
   // background-color: #E9EEF3;
    color: #333;
   
  }
  
.el-container {
    height:92vh;
    
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
 .el-row {
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }

  .row-bg {
    padding: 10px 0;

  }
  .grid-village-map{
    border-radius: 4px;
    height: 60vh;

    
  }
  
  .grid-village-databox{
    border-radius: 4px;
    height: 60vh;

    .grid-village-onlydata{
      border-radius: 4px;
      height: 30vh;

    }
    .grid-village-annou{
      position: relative;

      height: 60vh;

    }
    
  }
  .grid-village-char{
      display: flex;
      flex-direction:column;
      justify-content: space-around;
      height: 60vh;
    }
  .grid-village-echart1{
    border-radius: 4px;
    height: 31vh;

  }
  .grid-village-echart2{
    border-radius: 4px;
    height: 31vh;

  }
  .grid-village-echart3{
    border-radius: 4px;
    height: 31vh;

  }
  .grid-village-echart4{
    border-radius: 4px;
    height: 31vh;

  }
</style>
