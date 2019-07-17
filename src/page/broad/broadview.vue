<template>
   <div>
    <!-- 左视图层 -->
    <!-- <div class="m_left" v-bind:style="{ display: activedisplay}">
      <Kanban style="height: 92vh;" :stages="stages" :blocks="block1" @update-block="updateBlock">
        <div class="m_left1" :slot="1" :key="1">
          <tabledata />
        </div>
        <div class="m_left1" :slot="2" :key="2">
           <barchart />
        </div>
        <div class="m_left1"   :slot="3" :key="3"> -->
          <!--重做 <radarchart />-->
        <!-- </div>
      </Kanban>
    </div> -->
    <!-- 右视图层 -->
    <!-- <div class="m_right" v-bind:style="{ display: activedisplay}">
      <Kanban style="height: 92vh;" :stages="stages" :blocks="block2" @update-block="updateBlock">
      <div class="m_right1" :slot="1" :key="1"> -->
        <!-- 饼图 -->
        <!--重做 <piechart />   -->
      <!-- </div>
      <div class="m_right2" :slot="2" :key="2"> -->
        <!-- 公告与政策 -->
       <!--重做 <zdinfo/> -->
      <!-- </div>
      </Kanban>
    </div>
    <div class="m_bottom" v-bind:style="{ display: activedisplay}">
      <div class="m_bottom1"> -->
        <!-- 折线图 -->
       <!--重做   <linechart /> -->
      <!-- </div>
    </div> -->
    <!-- 地图层 -->
    <!-- <mainmap /> -->
  <el-container class="con1">
    <el-aside width="23.5vw">
      <!-- <div id="item1"> -->
        <div class="flex-item_l" id="l1"><tabledata /></div>
        <div class="flex-item_l" id="l2"><radarchart /></div>
        <div class="flex-item_l" id="l3"><linechart /></div>
      <!-- </div> -->
    </el-aside>
    <el-container id="con2">
        <el-main>
          <div class="flex-item_m"><mainmap/></div>
        </el-main>
        <el-footer height="42vh">
            <div class="flex-container">
              <div class="flex-item_f" id="f1">f7</div>
              <div class="flex-item_f" id="f2"> f8</div>
            </div>
        </el-footer>
    </el-container>
    <el-aside width="24%">
      <!-- <div id="item2"> -->
      <div class="flex-item_r">f4</div>
      <div class="flex-item_r">f5</div>
      <div class="flex-item_r">f6</div>
    <!-- </div> -->
    </el-aside>
  </el-container>
  </div> 
  
</template>

<script>
import piechart from '@/components/broad/charts/piechart'//饼图
import tabledata from '@/components/broad/charts/tabledata' //table数据组
import mainmap from './broadmap' //百度地图层
import barchart from '@/components/broad/charts/barchart'//柱状图
import radarchart from '@/components/broad/charts/radarchart'//雷达图
import linechart from '@/components/broad/charts/linechart'//折线图
import zdinfo from '@/components/broad/annoucement/zdinfo'//公告信息列表
import Kanban from '@/components/main/Kanban';//拖拽组件
import { mapGetters } from 'vuex';
export default { 
  components: {piechart,tabledata,mainmap,barchart,radarchart,linechart,zdinfo,Kanban
      },//注册组件
  name: "mianview",
  data () { //局内数据
    return {
      stages: ['on-hold'],
      block1: [{id:1,status:'on-hold'},{id:2,status:'on-hold'},{id:3,status:'on-hold'}],
      block2: [{id:1,status:'on-hold'},{id:2,status:'on-hold'}],
      activedisplay:true    //图表显示判断
    };
  },
  methods:{ //方法函数
    updateBlock(id, status) {
      this.blocks.find(b => b.id === Number(id)).status = status;
    },
  },
  computed: { //计算属性 取存在状态库中的值
     ...mapGetters(["isdisplay"]), //图表显示判断值
     listendisplay(){     //返回isdisplay的值    类似java构造函数
       return this.isdisplay;
     }
  },
  watch:{
      listendisplay:function(vag){    //函数实现   vag为computed方法中listendisplay函数的返回值
        
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

<style lang="scss" scoped>


  #el-container{
    height:100%;
    margin:0;
    padding:0;
    position:relative;
    background-color: #040f3c;
  }

  .con1{
    background-color: #040f3c;
  }

.el-footer {
    // background-color: #B3C0D1;
    // color: #333;
    text-align: center;
    line-height: 200px;
  }

  .flex-container{
    position:absolute;
    display:flex;
    width:105vh;
    margin-left:-20px;
    height:100%;
    flex-direction:row;
     //background-color:lightgrey;
    }

  .flex-item_f{
    //background-color:#B3C0D1;
    margin:3px;
    margin-top:10px;
    height:38.9vh;
    width:51vh;
    border:1px solid #256;
  }
  
  .el-aside {
    // background-color: #040f3c;
    // color: #333;
     text-align: center;
    line-height: 20vh;
    margin:3px;
    height:100%;
  }

  .flex-item_l{
    // background-color:#B3C0D1;
    margin:3px;
    height:29.5vh;
    border:1px solid #256;
  }

.flex-item_r{
  // background-color:#B3C0D1;
  margin:3px;
  height:29.5vh;
  border:1px solid #256;
}

  
  .el-main {
    // background-color: #E9EEF3;
    // color: #333;
    // text-align: center;
    //line-height: 100px;
    height:50vh;
  }

  .flex-item_m{
    // background-color:#B3C0D1;
     margin:3px;
    margin-top:6.5px;
    height:50vh;
    border:1px solid #256;
  }
</style>
