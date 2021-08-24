import {ADD_TODO, DELETE_ALl_SELECT, DELETE_TODO, RECEIVE_TODOS, SELECT_ALL_TODOS} from "./mutations-types";
import storageUtil from "../util/storageUtil";

export default {

  // 异步获取数据,初始化
  reqTodos({commit}) {
    setTimeout(() => {
      const todos = storageUtil.getTodos()
      commit(RECEIVE_TODOS, {todos})
    }, 1000)
  },

  addTodo({commit}, todo) {
    commit(ADD_TODO, {todo})
  },

  deleteTodo({commit}, index) {
    commit(DELETE_TODO, {index})
  },

  selectAllTodos({commit}, flag) {
    commit(SELECT_ALL_TODOS, {flag})
  },

  deleteAllSelect({commit}) {
    commit(DELETE_ALl_SELECT)
  },

}