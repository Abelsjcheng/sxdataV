<template>
  <div class="partyview_main">
    <el-container>
      <el-aside width="18vw">
        <partywork/>
        <ledinfo/>

        <edulevelchart/>
      </el-aside>
      <el-container>
        
        <el-main class="vii_main">
          <el-row :gutter="10">
            <el-col :span="18">
              <div class="grid-village-map">
                <mainmap />
                <villagemdata />
              </div>
            </el-col>
            <el-col :span="6">
                 <div class="grid-village-annou"> <partymdata/></div>
            </el-col>
          </el-row>
        </el-main>
        <el-footer height="33vh" style="padding:0 5px">
              <el-row :gutter="10">
                <el-col :span="12"><div class="grid-village-bottomchar"><flandchart/></div></el-col>
                <el-col :span="12"><div class="grid-village-bottomchar"><viigroupchart/></div></el-col>
              </el-row>
        </el-footer>
      </el-container>
      <el-aside width="28vw">
        <div class="grid-village-rightchar"><partychart /> </div>
        <div class="grid-village-rightchar"><villagerchart /></div>
        <div class="grid-village-rightchar"><assetchart/></div>
      </el-aside>
    </el-container>
</div>
</template>

<script>

import mainmap from './villagemap' //百度地图层
import partymdata from '@/components/village/villageview/partymdata'//党员数显示
import partywork from '@/components/village/villageview/partywork'
import villagemdata from '@/components/village/villageview/villagemdata'
import partychart from '@/components/village/charts/partychart'
import villagerchart from '@/components/village/charts/villagerchart'
import flandchart from '@/components/village/charts/flandchart'
import viigroupchart from '@/components/village/charts/viigroupchart'
import assetchart from '@/components/village/charts/assetchart'
import edulevelchart from '@/components/village/charts/edulevelchart'
import ledinfo from '@/components/village/villageview/ledinfo'
import { mapGetters } from 'vuex';
export default {
  components: {mainmap,partymdata,partywork,villagemdata,partychart,villagerchart,flandchart,viigroupchart,assetchart,edulevelchart,ledinfo
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
<style lang="scss" scoped>

.partyview_main{
  background-image:url(../../static/img/partybackground.jpg);
  background-size: cover;
  opacity: 0.9;
  height: 100%;
}
  .el-container{
    height:100%;
  }
  .vii_main{
    height: 58vh;
    margin:5px 0;
    overflow: hidden;
  }
    .grid-village-onlydata{
      border-radius: 4px;
      height: 30vh;

    }
    .grid-village-annou{
      
      margin: 0 auto;
      margin-top:35%;
      width: 90%;
      
    }
  .el-aside{
    display: flex;
    flex-direction:column;
    justify-content: space-around;
    align-items:center; //垂直居中
    overflow: hidden;
  }
  .grid-village-rightchar{
     background: rgba(0,0,0,.2);
    width:95%;
    height: 29vh;
    margin:0 5px;
    padding: 2px 2px;
  }


  
  .grid-village-bottomchar{
    background: rgba(0,0,0,.2);
    width:100%;
    height: 32.5vh;
    
  }
  
</style>
