<template>
    <div class="dataitem" @click="showcontent(item)">

            <span style="width: 38%;">{{item.tid}} </span>
           <span  class="data_content" > {{item.content}} </span>
            <span class="data_time">{{item.ctime}} </span>

    </div>
</template>
<script>
    import { mapGetters } from 'vuex';
    export default {
        data () {
            return {
                
            }
        },
        props:['item'],
        methods:{
            showcontent (message) {
            //赋值
            this.infocontent={lo:message.lo,la:message.la,type:message.type,tid:message.tid,content:message.content,ctime:message.ctime}
            this.$store.commit('SET_ZDINFOCONTENT',this.infocontent); //提交至状态库存储用于标注弹窗
            //this.$refs.mycontent.show()//显示弹窗
            },
        }
    }
</script>
<style lang="scss" scoped>

.dataitem{
    border-bottom: 1px dashed #404040;
    background-color: rgba(20,66,125,0.12);
    color: white;
    height: 40px;
    text-align:left;
    line-height: 40px;
    
}

.data_content{
    width: 33%;
    margin-left:5px;
    overflow: hidden;

}
.data_time{
    color: #4a97da;
    font-size: 12px;
    text-align: right;
    float: right;
    width: 28%;
}
</style>
