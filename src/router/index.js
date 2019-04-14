import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index/index'
import login from '@/page/index/login'
Vue.use(Router)

export default new Router({
  //base:'/dist/',//部署到tomcat
  routes: [
    
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      redirect: '/index/mainview', //登录加载mainview
      component: index,
      children: [{
          path: 'village',
          name: 'villagemain',
          component: () =>
              import (  '@/page/village/villageview')  //路由跳转
      }, {
          path: 'mainview',
          name: 'mainview',
          component: () =>
              import (  '@/page/broad/broadview')
      }, {
        path: 'Iotview',
        name: 'Iotmain',
        component: () =>
            import (  '@/page/iot/iotview')
    }]
    },
    
  ]
})
