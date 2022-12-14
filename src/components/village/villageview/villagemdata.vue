<template>
  <div class="party-data">
    <div class="partytable">
      <h3 class="partyd_name">村民总数</h3>
      <i class="partyd_num">{{ vmdata.vsum }}</i>
    </div>

    <div class="partytable">
      <h3 class="partyd_name">村民男性数</h3>
      <i class="partyd_num">{{ vmdata.vman }}</i>
    </div>

    <div class="partytable">
      <h3 class="partyd_name">村民女性数</h3>
      <i class="partyd_num">{{ vmdata.vwoman }}</i>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "partymdata",
  data() {
    return {
      vmdatas: [],
      vmdata: { varea: "", vsum: 0, vman: 0, vwoman: 0 },
    };
  },
  methods: {
    getPartydata: function () {
      this.$http.get("api/count/p_m").then(
        function (res) {
          this.vmdata.vsum = res.data.data[0].msum;
          this.vmdata.vman = res.data.data[0].mman;
          this.vmdata.vwoman = res.data.data[0].mwoman;
          console.log(res.data.data);
        },
        function () {
          console.log("请求失败处理");
        }
      );
      this.$http.get("api/count/mSort").then(
        function (res) {
          for (let i = 0; i < res.data.data.length; i++) {
            const mdata = {
              marea: res.data.data[i].marea,
              msum: res.data.data[i].msum,
              man: res.data.data[i].man,
              woman: res.data.data[i].woman,
            };
            this.vmdatas.push(mdata);
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
    ...mapGetters(["selectplace"]),
    listenselectplace() {
      //返回状态库中的值
      return this.selectplace;
    },
  },
  watch: {
    listenselectplace: function (vag) {
      //实时监听状态库中值的改变

      for (let i = 0; i < this.vmdatas.length; i++) {
        if (vag == this.vmdatas[i].marea) {
          this.vmdata.vsum = this.vmdatas[i].msum;
          this.vmdata.vman = this.vmdatas[i].man;
          this.vmdata.vwoman = this.vmdatas[i].woman;
        }
      }
      if (vag == "") {
        this.getPartydata();
      }
    },
  },
  mounted: function () {
    //页面初始化函数
    this.getPartydata();
  },
};
</script>

<style lang="scss" scoped>
.party-data {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  text-align: center;
  height: 8vh;
}
.partytable {
  position: relative;
  top: 2vh;
  height: 6vh;
  width: 32%;
  background: rgba(0, 0, 0, 0.2);
  line-height: 6vh;
  .partyd_name {
    display: inline-block;
    color: white;
  }
  .partyd_num {
    text-align: center;

    font-style: normal;
    color: yellow;
    font-size: 1.3rem;
  }
}
</style>

