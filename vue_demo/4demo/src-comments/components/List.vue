<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复:</h3>
    <!--    控制显示-->
    <h2 v-show="comments.length==0">暂无评论,点击左侧添加评论</h2>
    <ul class="list-group">
      <item v-for="(comment,index) in comments" :key="index"
            :comment="comment"
            :index="index"
            :deleteComment="deleteComment"/>
    </ul>
    <Item/>
  </div>
</template>

<script>

import Item from "./Item";

export default {
  name: "List",
//  声明接收属性,就会成为组件对象属性,定义属性方式一
  props: [
    'comments',
    'deleteComment',
  ],

  components: {
    Item,
  },

}
</script>

<style scoped>

</style>
