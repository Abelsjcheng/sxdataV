<template>
    <div class="dataitem" @click="showcontent(item)">
        <div class="top"> 
            <span class="data_title">{{item.tid}} </span>
            <el-badge :type="item.badge" class="data_level"  ></el-badge>
            <span class="data_time">{{item.ctime}} </span>
        </div>
        <div class="data_content">
            {{item.content}}
        </div>
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
<style lang="scss">
.dataitem{
    border-bottom: 1px solid #eee;;
    background-color: rgba(20,66,125,0.12);
    height: 80px;
    margin-bottom: 6px;
    color: white;
}
.top{
    height: 25px;
}


.data_level {
    float: left;
    color: white;
    font-size: 12px;
    text-align: center;
}
.el-badge__content{
    height: 22px;   
    padding: 0 10px;
    border:none;
    margin-left: 8px;
    margin-top:3px;
}
.data_title{
    float: left;
    background-image: url(../../../static/img/pushmessage_class.png);
    background-repeat: no-repeat;
    width: 150px;
    line-height: 25px;
    color: white;
    font-size: 14px;
    text-align: center;
}
.data_content {
    padding-left: 10px;
    padding-right: 6px;
    overflow: hidden;
    margin-top: 8px;
}

.localize {
    display: block;
    line-height: 25px;
    margin-left: 8px;
    background-image: url(../../../static/img/loca.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position-y: 3px;
    width: 20px;
    height: 28px;
    float: left;
}
.data_time{
    color: #4a97da;
    font-size: 12px;
    line-height: 25px;
    text-align: right;
    display: block;
    float: right;
    margin-right: 5px;
}
</style>
