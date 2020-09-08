import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect: { name: 'Home' }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/sort',
    name: 'Sort',
    component: () => import('@/views/sort'),
  }, {
    path: '/cart',
    name: 'Cart',
    component: () => import('@/views/cart')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/views/profile')
  },
  {
    path: '/novel',
    name: 'Novel',
    component: () => import('@/views/sort/novel')
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('@/views/sort/detail')
  }
]
const router = new VueRouter({
  routes
})

export default router
