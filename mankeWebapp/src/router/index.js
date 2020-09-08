import Vue from 'vue'
import VueRouter from 'vue-router'
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
    component: Home
  },
  {
    path: '/sort',
    name: 'Sort',
    component: () => import('@/views/sort'),
  }, 
  {
    path: '/cart',
    name: 'Cart',
    meta: {
      requiresAuth: true
    },
    component: () => import('@/views/cart')
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
  {
    path: '/profile',
    name: 'profile',
    meta: {
      requiresAuth: true
    },
    component: () => import('@/views/profile')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login'),
  },
 
  {
    path: '/reg',
    name: 'Reg',
    component: () => import('@/views/login/Reg')
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
]
const router = new VueRouter({
  routes
})

router.beforeEach(function (to, from, next) {
  // 判断目标路由是否需要登录才可访问
  // if(to.meta.requiresAuth){
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


});
export default router
