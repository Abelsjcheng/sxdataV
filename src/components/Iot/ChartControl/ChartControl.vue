<template>
  <div class="chartplane">
    <div class="chartplane_head">
      <div class="title">图表选择器</div>
      <el-tooltip
        effect="dark"
        content="添加图表"
        style="font-size: 25px"
        placement="bottom"
      >
        <i
          class="el-icon-circle-plus-outline"
          v-popover:popoverselect
          style="color: #05d2e2"
        ></i>
      </el-tooltip>
    </div>

    <chartitem
      v-for="option in options"
      v-bind:key="option.id"
      v-bind:chart="option"
      v-on:deletechart="option.chartshow = $event"
    />

    <el-popover
      ref="popoverselect"
      placement="bottom-start"
      width="200"
      v-model="popvisible"
      visible-arrow="false"
    >
      <option
        v-for="item in options"
        :key="item.id"
        :label="item.label"
        :value="item.value"
        v-show="item.chartshow == false"
        class="selected"
        @click="openchart(item)"
      ></option>
      <option v-show="nomore == -1" label="没有更多图表"></option>
    </el-popover>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import chartitem from "./chartitem"; //
export default {
  components: { chartitem },
  name: "ChartControl",
  data() {
    return {
      options: [
        //子组件初始化 属性
        {
          id: 1,
          value: "rain",
          label: "雨量折线图",
          chartshow: true,
          timevisible: false,
        },
        {
          id: 2,
          value: "temp",
          label: "温度湿度柱状图",
          chartshow: false,
          timevisible: false,
        },
        {
          id: 3,
          value: "flow",
          label: "流量数据关系图",
          chartshow: true,
          timevisible: false,
        },
        {
          id: 4,
          value: "wlevel",
          label: "水位数据关系图",
          chartshow: false,
          timevisible: false,
        },
        {
          id: 5,
          value: "ph",
          label: "酸碱度数据关系图",
          chartshow: false,
          timevisible: false,
        },
        {
          id: 6,
          value: "pm",
          label: "pm2.5数据关系图",
          chartshow: false,
          timevisible: false,
        },
        {
          id: 7,
          value: "iot",
          label: "物联网终端数据关系图",
          chartshow: true,
          timevisible: false,
        },
      ],
      popvisible: false, //图表选择下拉框显示
      nomore: false,
    };
  },
  methods: {
    openchart(vag) {
      this.options.forEach((element) => {
        //遍历查找
        if (element.id == vag.id) {
          element.chartshow = true;
          this.$store.commit("SET_CHARTSET", {
            name: element.value,
            limit: 20,
            timeframe: ["2019-02-01 10:10:00", "2019-04-18 10:10:00"],
            chartvisible: element.chartshow,
          });
        }
      });
    },
  },
  computed: {
    //计算属性 取存在状态库中的值
    ...mapGetters(["chartSet"]), //
  },
  watch: {
    options: {
      handler(newVal) {
        //遍历判断 若都没有则返回-1
        this.nomore = newVal.findIndex(function (value, index, arr) {
          return value.chartshow == false; //判断条件
        });
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss">
.selected {
  display: flex;
  align-items: center;
  font-size: 15px;
  height: 30px;
  border-bottom: 1px solid #bdbdbd;
}
.selected:hover {
  background-color: #f3eaea;
  cursor: pointer; //鼠标形状变小手
}
</style>

