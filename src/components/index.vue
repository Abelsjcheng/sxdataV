<template>
  <div class="avue-contail">
    <div class="app-header">
				<div class="logo">
					<img src='../static/img/hunau.png' alt=""/>
				</div>
				<div class="heading">长沙县农村信息化综合服务平台</div>
				<div class="bar">

					<i><img src='../static/img/uesrname.png' alt="" /></i>
					<span>欢迎您</span><em>|</em><span>施景程</span>
					<button class="logout_btn">退出</button>
				</div>
    </div>    
    <Slide width="200" >
      <a id="home" href="#">
        <span>首页</span>
      </a>
      
    </Slide>  
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
    }
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

.avue-contail /deep/ .bm-burger-bars {
    background-color: #ffffff;
  }
.avue-contail /deep/ .bm-burger-button {
    top:25px;
  }
</style>
