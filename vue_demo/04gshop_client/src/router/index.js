import Vue from 'vue'
import VueRouter from 'vue-router'


import MSite from "../views/MSite/MSite";
import Order from "../views/Order/Order";
import Profile from "../views/Profile/Profile";
import Search from "../views/Search/Search";


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/msite'
    },
    {
        path: '/msite',
        component: MSite,
        // 此时的Msite等都是返回路由组件的函数，只有请求对应的路由路径时(第一次)才会执行此函数并加载路由组件
        // 标识此路由是否显示FooterGuide
        meta: {
            showFooter: true
        }
    },
    {
        path: '/search',
        component: Search,
        meta: {
            showFooter: true
        }
    },
    {
        path: '/order',
        component: Order,
        meta: {
            showFooter: true
        }
    },
    {
        path: '/profile',
        component: Profile,
        meta: {
            showFooter: true
        }
    },

]

const router = new VueRouter({
    //  去掉地址中的哈希#
    mode: 'history',
    routes
})

export default router
