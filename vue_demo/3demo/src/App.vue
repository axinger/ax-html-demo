<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader/>
      <TodoMain/>
      <TodoFooter/>
    </div>
  </div>
</template>

<!--
绑定事件监听
触发事件

订阅消息
发布消息
-->


<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoMain from "./components/TodoMain.vue";
import Footer from "./components/TodoFooter.vue";

export default {
  // 映射标签
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter:Footer,
  },

  /// 初始化...
  mounted() {// 执行异步代码
    this.$store.dispatch('reqTodos')

  },
}
</script>

<style scoped>
.todo-container {
  background-color: orangered;
  text-align: center;
  margin: 50px 100px 100px 100px;
}

.todo-wrap {
  background-color: aqua;

  padding: 20px 40px 40px 40px;
}
</style>
