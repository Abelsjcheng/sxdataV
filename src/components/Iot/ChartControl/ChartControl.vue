<template>
    <div class="chartplane">
        <div class="chartplane_head">
            <div class="title" >图表选择器</div>
            <el-tooltip effect="dark" content="添加图表" style="font-size: 25px;" placement="bottom">
             <i class="el-icon-circle-plus-outline" v-popover:popoverselect style="color: #05d2e2;"></i>
            </el-tooltip>
           
        </div>
        <rainchartcol :rainchartshow="rainchartvisible"/>
        
        <el-popover ref="popoverselect"  placement="bottom-start" width="100" v-model="popvisible" visible-arrow="false">
            <option v-for="item in options" :key="item.value"  :label="item.label" :value="item.value" class="selected" @click="openchart(item.value)"></option>

        </el-popover>
        
    </div>
</template>

<script>
import rainchartcol from './rainchartcol';//
import tempchartcol from './tempchartcol';
export default {
    components: {rainchartcol,tempchartcol
    },
    name:"ChartControl",
    data(){
        return {
           options: [{
            value: 'rain',
            label: '雨量折线图'
            }, {
            value: 'temp',
            label: '温度柱状图'
            }],
           popvisible:false,
           rainchartvisible:true,
           tempchartshow:true
        }
    },
    methods:{
        openchart(vag){
            
            if(vag=="rain"){
                console.log(this.rainchartvisible)
                this.rainchartvisible=true
            }else if(vag=="temp"){
                this.tempchartshow=true
            }
        }
    }
    
}
</script>

<style lang="scss">
.selected{
    margin:4.5px 0;
    
}
.selected:hover{
        background-color: rgba(62, 126, 191, 1)
    }
</style>

