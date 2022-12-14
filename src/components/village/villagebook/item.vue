<template>
  <div>
    <li class="list-li">
      <span class="yuan"> </span>
      <a class="list-title" @click="opendialog()">{{ item.title }} </a>
      <em class="list-date">{{ item.date }} </em>
    </li>
    <!--自定义组件 弹出窗口用于显示具体信息 v-bind： 动态赋值-->
    <infocontent
      v-bind:item="item"
      v-bind:centerDialogVisible="centerDialogVisible"
      v-on:dialogClose="centerDialogVisible = $event"
    />
    <hdcontent
      v-bind:item="item"
      v-bind:centerDialogVisible="hdcenterDialogVisible"
      v-on:dialogClose="hdcenterDialogVisible = $event"
    />
    <!-- v-on: 用于监听子组件的传值并做处理（监听器） $event为传递的参数-->
  </div>
</template>
<script>
import infocontent from "./dialog/infocontent.vue";
import hdcontent from "./dialog/hdcontent.vue";
export default {
  components: { infocontent, hdcontent },
  data() {
    return {
      centerDialogVisible: false, //传入子组件的dialog是否显示参数
      hdcenterDialogVisible: false,
    };
  },
  props: ["item"],
  filters: {
    ellipsis(value) {
      if (!value) return "";

      if (value.length > 13) {
        return value.slice(0, 13) + "...";
      }

      return value;
    },
  },
  methods: {
    opendialog() {
      if (this.item.id == "hd") {
        this.hdcenterDialogVisible = true;
      } else {
        this.centerDialogVisible = true;
      }
    },
  },
};
</script>
<style lang="scss">
.yuan {
  display: block;
  float: left;
  width: 8px;
  height: 8px;
  border-radius: 8px;
  background: #000;
  margin: 12px;
}
.list-li {
  list-style: none;
  height: 32px;
  font-size: 16px;
  line-height: 32px;
  overflow: hidden;
}

.list-date {
  width: 28%;
  font-size: 12px;
  color: #999;
  float: right;
  padding-right: 10px;
}
.list-title {
  width: 60%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; //单行溢出设置
}
</style>
