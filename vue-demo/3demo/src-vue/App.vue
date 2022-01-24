<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!--     传递函数 -->
      <!--      <TodoHeader :addTodo="addTodo"/>-->
      <!--      自定义绑定事件,用来传参 props 加强版,绑定事件,常用方式,父子传值,不使用爷孙传值-->
      <!--      <TodoHeader @addTodo="addTodo"/>-->
      <!--      不常用方式, ref 取名字-->
      <TodoHeader ref="header"/>
      <TodoList :todos="todos" :deleteTodo="deleteTodo"/>
      <TodoFooter :todos="todos" :deleteSelect="deleteSelect" :selectAll="selectAll"/>

      <!--      <todo-footer/> // 驼峰引入标签-->

      <!--      slot 复用标签-->
      <TodoFooter2>
        <!--         v-model="isSelectAl" 这些属性,都要在这个页面写-->
        <input type="checkbox" slot="checkAll"/>
      </TodoFooter2>

      <TestAxios />
      <Search />
      <SearchResult />
      <hr>
      <h2>路由</h2>
      <DemoRoute />

      <hr>
      <h2>vuex</h2>
      <TestVuex />
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
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";
import TodoFooter2 from "./components/TodoFooter2.vue";
import PubSub from 'pubsub-js'
import {PubSubKeyTodo} from './util/pubsubKey';
import storageUtil from "./util/storageUtil";
import TestNet from "./components/TestNet";
import Search from "./components/Search";
import SearchResult from "./components/SearchResult";
import DemoRoute from "./components/TestRouter/DemoRoute";
import TestVuex from "./components/TestVuex";

export default {
  // 映射标签
  components: {
    TodoHeader,
    TodoList,
    TodoFooter,
    TodoFooter2,
    // 比如 Main 标签html关键字,这里取别名
    TestAxios : TestNet ,
    Search,
    SearchResult,
    DemoRoute,
    TestVuex
  },
  data() {
    // 不使用return包裹的数据会在项目的全局可见，会造成变量污染；
    // 使用return包裹后数据中变量只在当前组件中生效，不会影响其他组
    return {
      //从本地缓存读取
      // 深度监听
      todos: storageUtil.getTodos(),
      // todos: [
      //   {title: '吃饭', complete: false},
      //   {title: '睡觉', complete: false},
      //   {title: '打游戏', complete: false},
      // ],
    }
  },
  /// 初始化...
  mounted() {// 执行异步代码
    console.log('mounted> 初始化')
    //2. 绑定监听事件方式,TodoHeader @todo事件监听
    // this.$refs.header.$on('addTodo', this.addTodo)

    //3. 订阅消息方式,子孙组件合适
    PubSub.subscribe(PubSubKeyTodo, (msg, data) => {
      console.log('订阅消息'+msg+JSON.stringify(data))
      this.todos.unshift(data)
    })

    //4 slot 通信,传标签

  },
  watch: {

    todos: {
      // 深度监听
      deep: true,
      // handler: function (newVal, oldVal) {
      //   console.log('数组深度监听')
      //   storageUtil.setTodos(newVal)
      // },

      handler: storageUtil.setTodos,
    },
  },


  methods: {
    addTodo(todo) {
      this.todos.unshift(todo)
    },
    deleteTodo(index) {
      this.todos.splice(index, 1)
    },

// 删除选中的
    deleteSelect() {
      this.todos = this.todos.filter(todo => !todo.complete)
    },
    // 全选,全不选
    selectAll(flag) {
      this.todos.forEach(todo => todo.complete = flag)
    },


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
