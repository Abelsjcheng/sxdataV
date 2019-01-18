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
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/radar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/polar'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/title.js'
import BaiduMap from 'vue-baidu-map'
Vue.config.productionTip = false

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'XU8pwlyFQKLtGHat8Fb98cbCh3ddCz2w'
})
Vue.component('v-chart', ECharts)
Vue.use(ElementUI)
Vue.use(Resource)
Vue.use(BootstrapVue);
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
