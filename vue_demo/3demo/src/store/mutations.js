import {ADD_TODO, DELETE_ALl_SELECT, DELETE_TODO, RECEIVE_TODOS, SELECT_ALL_TODOS} from "./mutations-types";

export default {

  [ADD_TODO](state, {todo}) {
    state.todos.unshift(todo)
    console.log('todo=' + JSON.stringify(state.todos))
  },

  [DELETE_TODO](state, {index}) {
    state.todos.splice(index, 1)
  },

  [SELECT_ALL_TODOS](state, {flag}) {

    state.todos.forEach(todo => todo.complete = flag)
  },

  [DELETE_ALl_SELECT](state) {

    state.todos = state.todos.filter(todo => !todo.complete)
  },

  [RECEIVE_TODOS](state, {todos}) {
    state.todos = todos
  }




}
