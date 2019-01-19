<template>
  <div class="app-warpper">
    <!-- 头 -->
    <div class="app-header">
				<div class="logo">
					<img src='../static/img/hunau.png' alt=""/>
          
				</div>
        <div class="tab-time">
          <span >{{ndata.day}} </span>
          <span style="font-size:16px;">{{ndata.year}} {{ndata.week}}</span>
        </div>
				<div class="heading">融媒体综合数据平台</div>
				<div class="bar">
           
					<i><img src='../static/img/uesrname.png' alt="" /></i>
					<span>欢迎您</span><em>|</em><span>施景程</span>
					<button class="logout_btn" v-on:click="login">登录</button>
				</div>
    </div>   
    <!-- 菜单 
    <Slide width="200" Animations="ScaleRotate" >
      <a id="home" href="#">
        <span>首页</span>
      </a>
    </Slide>  
    -->
     <!-- 主体视图层 -->
    <mainview />      
  </div>
</template>

<script>
import { Slide } from 'vue-burger-menu'
import mainview from './main/mainview'
let moment = require("moment");//直接引入组件
export default {
  name: 'index',
  data () {
    return {
      ndata:{year:'',day:'',week:''}
    }
  },
  components: {
        Slide, // Register your component
        mainview
    },//注册组件
    methods:{
    login:function(){
        window.location.href="http://www.teavamc.com/"
    },
    getTime(){
      let week = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六']//把一周七天用数组的形式方便获取时间索引
      this.ndata.year = moment().format(" YYYY-MM-DD")    //这里是库中已经声明好了的时间格式，具体的可以去官方文档查看
      this.ndata.day = moment().format("HH:mm:ss")
      this.ndata.week = week[moment().format("d")]        //因为需求要展示的是中文的星期几，所以这里对week进行了处理，加了个索引
    },
    LopTime(){
      setInterval(this.getTime,1000)   //对获取的时间，用定时器让它动起来，定时器中调用getTime方法，注意不能加（），调用函数
    }

  },
  mounted:function(){//页面初始化函数
      this.LopTime();
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.app-warpper /deep/ .bm-burger-bars {
    background-color: #ffffff;
  }
.app-warpper /deep/ .bm-burger-button {
    top:25px;
  }
	
		
</style>
