import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../components/Home.vue'
Vue.use(Router)


export default new Router({

    routes: [{
            path: '/home',
            // component: Home

            // //懒加载
            // component: () =>
            //     import ('@/components/Home')

            //异步组件
            component: resolve =>
                require(['@/components/Home'], resolve)
        }

    ],
    mode: 'history'

})