<template>
  <div class="partyview_main">
    <el-container>
      <el-aside class="vii_left" width="18%">
        <partywork/>
        <ledinfo/>

        <edulevelchart/>
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
                  <el-col :span="16"><div class="grid-village-rightchar" ><partychart /> <villagerchart /></div></el-col>
                </el-row>
              </div>
            </el-col>
          </el-row>
          <el-row class="row-bg" :gutter="10">
            <el-col :span="8"><div class="grid-village-bottomchar"><flandchart/></div></el-col>
            <el-col :span="8"><div class="grid-village-bottomchar"><viigroupchart/></div></el-col>
            <el-col :span="8"><div class="grid-village-bottomchar"><assetchart/></div></el-col>
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
<style lang="scss" >

.partyview_main{
  background-image:url(../../static/img/partybackground.jpg);
  background-size: cover;
  opacity: 0.9;
  height: 100%;
}
  .el-container{
    height:100%;
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
  .vii_left{
    display: flex;
    flex-direction:column;
    justify-content: space-around;
    align-items:center; //垂直居中
  }
  .grid-village-rightchar{
      display: flex;
      flex-direction:column;//主轴为垂直方向，起点在上沿。
      justify-content: space-around;//每个项目两侧的间隔相等
      height: 60vh;
    }
  .grid-village-bottomchar{
    margin-top: 5px;
    height: 33vh;

  }
  
</style>
