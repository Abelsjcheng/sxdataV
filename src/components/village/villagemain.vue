<template>
    <div >
    <!-- 左视图层 -->
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
    </div>
    <!-- 右视图层 -->
    <div class="m_right" v-bind:style="{ display: activedisplay}">
      <Kanban style="height: 92vh;" :stages="stages" :blocks="block2" @update-block="updateBlock">
      <div class="m_right1" :slot="1" :key="1">
        <!-- 饼图 -->
        <piechart />   
      </div>
      <div class="m_right2" :slot="2" :key="2">
        <!-- 公告与政策 -->
        <painfo/>
      </div>
      </Kanban>
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
import piechart from './charts/piechart'//饼图
import tabledata from './charts/tabledata' //table数据组
import mainmap from './mainmap' //百度地图层
import barchart from './charts/barchart'//柱状图
import radarchart from './charts/radarchart'//雷达图
import linechart from './charts/linechart'//折线图
import painfo from './annoucement/painfo'//公告信息列表
import Kanban from '../main/Kanban';
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

.app-warpper /deep/ .drag-container {
    margin:auto auto;
  }
.app-warpper /deep/ .drag-column {
    margin:0 0;
    z-index:2;
    h2{
      font-size:2rem;
    }
  }
.app-warpper /deep/ .drag-item {
    padding: 0;
    margin: 0;
    height:auto;
  }
</style>
