import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
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
    component: Home,
    meta:{
      title:'首页'
    }
  },
  {
    path: '/sort',
    name: 'Sort',
    component:()=>import('@/views/sort'),
    meta:{
      title:'分类'
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    component:()=>import('@/views/cart'),
    meta:{
      title:'购物车'
    }
    
  },
  {
    path: '/profile',
    name: 'Profile',
    component:()=>import('@/views/profile'),
    meta:{
      title:'我的'
    }
  },
  {
    path: '/detail',
    name: 'Detail',
    component:()=>import('@/views/detail'),
    meta:{
      title:'详情'
    }
  },



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

router.beforeEach((to,from,next)=>{
  if(to.meta.title="详情"){
    to.meta.title=""
  }
  store.commit('changeTitle', to.meta.title)
  next()
})
export default router
