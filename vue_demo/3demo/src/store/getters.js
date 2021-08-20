export default {

  totalCount(state) {
    return state.todos.length
  },
  selectCount(state) {
    return state.todos.reduce((total, todo) => {
      return total + (todo.complete ? 1 : 0)
    }, 0)
  },

  // 判断是否全部选中
  isAllSelect(state,getters){
    return getters.selectCount === getters.totalCount && getters.selectCount > 0
  },

  isDisabled(state,getters) {
    console.log('isDisabled='+getters.totalCount > 0)
    return !(getters.totalCount > 0);
  }
}
