<template>
  <!--  <div id="app">-->
  <!--    <img class="logo" src="./assets/logo.png">-->
  <!--    &lt;!&ndash;    <router-view/>&ndash;&gt;-->
  <!--    &lt;!&ndash;    3.使用组件&ndash;&gt;-->
  <!--    <Home/>-->
  <!--  </div>-->

  <div id="app1">

    <header class="site-header jumbotron">
      <div class="container">

        <div class="row">
          <div class="col-xs-12">
            <h1>对xx的评论</h1>
          </div>
        </div>
      </div>

    </header>
    <div class="container">
      <Add/> <List :comments="comments"/>
    </div>

  </div>
</template>

<script>

//1.引入组件
import Home from './components/Home'
import Add from './components/Add'
import List from './components/List'
export default {
  name: 'App',
  components: {
    //2.映射组件标签
    Home,
    Add,
    List,
  },
  data() {
    return {
      comments: [
        {
          name: 'jim1',
          content: '评论1'
        },
        {
          name: 'tom',
          content: '评论2'
        },
        {
          name: 'jim1',
          content: '评论3'
        },
      ],
    }
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



