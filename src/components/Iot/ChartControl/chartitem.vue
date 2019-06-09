<template>
    <div class="chartblock" v-if="chartvisible">
            <div class="chart_title">{{chart.label}} </div>
            <div>
                <el-popover   placement="bottom-start" width="420" v-model="popvisible">
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
                    <i class="el-icon-setting"  style="color: #05d2e2;" slot="reference"></i>
                </el-popover>                    
               
                <i class="el-icon-circle-close-outline" @click="deletechart" style="color: #05d2e2;"></i>
            </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name:"chartitem",
    data(){
        return {
            popvisible: this.chart.timevisible,//图表控制器弹窗显示初始化
            chartvisible:this.chart.chartshow,//图表显示初始化
            chartSet:{name:this.chart.value,limit:20,timeframe:["2019-02-01 10:10:00", "2019-04-18 10:10:00"],chartvisible:this.chart.chartshow}
        }
    },
    props:['chart'],//定义父组件向子组件传递的对象
    methods:{
        formatTooltip(val) {
            return val / 100;
        },
        submit(){
            this.popvisible=false;
            this.$store.commit("SET_CHARTSET",this.chartSet);
        },
        deletechart(){
            this.chartvisible=false;
            this.$emit('deletechart', false); //向父组件传值
            this.chartSet.chartvisible=this.chartvisible;
            this.$store.commit("SET_CHARTSET",this.chartSet);
        }
    },
    computed:{
        listenchartvisible(){ 
            return this.chart.chartshow;
        }
    },
    watch:{
        listenchartvisible(vag){ //监听父组件事件 并更新父组件向子组件传递的值
            this.chartvisible=vag;
            this.chartSet.chartvisible=vag;

        }
    }
}
</script>

