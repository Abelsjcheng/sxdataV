<template>

    
  <el-container class="con1">
    <el-aside width="22vw">
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
        <el-footer height="41vh">
            <el-row :gutter="10">
              <el-col :span="12"><div class="flex-item_f"><programtable /></div></el-col>
              <el-col :span="12"><div class="flex-item_f"><timechart /></div></el-col>
            </el-row>
        </el-footer>
    </el-container>
    <el-aside width="22vw">
      <!-- <div id="item2"> -->
      
      <div class="flex-item_r"><typechart /></div>
      <div class="flex-item_r2"><zdinfo/></div>
    <!-- </div> -->
    </el-aside>
  </el-container>

  
</template>

<script>
import programtable from '@/components/broad/charts/programtable'//
import timechart from '@/components/broad/charts/timechart'//各时长广播分布
import typechart from '@/components/broad/charts/typechart'//广播状态
import tabledata from '@/components/broad/charts/tabledata' //table数据组
import mainmap from './broadmap' //百度地图层
import barchart from '@/components/broad/charts/barchart'//柱状图
import radarchart from '@/components/broad/charts/radarchart'//雷达图
import linechart from '@/components/broad/charts/linechart'//折线图
import zdinfo from '@/components/broad/annoucement/zdinfo'//公告信息列表

import { mapGetters } from 'vuex';
export default { 
  components: {programtable,timechart,typechart,tabledata,mainmap,barchart,radarchart,linechart,zdinfo
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
    height:100%;
    width: 100%;
  }
.el-main{
  overflow: hidden;
}
.el-footer {
    padding:0 5px;
    text-align: center;
  }


  .flex-item_f{
    margin-top:5px;
    height:38.9vh;
    border:1px solid #256;
  }
  
  .el-aside {
    display: flex;
      flex-direction:column;
      justify-content: space-around;
      align-items:center; //垂直居中
     text-align: center;
    overflow: hidden;
    padding: 4px;
    height:100%;
  }


  .flex-item_l{
    margin:3px;
    width: 100%;
    height:29vh;
    border:1px solid #256;
  }

.flex-item_r{
  width: 100%;
  margin:3px;
  height:29vh;
  border:1px solid #256;
}
.flex-item_r2{
  width: 100%;
  margin:3px;
  height:60vh;
  border:1px solid #256;
}
  


  .flex-item_m{
     margin:3px;
    margin-top:6.5px;
    border:1px solid #256;
  }
</style>
