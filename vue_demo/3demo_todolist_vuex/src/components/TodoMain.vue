<template>
  <ul class="todo-main">

    <ul class="list-group">

      <TodoItem v-for="(item,index) in todos" :key="index" :todo="item" :index="index"/>
    </ul>


  </ul>
</template>

<script>

import {mapState} from "vuex";
import TodoItem from "./TodoItem";
import storageUtil from "../util/storageUtil";

export default {

  computed:{
    ...mapState(['todos']),
  },

  watch: {
/// 这个todos ,就是  ...mapState(['todos']), 里面的
    todos: {
      // 深度监听
      deep: true,
      handler: storageUtil.setTodos,
    },
  },
  // 映射标签
  components: {
    TodoItem,
  }
}
</script>

<style scoped>

.todo-main {
  color: red;
  font-size: 30px;
}
</style>
