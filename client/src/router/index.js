import Vue from 'vue';

// 1. 引入Vue-Router
import VueRouter from 'vue-router'


import Home from '../pages/Home.vue'

import Manger from '../pages/Manger'
import User from '../pages/user/Default.vue'
import UserList from '../pages/user/List.vue'
import ManagerList from '../pages/Manger/Manger.vue'
import UserEdit from '../pages/user/Edit.vue'
import ManagerEdit from '../pages/Manger/MEdit.vue'
import Mine from '../pages/Mine.vue'
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
                    path:'/manger',
                    component:Manger,
                    children:[
                        {
                            path: 'manger',
                            component: ManagerList
                        }, 
                        {
                            name: 'managerEdit',
                            path: 'medit/:id',
                            component: ManagerEdit
                        }
                    ]
                },
                {
                    path: '/user',
                    component: User,
                    children: [
                        {
                            path: '',
                            redirect: 'list'
                        },{
                            path: 'List',
                            component: UserList
                        }, {
                            name: 'userEdit',
                            path: 'edit/:id',
                            component: UserEdit
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
                    path: '/mine',
                    component: Mine
                },
                {
                    path: '/404',
                    component: NotFound
                },
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
