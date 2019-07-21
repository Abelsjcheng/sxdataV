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
                    <div class="info"><policyinfo/></div>
                </el-col>
                <el-col :span="6"><div class="info"><politics/></div></el-col>
            </el-row>

            <el-row :gutter="10" class="vii-row">
                <el-col :span="6">
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
import partyhd from '@/components/village/villagebook/partyhd' //党员活动组件
import policyinfo from '@/components/village/villagebook/policyinfo' //公告组件
import partyedu from '@/components/village/villagebook/partyedu' //在线学习组件
import shishi from '@/components/village/villagebook/shishi'  //实时政事组件
import viiproject from '@/components/village/villagebook/viiproject' //村重大项目组件
import Carousel from '@/components/village/villagebook/Carousel' //图片轮播组件
import partyaffairs from '@/components/village/villagebook/partyaffairs' //村务公开组件
import politics from '@/components/village/villagebook/politics'  //政策组件
export default {
    components: {partyhd,policyinfo,partyedu,viiproject,shishi,Carousel,partyaffairs,politics
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
        height: 100%;
        
    }
    .vii-main {
        background-color: rgb(233, 233, 196);
        padding-top: 15px;
        overflow-x:hidden;
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
        height: 310px;
        border-radius: 4px;
        border: 2px solid #e24617;
    }
    .info{
        background: #ffffff;
        height:425px;
        border: 2px solid #e24617;
    }


</style>


