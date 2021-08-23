/**
 * 路由器模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'
import Message from "../views/Message";
import News from "../views/News";
import MsgDetail from "../views/MsgDetail";

Vue.use(VueRouter)

// 定义,注册路由
export default new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home,
      children:[
        {
          // path:'/news',// path 最左侧永远代表根路径,所以省略/根路径
          path:'news',
          component:News
        },
        {
          path:'message',
          component:Message,
          children:[{
            // 路由传参
            path:'detail/:id',
            component:MsgDetail
          }]
        },
        {
          path:'',
          redirect:'news'
        }

      ]
    },
    {
      path: '/about',
      component: About
    },
    {
      path:'/',
      redirect:'/home'
      // redirect:'/about'
    }
  ]
})
