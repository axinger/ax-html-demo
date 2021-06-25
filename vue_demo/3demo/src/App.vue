<script src="main.js"></script>
<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <!--    <router-view/>-->
    <!--    3.使用组件-->
    <Home/>
  </div>
</template>

<script>

//1.引入组件
import Home from './components/Home'

export default {
  name: 'App',
  components: {
    //2.映射组件标签
    Home
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.logo {
  width: 50px;
  height: 50px;
}
</style>



