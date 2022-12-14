<template>
  <div class="dataitem" @click="showcontent(item)">
    <span class="data_tid">{{ item.tid }} </span>
    <span class="data_content"> {{ item.content }} </span>
    <span class="data_time">{{ item.ctime }} </span>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  props: ["item"],
  methods: {
    showcontent(message) {
      //赋值
      this.infocontent = {
        lo: message.lo,
        la: message.la,
        type: message.type,
        tid: message.tid,
        content: message.content,
        ctime: message.ctime,
      };
      this.$store.commit("SET_ZDINFOCONTENT", this.infocontent); //提交至状态库存储用于标注弹窗
      //this.$refs.mycontent.show()//显示弹窗
    },
  },
};
</script>
<style lang="scss" scoped>
span {
  float: left;
  display: block;
}
.dataitem {
  border-bottom: 1px dashed #404040;
  background-color: rgba(20, 66, 125, 0.12);
  color: white;
  height: 40px;
  text-align: center;
  line-height: 40px;
  overflow: hidden; //行溢出
  :hover {
    cursor: pointer;
  }
}
.data_tid {
  font-size: 14px;
}
.data_content {
  width: 36%;

  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; //单行溢出设置
}
.data_time {
  color: #4a97da;
  font-size: 12px;
  text-align: right;
  float: right;
  width: 31%;
}
</style>
