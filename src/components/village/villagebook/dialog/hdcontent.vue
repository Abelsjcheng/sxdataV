<template>
    <el-dialog
          :visible.sync="centerDialogVisible"
          width="30%"
          :before-close="handleClose"
          lock-scroll=false
          center
          style="overflow: hidden;"
          >
        
          <div slot="title">
            <h3 style="display:block">{{item.title}}</h3>
            <div class="pa_info">时间:{{item.date}}&nbsp;&nbsp;发布人:{{item.uname}}&nbsp;&nbsp;类型:{{item.type}}</div>
          </div>
          <div class="scroll_content">
            <el-image style="height: 300px" :src="item.pic" fit="cover"></el-image>
            <span class="content" >活动地点:&nbsp;{{item.hdloc}}</span>
            <span class="content" >活动人数:&nbsp;{{item.hdnum}}</span>
            <span class="content" >活动时间:&nbsp;{{item.hdbtime}}&nbsp;-&nbsp;{{item.hdetime}}</span>
            <span class="content" >活动人数:&nbsp;{{item.hdnum}}</span>
            <span class="content" v-html="'活动简介:'+item.content"></span>
          </div>
    </el-dialog>

</template>
<script>
import virtualList from 'vue-virtual-scroll-list'
export default {
    components: {virtualList },
    data () {
    return {
        DialogVisible:this.centerDialogVisible,
        count:0

    };
  },
  props:['item','centerDialogVisible'],
  methods:{
        handleClose(done) {
        this.$emit('dialogClose', false);//传入父组件的窗口关闭参数
      },
      load () {
        this.count += 2
      }
  },
  computed: { //计算属性 取存在状态库中的值
        listencenterDialogVisible(){ 
            return this.centerDialogVisible;
        }
  },
  watch:{
       listencenterDialogVisible(vag){ //监听父组件事件 并更新父组件向子组件传递的值
            this.DialogVisible=vag;

        }
    }
}
</script>
<style lang="scss">
.scroll_content{
  height: 460px;
  overflow:scroll;
}
</style>



