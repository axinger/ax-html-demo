<template>
    <div id="app">
        <!-- 路由出口 -->
        <router-view></router-view>
    </div>
</template>

<script>

export default {
    name: 'App',
}
</script >

<style lang="scss">
//重置浏览器默认的样式,让所有的浏览器都一样
@import url('./assets/css/reset.css');

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /* margin-top: 60px; */
}
</style>