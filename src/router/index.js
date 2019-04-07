import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import loginview from '@/components/login/loginview'
Vue.use(Router)

export default new Router({
  //base:'/dist/',//部署到tomcat
  routes: [
    
    {
      path: '/',
      name: 'login',
      component: loginview
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
              import (  '@/components/village/villagemain')  //路由跳转
      }, {
          path: 'mainview',
          name: 'mainview',
          component: () =>
              import (  '@/components/main/mainview')
      }, {
        path: 'Iotview',
        name: 'Iotmain',
        component: () =>
            import (  '@/components/Iot/Iotmain')
    }]
    },
    
  ]
})
