<template>
    <div >
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
      <el-aside class="vii_left" width="250px">
        <partywork/>
      </el-aside>
      <el-container>
        
        <el-main class="vii_main">
          <el-row >
            <el-col :span="11">
              <div class="grid-village-map">
                <partymdata/>
                <mainmap />
              </div>
            </el-col> <!-- css 自行修改-->
            <el-col :span="13">
              <div class="grid-village-databox">
                <el-row >
                  <el-col :span="24"><div class="grid-village-onlydata">人口总数，男人总数，女人总数，党员总数，党员男性数，党员女性数</div></el-col>
                </el-row>
                <el-row :gutter="5">
                  <el-col :span="12"><div class="grid-village-annou"><partyhd/></div></el-col>
                  <el-col :span="12"><div class="grid-village-annou"><painfo/></div></el-col>

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
import partymdata from '@/components/village/partymdata'//党员数显示
import partywork from '@/components/village/partywork'
import partyhd from '@/components/village/partyhd'
import painfo from '@/components/village/painfo'
import { mapGetters } from 'vuex';
export default {
  components: {mainmap,partymdata,partywork,partyhd,painfo
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

.el-header, .el-footer {
    
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .vii_left {
    background-color: #D3DCE6;
    color: #333;
    border-right:3px solid  #3fa6cb;
   
  }
  
  .vii_main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
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
    background-color: #f9fafc;
  }
  .grid-village-map{
    border-radius: 4px;
    height: 60vh;
    background: #d3dce6;
    border-right:3px solid  #3fa6cb;
  }
  
  .grid-village-databox{
    border-radius: 4px;
    height: 60vh;
    background: #d3dce6;
    .grid-village-onlydata{
      border-radius: 4px;
      height: 30vh;
      background:#738fad;
    }
    .grid-village-annou{
      border-radius: 4px;
      height: 30vh;
      background:#738fad;
    }
  }
  .grid-village-echart1{
    border-radius: 4px;
    height: 31vh;
    background: #d3dce6;
  }
  .grid-village-echart2{
    border-radius: 4px;
    height: 31vh;
    background: #d3dce6;
  }
  .grid-village-echart3{
    border-radius: 4px;
    height: 31vh;
    background: #d3dce6;
  }
  .grid-village-echart4{
    border-radius: 4px;
    height: 31vh;
    background: #d3dce6;
  }
</style>
