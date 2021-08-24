<template>

  <div class="todo-header">
    <input class="search" type="text" placeholder="请输入任务名称" v-model="inputTodo" @keyup.enter="addItem">
  </div>

</template>

<script>

import {ADD_TODO} from "../store/mutations-types";

export default {
  data() {
    return {
      inputTodo: '',
    }
  },

  methods: {
    addItem() {

      const inputTodo = this.inputTodo.trim()
      //1. 检查输入合法性
      if (!inputTodo) {
        alert('必须输入')
        return
      }

      // 2. 根据输入生成一个todo对象
      const todo = {
        title: inputTodo,
        complete: false,
      }
      // 3.添加到todos,父组件传值
      this.$store.dispatch('addTodo', todo)
      // 4.清除输入
      this.inputTodo = ''
    },
  }

}
</script>

<style scoped>

.todo-header {
  background-color: plum;
  /*font-size: 30px;*/
  /*width: 100%;*/
}

.search {
  color: red;
  font-size: 30px;
  /*padding-left: 10px;*/
  /*padding-right: -10px;*/
  /*margin-left: 10px;*/
  width: 100%;
}

</style>
