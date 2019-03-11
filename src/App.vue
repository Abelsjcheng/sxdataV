<template>
  <div id="app">
    <router-view/> <!-- 路由出口 --><!-- 路由匹配到的组件将渲染在这里 -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;

}
</style>
