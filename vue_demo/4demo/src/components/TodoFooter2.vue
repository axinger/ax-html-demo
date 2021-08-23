<template>
  <div class="todo-footer2">
    <div class="item-left">

      <!--      使用slot 占位标签-->
      <label>
        <slot name="checkAll"></slot>
      </label>

      <span>
        <slot name="count"></slot>

      </span>

    </div>
    <div class="item-right">
      <slot name="delete"></slot>

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
