// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Resource from 'vue-resource'
import './styles/common.scss';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import ECharts from 'vue-echarts/components/ECharts'
import 'echarts/lib/component/toolbox'
import 'echarts/lib/component/dataZoom'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/radar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/chart/graph'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/title.js'
import 'echarts-gl'
import 'babel-polyfill'
import axios from 'axios'
import FlatSurfaceShader from 'vue-flat-surface-shader'//磁贴背景组建
// 引入拖拽工具
import BaiduMap from 'vue-baidu-map'
import store from './store';
Vue.config.productionTip = false

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'XU8pwlyFQKLtGHat8Fb98cbCh3ddCz2w'
})
Vue.component('v-chart', ECharts)

Vue.use(ElementUI)
Vue.use(Resource)
Vue.use(FlatSurfaceShader)
Vue.prototype.axios = axios;
/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App) //渲染首视图
}).$mount('#app') //挂载
