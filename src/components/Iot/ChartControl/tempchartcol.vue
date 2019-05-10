<template>
    <div>
        <div class="chartblock" v-if="rainvisible">
                <div class="chart_title">温度柱状图 </div>
                <div>
                <i class="el-icon-setting" v-popover:popover4 style="color: #05d2e2;"></i>
                <i class="el-icon-circle-close-outline" @click="rainvisible = false" style="color: #05d2e2;"></i>
                </div>
        </div>
       <el-popover ref="popover4"  placement="bottom-start" width="420" v-model="popvisible">
                <el-date-picker v-model="chartSet.timeframe" type="datetimerange" value-format="yyyy-MM-dd HH:mm:ss" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"  align="right"  >
                </el-date-picker>
            <div class="block">
                <span class="demonstration">查询数量</span>
                <el-slider v-model="chartSet.limit"></el-slider>
            </div>
            <div style="text-align: right; margin: 0">
                <el-button size="mini" type="text" @click="popvisible = false">取消</el-button>
                <el-button type="primary" size="mini" @click="submit">确定</el-button>
            </div>
        </el-popover>
    </div>  
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name:"tempchartcol",
    data(){
        return {
            popvisible: false,
            rainvisible:true,
            chartSet:{name:"",limit:20,timeframe:["2019-02-01 10:10:00", "2019-04-18 10:10:00"]}
        }
    },
    methods:{
        formatTooltip(val) {
             return val / 100;
        },
        submit(){
            this.popvisible=false;
            this.$store.commit("SET_CHARTSET",this.chartSet);
        }
    }
}
</script>

