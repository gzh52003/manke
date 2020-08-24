import Vue from 'vue';

// 1. 引入Vue-Router
import VueRouter from 'vue-router'


import Home from '../pages/Home.vue'

import User from '../pages/user/Default.vue'
import UserList from '../pages/user/List.vue'
import ManagerList from '../pages/user/Manager.vue'
import UserEdit from '../pages/user/Edit.vue'
import ManagerEdit from '../pages/user/MEdit.vue'

import Order from '../pages/Order.vue'
import Goods from '../pages/Goods.vue'
import Login from '../pages/Login.vue'
import NotFound from '../pages/NotFound.vue'


// 2. 使用VueRouter
Vue.use(VueRouter)

// 3. 实例化并配置参数
const router = new VueRouter({
    routes: [
        {
            path: '/', 
            redirect: '/login'
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: '/user',
                    component: User,
                    children: [
                        // 进入用户管理页面直接跳到用户列表
                        {
                            path: '',
                            redirect: 'list'
                        }, {
                            path: 'managerList',
                            component: ManagerList
                        }, {
                            path: 'userList',
                            component: UserList
                        }, {
                            name: 'userEdit',
                            path: 'edit/:id',
                            component: UserEdit
                        },{
                            name: 'managerEdit',
                            path: 'medit/:id',
                            component: ManagerEdit
                        }
                    ]
                },
                {
                    path: '/order',
                    component: Order
                },
                {
                    path: '/goods',
                    component: Goods
                },
                {
                    path: '/404',
                    component: NotFound
                },

                // 404页面效果
                {
                    path: '*',
                    redirect: '/404'
                }
            ]
        },
        {
            path: '/login',
            component: Login
        },
    ]
})
export default router;
