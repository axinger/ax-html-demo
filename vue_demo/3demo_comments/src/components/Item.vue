<template>
<div>
  <li class="list-group-item">
    <div class="handle">
      <a href="javascript:;" @click="deleteItem">删除</a>
      <p class="user"><span>{{ comment.name }}</span><span>说:</span></p>
      <p class="centence">{{ comment.content }}</p>

      <p>隔代传值 {{message}}</p>

    </div>
  </li>



</div>

</template>

<script>
export default {
  name: "Item",
  // 只是指定属性名
  // props: [
  //   'comment',
  // ],
  // 指定属性名和属性值类型,定义属性方式二
  props: {
    comment: Object,
    deleteComment: Function,
    index: Number,
  },
  inject: ['message'],
  methods: {
    deleteItem() {
      const {comment, deleteComment, index} = this

      if (window.confirm(`确定删除${comment.name}的评论吗?`)) {

        deleteComment(index)
      }

    }
  },
}
</script>

<style scoped>

</style>
