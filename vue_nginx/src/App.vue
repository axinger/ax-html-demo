<template>
  <div id="app">
    <img alt="Vue logo"
         src="./assets/logo.png">

    <button @click=action1()>按钮</button>
  </div>
</template>

<script>
import TestApi from './api/test-api'

export default {
  name: 'App',

  methods: {

    action1() {

      //   var url = 'http://192.168.101.131:11010/api/deviceStateCount?workshopId=101'

      //   var url = "/api/ip1"
      //   fetch(url, {
      //     method: 'get',
      //     hearders: new Headers({
      //       //设置请求头，解决跨域问题 
      //       'Content-Type': 'application/x-www-form-urlencoded'
      //     }),
      //     //解决请求数据类型限制的问题
      //     // body:new URLSearchParams([["a", 1],["b", 2]]).toString()
      //   })
      //     .then(res => res.json())
      //     .then(data => alert('data = ' + JSON.stringify(data)))
      //     .catch(error => alert('error = ' + JSON.stringify(error)))

      TestApi.getTest()
        .then(data => alert(JSON.stringify(data)))
        .catch(error => alert('error = ' + JSON.stringify(error)))



    }

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
