<template>
  <div style="position: relative">
    <div class="vii_modtitle">公告</div>
    <el-table :data="tableData" height="420">
      <el-table-column prop="date" width="160"> </el-table-column>
      <el-table-column prop="title" label="公告">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top" width="300">
            <p>{{ scope.row.type }}</p>
            <p>{{ scope.row.title }}</p>
            <div class="d-block text-center">
              <h4 v-html="scope.row.content"></h4>
            </div>
            <h6 style="text-align: right">
              {{ scope.row.date }} {{ scope.row.adduname }}
            </h6>
            <div slot="reference" class="name-wrapper">
              <span size="medium">{{ scope.row.title }}</span>
            </div>
          </el-popover>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      tableData: [],
    };
  },
  methods: {
    getpolicyinfo: function (selectaid) {
      this.$http.get("api/policy/infoAll").then(
        function (res) {
          for (let i = 0; i < res.data.data.length; i++) {
            if (res.data.data[i].aid == selectaid) {
              const info = {
                title: res.data.data[i].title,
                type: res.data.data[i].type,
                date: res.data.data[i].reldate,
                content: res.data.data[i].content,
                uname: res.data.data[i].uname,
                pic: res.data.data[i].pic,
              };
              this.tableData.push(info); //存入json数组
            }
          }
        },
        function () {
          console.log("请求失败处理");
        }
      );
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
    this.getpolicyinfo(this.selectaid);
  },
};
</script>

