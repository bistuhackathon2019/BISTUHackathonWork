import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/Home'
import Register from '@/views/register/Register'
import Login from '@/views/login/Login'
import Detail from '@/views/detail/Detail'
import Publish from '@/views/publish/Publish'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/publish',
      name: 'publish',
      component: Publish
    }
  ]
})
