<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">


        <div style="padding-top:20px">
            <button style="background-color: red;" @click=action1()>ip1</button>
        </div>

        <div style="padding-top:20px">
            <button @click=action2()>404请求</button>
        </div>

    </div>
</template>

<script>
    import TestApi from './api/test-api'

    export default {
        name: 'App',

        methods: {

            action1() {
                TestApi.getTest()
                    .then(data => alert(JSON.stringify(data)))
            },
            action2() {
                TestApi.getTest2()
                    .then(data => alert(JSON.stringify(data)))
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