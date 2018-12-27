import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/home'
import Login from '@/view/login'
import Gexing from '@/view/gexing'
import Zhubo from '@/view/zhubo'
import Tuijian from '@/view/tuijian'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/gexing',
      name: 'Gexing',
      component: Gexing,
      children:[
        {
          path: '/zhubo',
          name: 'Zhubo',
          component: Zhubo
        },
        {
          path: '/tuijian',
          name: 'Tuijian',
          component: Tuijian
        }
      ]
    },
    
  ]
})
