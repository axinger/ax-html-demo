<template>
  <div>
    <p>传值id: {{ $route.params.id }}</p>
    <p>传值msg: {{ msg}}</p>
    <ul>
      <li>id:{{ this.detail.id }}</li>
      <li>title:{{ this.detail.title }}</li>
    </ul>
  </div>

</template>

<script>
export default {
  name: "MsgDetail",
  props:{
    msg:String
  },
  data() {
    return {
      detail: {}
    }
  },
  // Vue 中的 watch 对象中的回调函数不能是箭头函数。
  // 箭头函数中的 this 指向的是定义时的对象而不是函数运行时所在的对象
  watch: {
    $route: function (val) {

      this.detail = ({
        id: val.params.id * 1,
        title: 'title是' + val.params.id * 1
      })
    }
  }
}
</script>

<style scoped>

</style>
