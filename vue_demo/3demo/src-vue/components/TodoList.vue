<template>
  <ul class="todo-main">

    <ul class="list-group">

      <TodoItem v-for="(obj,index) in todos" :key="index" :todo="obj" :deleteTodo="deleteTodo" :index="index"/>
    </ul>


  </ul>
</template>

<script>

import TodoItem from "./TodoItem";

export default {
  props: {
    todos: Array,
    deleteTodo:Function,
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
