// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from "./util/store";

Vue.config.productionTip = false

import {Button as elmButton} from 'mint-ui';
import 'mint-ui/lib/style.css'

Vue.component(elmButton.name, elmButton);


import {Button as antButton} from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

Vue.component(antButton.name, antButton);


/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: {App},
    template: '<App/>',
    router,
    store,// 所有组件对象多一个属性 $store

})
