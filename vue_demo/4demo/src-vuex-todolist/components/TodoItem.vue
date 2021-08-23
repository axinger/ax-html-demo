<template>
  <!--
  鼠标监听
  onmouseenter
  onmousemove

  移入到子元素也触发
  onmouseover
  onmouseout

  -->
  <!--绑定css {}强制绑定-->
  <li @mouseenter="show(true)" @mouseleave="show(false)" :style="{background: bgColor}">
    <div class="item-left2">
      <label>
        <input type="checkbox" v-model="todo.complete"/>
        <span>{{ todo.title }}</span>
      </label>
      <button @click="deleteItem" v-show="isShow">删除</button>
    </div>
  </li>
</template>

<script>

export default {
  props: {
    todo: Object,
    index: Number,
  },

  data() {
    return {
      bgColor: 'white',
      isShow: false,
    }

  },
  methods: {


    deleteItem() {
      const {todo, index} = this
      // ` esc 的符号
      if (window.confirm(`确认删除${todo.title}坐标:${index}`)) {
        this.$store.dispatch('deleteTodo',index)
      }

    },
    show(flag) {

      if (flag) {
        this.bgColor = '#aaaaaa'
        this.isShow = true
      } else {
        this.bgColor = 'white'
        this.isShow = false
      }

    },
  }
}
</script>

<style>
.item-left2 {
  float: left;
}

</style>
