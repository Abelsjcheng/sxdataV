<template>
<div class="app-warpper">
  <div id="page-wrap">
    <!-- 头 -->
     <maintop /> 
     <!-- 主体视图层 -->
    <div class="main overview">
      <keep-alive>
       <router-view  />  <!-- 第二层路由出口 keep-alive缓存-->
      </keep-alive>  
    </div>
  </div>
  <!-- 菜单 -->
  <ScaleDown width="300"  >
      <router-link to="/index/mainview">  <!-- 路由跳转 -->
        <span>广播信息展示</span>
      </router-link>
      <router-link to="/index/village"> 
        <span>村务信息展示</span>
      </router-link>
      <router-link to="/index/Iotview"> 
        <span>物联网信息展示</span>
      </router-link>
  </ScaleDown>  
  
</div>
</template>

<script>
import { ScaleDown } from 'vue-burger-menu'
import mainview from './main/mainview'
import maintop from "./main/maintop";
export default {
  name: 'index',
  components: {ScaleDown,mainview,maintop},//注册组件
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
