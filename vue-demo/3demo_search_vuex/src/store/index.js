import Vue from "vue";
import Vuex from "vuex";
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
// 声明使用
Vue.use(Vuex)


export default new Vuex.Store({

  state,//状态
  mutations,//包含多个更新state函数对象
  actions,//包含多个对应事件回调函数
  getters//包含多个getter计算属性

})

