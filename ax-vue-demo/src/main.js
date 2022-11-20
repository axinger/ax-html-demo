import Vue from 'vue'
import App from './App.vue'
import '../plugins/element.js'
import 'font-awesome/css/font-awesome.min.css'
import axios from 'axios'
import router from './router'
Vue.prototype.axios = axios //挂载到原型,就可以在全局使用
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')