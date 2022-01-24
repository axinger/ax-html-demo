<template>
  <div class="todo-footer">
    <div class="item-left">
      <input type="checkbox" v-model="isSelectAl" :disabled="isDisabled"/>&nbsp;&nbsp;<span>已完成{{
        countSize
      }}/全部{{ todos.length }}</span>
    </div>
    <div class="item-right">
      <button type="button" id="do-action"
              @click="deleteSelect"
              v-show="countSize>0">清除已经完成任务
      </button>
    </div>
  </div>
</template>

<script>
export default {

  props: {
    todos: Array,
    deleteSelect: Function,
    selectAll: Function,
  },
  computed: {

    countSize() {
      return this.todos.reduce((total, todo) => total + (todo.complete ? 1 : 0), 0)
    },
    isSelectAl: {
      get() {
        return this.countSize == this.todos.length && this.countSize > 0
      },
      set(val) {
        this.selectAll(val)
      },
    },

    isDisabled() {
      return !(this.todos.length > 0);

    }

  },
  methods: {},
}
</script>

<style scoped>

.todo-footer {
  /*color: red;*/
  /*font-size: 30px;*/
  /*justify-content: space-between;*/
  width: 100%;

  display: inline-block;

  position: relative;
}

.item-left {
  float: left;
}

.item-right {
  float: right;
}

#do-action {
  background-color: red;
  color: white;
  padding: 0px 10px 0px 10px;
  text-align: right;
  alignment: right;
}
</style>
