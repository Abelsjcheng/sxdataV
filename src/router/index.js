import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/mainview', //登录加载mainview
      component: index,
      children: [{
          path: 'village',
          name: 'villagemain',
          component: () =>
              import (  '@/components/village/villagemain')  //路由跳转
      }, {
          path: 'mainview',
          name: 'mainview',
          component: () =>
              import (  '@/components/main/mainview')
      }]
    }
  ]
})
