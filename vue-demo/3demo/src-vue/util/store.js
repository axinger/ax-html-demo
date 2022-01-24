/**
 * vuex 核心管理对象模块
 */
import Vue from "vue";
import Vuex from "vuex";
// 声明使用
Vue.use(Vuex)


const state = {
  count: 0
}

const mutations = {

  add(state) {
    state.count++
  },
  reduce(state) {
    state.count--
  },

}
const actions = {

  add({commit, state},) {
    commit('add')
  },
  reduce({commit, state},) {
    commit('reduce')
  },
  addIfOdd({commit, state},) {
    if (state.count % 2 === 1) {
      commit('add')
    }
  },

  addAsync({commit, state},) {
    /// setTimeout：大家肯定都用过了，它的第一个参数是一个方法，传入的这个方法内部的this会被改写指向window（
    setTimeout(() => {
      commit('add')
    }, 1000)
  },

}
const getters = {
  evenOrOdd(state) {
    return state.count % 2 === 0 ? '偶数' : '奇数'
  }
}

export default new Vuex.Store({

  state,//状态
  mutations,//包含多个更新state函数对象
  actions,//包含多个对应事件回调函数
  getters//包含多个getter计算属性

})
