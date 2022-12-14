<template>
  <div class="item billState" style="width: 100%; height: 100%">
    <div class="itemTit">
      <span class="border-green">节目播出管理</span>
    </div>
    <div class="itemCon">
      <div class="StateBox">
        <div class="StateTit">
          <span>节目名称</span>
          <span>播出类型</span>
          <span>建立日期</span>
          <span>播出日期</span>
        </div>
        <div id="FontScroll">
          <ul class="line">
            <li v-for="item of tableData" :key="item.id">
              <div class="fontInner clearfix">
                <el-popover
                  placement="top-start"
                  title="节目名称"
                  width="200"
                  trigger="hover"
                  :content="item.pname"
                >
                  <span slot="reference" style="width: 100%">{{
                    item.pname
                  }}</span>
                </el-popover>

                <span>
                  <sup
                    v-bind:class="[
                      contentclass,
                      item.ptype == '正常播出单' ? normalclass : dangerclass,
                    ]"
                    >{{ item.ptype }}</sup
                  >
                </span>
                <span>{{ item.createtime }}</span>
                <span>{{ item.broaddate }}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contentclass: "el-badge__content",
      normalclass: "el-badge__content--normal", //正常播出单class
      dangerclass: "el-badge__content--danger", //紧急播出单class
      tableData: [],
    };
  },
  methods: {
    getprolist: function () {
      this.$http.get("api/prosin/proOne").then(
        function (res) {
          for (let i = 0; i < res.data.data.length; i++) {
            const info = {
              id: i,
              pname: res.data.data[i].pname,
              ptype: res.data.data[i].scategory,
              createtime: res.data.data[i].createtime,
              broaddate: res.data.data[i].broaddate,
            };
            this.tableData.push(info); //存入json数组
          }
        },
        function () {}
      );
    },
  },
  mounted: function () {
    this.getprolist();
  },
};
</script>


<style lang="scss" scoped>
.item {
  margin-bottom: 24px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1.5;
  font-family: Arial, "Microsoft Yahei";
}
.itemTit {
  padding: 12px 30px;
  border-bottom: 1px solid #1e5b6b;
}
.itemTit span {
  display: block;
  height: 12px;
  line-height: 20px;
  border-left: 5px solid transparent;
  font-size: 18px;
  color: #fff;
  padding-left: 8px;
}
.border-green {
  border-color: #32ffc7 !important;
}
.itemCon {
  padding: 12px 0px;
}
.billState .StateTit {
  height: 45px;
  border-bottom: 1px dashed #404040;
}
.billState .StateBox span:nth-child(1) {
  width: 26%;
}
.billState .StateBox span:nth-child(2) {
  width: 22%;
}
.billState .StateBox span:nth-child(3) {
  width: 33%;
}
.billState .StateBox span:nth-child(4) {
  width: 18%;
}
.billState .StateBox span {
  float: left;
  width: 25%;
  height: 36px;
  line-height: 37px;
  color: #fff;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; //溢出过滤
}
#FontScroll {
  height: 27.5vh;
  overflow: scroll;
  overflow-x: hidden;
}
ul {
  list-style: none;
  border: medium none;
  margin: 0;
  padding: 0;
  font-size: 100%;
  display: block;
  -webkit-margin-before: 0em;
  -webkit-margin-after: 0em;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
  -webkit-padding-start: 0px;
  // width:100%;
}
li {
  border: medium none;
  margin: 0;
  padding: 0;
  font-size: 100%;
  height: 36px;
  display: list-item;
  text-align: -webkit-match-parent;
}
.billState .StateBox .fontInner {
  border-bottom: 1px dashed #404040;
}
.el-badge__content {
  height: 22px;
  padding: 0 10px;
  border: none;
  margin-left: 8px;
  margin-top: 7px;
  border-radius: 10px;
  color: #fff;
  display: inline-block;
  font-size: 10px;
  line-height: 22px;
  text-align: center;
  white-space: nowrap;
}
.el-badge__content--danger {
  background-color: rgb(184, 23, 26);
}
.el-badge__content--normal {
  background-color: #258763;
}
sup {
  vertical-align: super;
  font-size: smaller;
}
</style>
