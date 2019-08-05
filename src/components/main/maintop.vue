<template>
    <div class="app-header">
				<el-menu :default-active="pid" class="el-menu-demo" mode="horizontal" background-color="#001931" text-color="#fff" active-text-color="#409EFF">
            <el-menu-item index="1" @click="open('/index/mainview')" >
                  <span slot="title">应急广播数据可视化</span>
            </el-menu-item>
          <el-submenu index="2">
            <template slot="title">村务信息展示</template>
              <el-menu-item index="2-1" @click="open('/index/villageindex')">
                <span slot="title">村务宝典 </span>
              </el-menu-item>
              <el-menu-item index="2-2" @click="open('/index/villageview')">
                <span slot="title">村务数据可视化 </span>
              </el-menu-item>
          </el-submenu>
            <el-menu-item index="3" @click="open('/index/Iotview')">
                  <span slot="title">山洪灾害数据可视化</span>
            </el-menu-item>
        </el-menu>
				<div class="heading">农村信息综合数据展示平台</div>
				<div class="bar">
         <!-- <el-tooltip effect="dark" :content="isdisplay?'隐藏图表':'显示图表'"  placement="bottom">
            <div class="top-bar__item">
              <i @click="handledisplay">
                <img height="20" width="20" src='../../static/img/display.png' alt="" />
              </i>
            </div>
          </el-tooltip>--> 
          <el-tooltip effect="dark" :content="isFullScren?'退出全屏':'全屏'" placement="bottom">
            <div class="top-bar__item">
              <i :class="isFullScren?'icon-tuichuquanping':'icon-quanping'"
                @click="handleScreen">
                <img height="20" width="20" src='../../static/img/quanping.png' alt="" />
              </i>
            </div>
          </el-tooltip>
          <el-tooltip effect="dark" content="特色主题" style="font-size: 25px;" placement="bottom">
            <div class="top-bar__item top-bar__item--show">
              <mapTheme></mapTheme>
            </div>
          </el-tooltip>
         
					<i><img  src='../../static/img/uesrname.png' alt="" /></i>
					<span>欢迎您</span> <em>|</em><span>程程</span>
					<button class="logout_btn" ><router-link to="/">首页</router-link></button>
				</div>
    </div>
</template>

<script>
import mapTheme from "./map-theme";
import { mapGetters } from 'vuex';
import { fullscreenToggel, listenfullscreen } from "@/util/util";
let moment = require("moment");//直接引入组件
export default {
  name: 'maintop',
  data () {
    return {
      ndata:{year:'',day:'',week:''},
      pid:this.id+"" //菜单栏定位
    }
  },
  props:['id'],
  components: {mapTheme},//注册组件
  methods:{
    login:function(){
        window.location.href="http://110.53.162.165:5050/"
    },
    getTime(){
      let week = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六']//把一周七天用数组的形式方便获取时间索引
      this.ndata.year = moment().format(" YYYY-MM-DD")    //这里是库中已经声明好了的时间格式，具体的可以去官方文档查看
      this.ndata.day = moment().format("HH:mm:ss")
      this.ndata.week = week[moment().format("d")]        //因为需求要展示的是中文的星期几，所以这里对week进行了处理，加了个索引
    },
    LopTime(){
      //setInterval(this.getTime,1000)   //对获取的时间，用定时器让它动起来，定时器中调用getTime方法，注意不能加（），调用函数
    },
    handleScreen () { //全屏
      fullscreenToggel();
    },
    setScreen () {
      this.$store.commit("SET_FULLSCREN");
    },
    handledisplay(){
      this.$store.commit("SET_DISPLAY");
    },
    open (menupath) {

      this.$router.push(menupath)
    }
    

  },
  computed:{
    ...mapGetters(["isFullScren"]),
    ...mapGetters(["isdisplay"]),
  },
  mounted:function(){//页面初始化函数
      //this.LopTime();
      listenfullscreen(this.setScreen); 
  }
}
</script>


