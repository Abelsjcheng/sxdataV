<template>
  <div class="item basicInfo" style="width: 100%; height: 100%">
    <div class="itemTit">
      <span class="border-green">广播终端数</span>
    </div>
    <div class="itemCon itembg">
      <div class="infoPie">
        <ul class="clearfix">
          <li class="color-yellow">
            <span class="border-yellow">{{ terdata.sum }}</span>
            <p>总终端总量</p>
          </li>
          <li class="color-green">
            <span class="border-green">{{ terdata.run }}</span>
            <p>终端设备运行数</p>
          </li>
          <li class="color-blue">
            <span class="border-blue">{{ terdata.down }}</span>
            <p>终端设备停止数</p>
          </li>
          <li class="color-purple">
            <span class="border-purple">{{ terdata.req }}</span>
            <p>终端设备维护数</p>
          </li>
        </ul>
        <div id="indicatorContainer"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "tabledata",
  data() {
    return {
      terdatas: [],
      terdata: { aname: "", sum: 0, run: 0, down: 0, req: 0 },
    };
  },

  methods: {
    getpreter: function () {
      //发送get请求 回传目前设备挂载总数,运行数，停止数
      this.$http.get("api/device/sumters").then(
        function (res) {
          this.terdata.sum = res.data.data.sum;
          this.terdata.run = res.data.data.run;
          this.terdata.down = res.data.data.down;
          this.terdata.req = res.data.data.req;
        },
        function () {
          console.log("请求失败处理");
        }
      );
    },
    getallters: function () {
      //发送get请求 获取按照终端地址进行运行状态的分组统计
      this.$http.get("api/device/sumtermSort").then(
        function (res) {
          for (let i = 0, len = res.data.data.length; i < len; i++) {
            const tdata = {
              aname: res.data.data[i].aname,
              sum: res.data.data[i].sum,
              run: res.data.data[i].run,
              down: res.data.data[i].down,
              req: res.data.data[i].req,
            };
            this.terdatas.push(tdata);
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
      for (let i = 0, len = this.terdatas.length; i < len; i++) {
        if (vag == this.terdatas[i].aname) {
          this.terdata = {
            aname: this.terdatas[i].aname,
            sum: this.terdatas[i].sum,
            run: this.terdatas[i].run,
            down: this.terdatas[i].down,
            req: this.terdatas[i].req,
          };
        }
        if (vag == "") {
          this.getpreter();
        }
      }
    },
  },
  mounted: function () {
    //页面初始化函数
    this.getpreter();
    this.getallters();
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
  height: 100%;
  font-family: Arial, "Microsoft Yahei";
}
.itemTit {
  padding: 12px 30px;
  border-bottom: 1px solid #1e5b6b;
}
.itemTit span {
  display: block;
  height: 15px;
  line-height: 20px;
  border-left: 5px solid transparent;
  font-size: 15px;
  color: #fff;
  padding-left: 8px;
  text-align: left;
}

.itembg {
  background-image: url(https://jsdaima.hu-cheng.net/2019/06/1289/images/gz.png);
  background-repeat: repeat;
  height: 80%;
}
.itemCon {
  padding: 0px 10px;
}
ul {
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
  width: 100%;
}
// Pseudo::before element
// .clearfix:before{
//   display:table;
//   line-height:0;
//   content:"";
// }
// Pseudo:after element
// .clear.fix:after{
//   clear:both;
// }
// .clearfix:after{
//   display:table;
//   line-height:0;
//   content:"";
// }
.infoPie ul li {
  float: left;
  width: 25%;
}

.color-yellow {
  color: #ffd220 !important;
}
.color-green {
  color: #32ffc7 !important;
}
.color-blue {
  color: #1eb6fe !important;
}
.color-purple {
  color: #7b68ee !important;
}
.li {
  border: medium none;
  margin: 0;
  padding: 0;
  font-size: 100%;
  display: list-item;
  text-align: -webkit-match-parent;
}
.infoPie ul li span {
  display: block;
  list-style: none;
  width: 70px;
  height: 70px;
  margin: auto;
  margin-top: 50%;
  border: 1px solid transparent;
  line-height: 70px;
  font-size: 29px;
  border-radius: 100%;
}

.border-green {
  border-color: #32ffc7 !important;
}
.border-yellow {
  border-color: #ffd220 !important;
}
.border-blue {
  border-color: #1eb6fe !important;
}
.border-purple {
  border-color: #7b68ee !important;
}

.infoPie ul li p {
  text-align: center;
  font-size: 13px;
  padding-bottom: 8px;
}
p {
  border: medium none;
  margin: 0;
  padding: 0;
  display: block;
  -webkit-margin-before: 1em;
  -webkit-margin-after: 1em;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
}
</style>