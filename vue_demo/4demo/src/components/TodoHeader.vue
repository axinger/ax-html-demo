<template>

  <div class="todo-header">
    <input class="search" type="text" placeholder="请输入任务名称" v-model="title" @keyup.enter="addItem">
  </div>

</template>

<script>
import PubSub from 'pubsub-js'
import {PubSubKeyTodo} from '../util/pubsubKey';

export default {
  data() {
    return {
      title: '',

    }
  },
  props: {
    addTodo: Function,
  },
  methods: {
    addItem() {

      const title = this.title.trim()
      //1. 检查输入合法性
      if (!title) {
        alert('必须输入')
        return
      }

      // 2. 根据输入生成一个todo对象
      const todo = {
        title,
        complete: false,
      }
      // 3.添加到todos,父组件传值

      // this.addTodo(todo)
      //使用自定义绑定事件,触发自定义事件
      // this.$emit('addTodo',todo)
      // 使用发布消息
      PubSub.publish(PubSubKeyTodo,todo)
      // 4.清除输入
      this.title = ''
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
