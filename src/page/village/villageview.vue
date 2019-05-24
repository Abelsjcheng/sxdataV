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
      <el-aside width="300px">Aside</el-aside>
      <el-container>
        
        <el-main>
          <el-row :gutter="10">
            <el-col :span="10"><div class="grid-village-map">地图模块</div></el-col> <!-- css 自行修改-->
            <el-col :span="14">
              <div class="grid-village-databox">
                <el-row >
                  <el-col :span="24"><div class="grid-village-onlydata">单数据展示模块</div></el-col>
                </el-row>
                <el-row :gutter="5">
                  <el-col :span="12"><div class="grid-village-annou">村务模块</div></el-col>
                  <el-col :span="12"><div class="grid-village-annou">村务模块</div></el-col>

                </el-row>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="6"><div class="grid-village-echart1">党建模块</div></el-col>
            <el-col :span="7"><div class="grid-village-echart2">图表模块</div></el-col>
            <el-col :span="7"><div class="grid-village-echart3">图表模块</div></el-col>
            <el-col :span="4"><div class="grid-village-echart4"></div></el-col>
          </el-row>
        </el-main>
        
      </el-container>
    </el-container>
  </div>
</template>

<script>
import piechart from '../../components/village/charts/piechart'//饼图
import tabledata from '../../components/village/charts/tabledata' //table数据组
import mainmap from './villagemap' //百度地图层
import barchart from '../../components/village/charts/barchart'//柱状图
import radarchart from '../../components/village/charts/radarchart'//雷达图
import linechart from '../../components/village/charts/linechart'//折线图
import painfo from '../../components/village/annoucement/painfo'//公告信息列表
import Kanban from '../../components/main/Kanban';
import { mapGetters } from 'vuex';
export default {
  components: {piechart,tabledata,mainmap,barchart,radarchart,linechart,painfo,Kanban
    },
  name: 'villagemain',
  data () {
    return {
      stages: ['on-hold'],
      block1: [{id:1,status:'on-hold'},{id:2,status:'on-hold'},{id:3,status:'on-hold'}],
      block2: [{id:1,status:'on-hold'},{id:2,status:'on-hold'}],
      activedisplay:true
    };
  },
  methods:{
    updateBlock(id, status) {
      this.blocks.find(b => b.id === Number(id)).status = status;
    },
  },
  computed: { //计算属性 取存在状态库中的值
     ...mapGetters(["isdisplay"]),
     listendisplay(){  //监听显示按钮
       return this.isdisplay;
     }
  },
  watch:{
      listendisplay:function(vag){
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
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
    border-right:3px solid  #3fa6cb;
   
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
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
