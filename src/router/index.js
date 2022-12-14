import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index/index'
import login from '@/page/index/login2'//登录页面（测试页）
Vue.use(Router)

export default new Router({
  //base:'/sxdataV/',//部署到tomcat
  routes: [

    {                     //一级url路径
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/index',    //一级url路径
      name: 'index',
      redirect: '/index/mainview', //登录加载mainview
      component: index,
      props: (route) => { //接收参数
        return {
          id: route.query.id
        }
      },
      children: [
        {
          path: 'villageindex',  //二级url路径
          name: 'villageindex',
          component: () =>
            import('@/page/village/villageindex')  //路由跳转 懒加载
        }, {
          path: 'villageview',  //二级url路径
          name: 'villageview',
          component: () =>
            import('@/page/village/villageview')  //路由跳转
        }, {
          path: 'mainview', //二级url路径
          name: 'mainview',
          component: () =>
            import('@/page/broad/broadview')
        }, {
          path: 'Iotview',  //二级url路径
          name: 'Iotmain',
          component: () =>
            import('@/page/iot/iotview')
        }]
    },

  ]
})
