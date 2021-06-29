<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复:</h3>
    <h2>暂无评论,点击左侧添加评论</h2>
<ul class="list-group">
  <item v-for="(comment,index) in comments" :key="index" :comment="comment"/>
</ul>
    <Item/>
  </div>
</template>

<script>

import Item from "./Item";

export default {
  name: "List",
//  声明接收属性,就会成为组件对象属性
  props: [
    'comments',
  ],

  components: {
    Item,
  },

}
</script>

<style scoped>

</style>
