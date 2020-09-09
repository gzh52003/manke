import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Home from '../views/home'
import request from '../utils/request';
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect: { name: 'Home' }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/sort',
    name: 'Sort',
    component: () => import('@/views/sort'),
    meta: {
      title: '分类'
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('@/views/cart'),
    meta: {
      title: '购物车',
      requiresAuth: true
    }

  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/views/profile'),
    meta: {
      title: '我的',
      requiresAuth: true
    }
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('@/views/detail'),
    meta: {
      title: '详情'
    }
  },
  
  {
    path: '/novel',
    name: 'Novel',
    component: () => import('@/views/sort/novel'),
    meta: {
      title: '商品列表'
    }
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('@/views/cart/order.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login'),
  },

  {
    path: '/reg',
    name: 'Reg',
    component: () => import('@/views/login/reg')
  },
  {
    path: '/edit',
    name: 'Edit',
    component: () => import('@/views/profile/edit')
  },
  {
    path: '/address',
    name: 'Address',
    component: () => import('@/views/profile/address')
  },
  {
    path: '/addressEdit',
    name: 'AddressEdit',
    component: () => import('@/views/profile/addressEdit')
  }



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

router.beforeEach((to, from, next) => {
  store.commit('changeTitle', to.meta.title)
  next()

  if (to.matched.some(item => item.meta.requiresAuth)) {
    let userInfo = localStorage.getItem('currentUser') || {};
    try {
      userInfo = JSON.parse(userInfo);
    } catch (err) {
      userInfo = {};
    }
    // 判断当前用户信息是否包含token
    if (userInfo.authorization) {
  
      // 发起请求校验token的有效性
      request.get('/jwtverify', {
        params: {
          authorization: userInfo.authorization
        }
      }).then(({ data }) => {
        if (data.code === 0) {
          next({
            path: '/login',
            query: {
              // 跳转到登录页面，并传递目标页面路径
              redirectTo: to.fullPath
            }
          });
        }
      })
      next();
    } else {
      next({
        path: '/login',
        query: {
          // 跳转到登录页面，并传递目标页面路径
          redirectTo: to.fullPath
        }
      })
    }
  } else {
    next();
  }
})

// 判断目标路由是否需要登录才可访问
// if(to.meta.requiresAuth){

export default router
