<template>
  <div style="position: relative; height: 100%">
    <div class="modtitle">党员活动</div>
    <div style="margin-top: 23.5px">
      <item v-for="item of infolist" :key="item.id" v-bind:item="item" />
      <el-pagination
        style="position: absolute; bottom: 22px; right: 0px"
        @current-change="handleCurrentChange"
        current-page.sync="pageNo"
        :page-size="pageSize"
        layout="total,prev, pager, next"
        :total="tableData.length"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import item from "./item.vue";
import virtualList from "vue-virtual-scroll-list";

export default {
  name: "demo",
  data() {
    return {
      tableData: [],
      pageNo: 1, //当前页码
      pageSize: 8, //每页数
      infolist: [],
    };
  },
  components: { item, virtualList },
  methods: {
    getPhddata: function (selectaid) {
      var j = 0;
      this.$http.get("api/party/hdAll").then(
        function (res) {
          for (let i = 0; i < res.data.data.length; i++) {
            if (res.data.data[i].aid == selectaid) {
              j = j + 1;
              const info = {
                id: "hd",
                date: res.data.data[i].hdadddate, //日期
                title: res.data.data[i].hdtitle, //标题
                hdtype: res.data.data[i].hdtype, //类型
                hdloc: res.data.data[i].hdloc, //地点
                hdnum: res.data.data[i].hdnum, //人数
                hdbtime: res.data.data[i].hdbtime, //活动开始时间
                hdetime: res.data.data[i].hdetime, //活动结束日期
                content: res.data.data[i].hdsum, //活动简介
                hdpic: res.data.data[i].hdpic, //活动图片
                uname: res.data.data[i].uname, //信息发布人
              };

              this.tableData.push(info); //存入json数组
              if (j <= this.pageSize) {
                this.infolist.push(info);
              }
            }
          }
        },
        function () {
          console.log("请求失败处理");
        }
      );
    },
    handleCurrentChange(val) {
      this.infolist = [];
      if (val * this.pageSize - this.tableData.length > 0) {
        for (
          let i = (val - 1) * this.pageSize;
          i < this.tableData.length;
          i++
        ) {
          this.infolist.push(this.tableData[i]);
        }
      } else {
        for (let i = (val - 1) * this.pageSize; i < val * this.pageSize; i++) {
          this.infolist.push(this.tableData[i]);
        }
      }
    },
  },
  computed: {
    //计算属性 取存在状态库中的值
    ...mapGetters(["selectaid"]),
    listenselectaid() {
      return this.selectaid;
    },
  },
  watch: {
    listenselectaid(vag) {},
  },
  mounted: function () {
    this.getPhddata(this.selectaid);
  },
};
</script>
<style lang="scss">
.item_title {
  color: white;
  height: 20px;
}
</style>
