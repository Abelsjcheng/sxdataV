<template>
    <el-container>
        <el-main class="vii-main">
            <el-row :gutter="10" class="vii-row">
                <el-col :span="12">
                    <div class="vii_modtitle">党务公开 </div>
                    <div class="info">
                        <el-row :gutter="10">
                            <el-col :span="12">
                                <Carousel/>
                            </el-col>
                            <el-col :span="12">
                                <partyaffairs/>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="info"><painfo/></div>
                </el-col>
                <el-col :span="6"><div class="info"><painfo/></div></el-col>
            </el-row>

            <el-row :gutter="10" class="vii-row">
                <el-col :span="6">
                    <div class="vii_modtitle">党员活动 </div>
                    <div class="hd"><partyhd/></div>
                </el-col>
                <el-col :span="6">
                    <div class="hd">
                        <partyedu/>
                    </div>
                    </el-col>
                <el-col :span="6"><div class="hd"> <shishi/></div></el-col>
                <el-col :span="6"><div class="hd"><viiproject/></div></el-col>
            </el-row>
        </el-main>

    </el-container>
</template>
<script>
import partyhd from '@/components/village/villagebook/partyhd'
import painfo from '@/components/village/villagebook/painfo'
import partyedu from '@/components/village/villagebook/partyedu'
import shishi from '@/components/village/villagebook/shishi'
import viiproject from '@/components/village/villagebook/viiproject'
import Carousel from '@/components/village/villagebook/Carousel'
import partyaffairs from '@/components/village/villagebook/partyaffairs'
export default {
    components: {partyhd,painfo,partyedu,viiproject,shishi,Carousel,partyaffairs
    },
    name: 'villageindex',
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

<style lang="scss">
    .el-container{
        height: 92vh;
    }
    .vii-main {
        background-color: rgb(233, 233, 196);
        padding-top: 15px;
    }

    .vii-row {
        margin-top:30px;
        padding: 0 30px;
        &:last-child {
        margin-bottom: 0;
        }
    }
  
    
    .hd{
        background: #ffffff;
        height: 32vh;
        border-radius: 4px;
        border: 2px solid #e24617;
    }
    .info{
        background: #ffffff;
        min-height:50vh;
        border: 2px solid #e24617;
    }


</style>


