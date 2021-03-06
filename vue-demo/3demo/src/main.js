// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from "./store/index";

Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: {App},
//   template: '<App/>',
//   store,// 所有组件对象多一个属性 $store
//
// })

new Vue({
  el: '#app',
  // 渲染函数
  render: h => h(App),
  store,// 所有组件对象多一个属性 $store
})
