// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from "./util/store";
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {App},
  template: '<App/>',
  router,
  store,// 所有组件对象多一个属性 $store

})
