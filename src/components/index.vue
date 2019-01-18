<template>
  <div class="app-warpper">
    <!-- 头 -->
    <div class="app-header">
				<div class="logo">
					<img src='../static/img/hunau.png' alt=""/>
				</div>
				<div class="heading">融媒体综合数据平台</div>
				<div class="bar">

					<i><img src='../static/img/uesrname.png' alt="" /></i>
					<span>欢迎您</span><em>|</em><span>施景程</span>
					<button class="logout_btn">退出</button>
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
export default {
  name: 'index',
  data () {
    return {
      
    }
  },
  components: {
        Slide, // Register your component
        mainview
    }//注册组件
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
