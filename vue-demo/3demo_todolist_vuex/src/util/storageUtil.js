/**
 * 1 函数
 * 2 对象
 * 暴露1个功能用函数
 * 多个功能,用对象
 */
const TODOS_KEY = 'todos_key'
export default {

  setTodos(todos) {
    window.localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
  },

  getTodos() {
    return JSON.parse(window.localStorage.getItem(TODOS_KEY) || '[]')
  }

}
