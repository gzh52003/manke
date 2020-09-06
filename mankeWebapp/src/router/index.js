import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'

Vue.use(VueRouter)
const routes = [
  {
    path:'/',
    redirect:{name:'Home'}
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/sort',
    name: 'Sort',
    component:()=>import('@/views/sort')
  },
  {
    path: '/cart',
    name: 'Cart',
    component:()=>import('@/views/cart')
  },
  {
    path: '/profile',
    name: 'Profile',
    component:()=>import('@/views/profile')
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component:()=>import('../views/detail')
  },
  {
    path: '/order',
    name: 'order',
    component:()=>import('../views/cart/order.vue')
  },
  // {
  //   path: '/search',
  //   name: 'search',
  //   component:()=>import('@/views/search')
  // }


    // 路由按需引入(路由懒加载)
    // component:function(){
    //   return import('../views/About.vue')
    // }
    // component:()=>import('../views/Reg.vue')
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
