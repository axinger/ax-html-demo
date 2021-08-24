<template>
  <div style="background-color:white" class="container">
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header">
          <h2>路由</h2>
        </div>
      </div>
    </div>


    <div class="row">
      <div class="col-xs-offset-2 col-xl-2">
        <div class="list-group">
          <router-link to="/about" class="list-group-item"> About</router-link>
          <router-link to="/home" class="list-group-item"> Home</router-link>
        </div>
      </div>


      <div class="col-xl-6">
        <div class="panel">
          <div class="panel-body">
            <!--            缓存路由组件-->
            <keep-alive>
              <!--      路由占位-->
              <router-view msg="abc"></router-view>
            </keep-alive>

          </div>
        </div>
      </div>
    </div>


  </div>


</template>

<script>


export default {
  name: "DemoRoute",
  components: {
    // About,
    // Home
  },
}
</script>

<style scoped>

</style>
