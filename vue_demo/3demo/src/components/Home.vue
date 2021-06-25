<template>
<div>
  <p>这里是Home</p>
  <p class="msg">{{msg}}</p>
</div>
</template>

<script>
export default {
  name: "Home",
  //在组件中,必须用函数
  data(){
    return {
      msg:'我是Home',
    }
}
}
</script>

<style>
.msg {
  color: red;
  font-size: 30px;
}

</style>
