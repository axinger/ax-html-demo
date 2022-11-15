<template>
    <div class="hello">
      <el-button type="info">sss</el-button>
      <i class="fa fa-users"></i>
      <i class="fa fa-user"></i>
      <i class="fa fa-address-book-o"></i>
      <i class="fa fa-window-close"></i>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

// 使用sass 可以嵌套样式
.hello{
  background: yellow;
  .el-button{
    color: red;
  }
}

</style>
