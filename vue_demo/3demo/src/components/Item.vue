<template>

  <li class="list-group-item">
    <div class="handle">
      <a href="javascript:;">删除</a>
      <p class="user"><span>{{comment.name}}</span><span>说:</span></p>
      <p class="centence">{{comment.content}}</p>
    </div>
  </li>
</template>

<script>
export default {
  name: "Item",
  // 只是指定属性名
  // props: [
  //   'comment',
  // ],
  // 指定属性名和属性值类型
  props: {
    comment:Object
  }
}
</script>

<style scoped>

</style>
