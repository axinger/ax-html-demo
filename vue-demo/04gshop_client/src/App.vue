<template>
  <div>

    <router-view/>


    <FooterGuide/>
  </div>
</template>


<script>

import FooterGuide from "./components/FooterGuide/FooterGuide";
export default {

  components:{
    FooterGuide,
  }
}

</script>

<style lang="stylus" rel="stylesheet/stylus">
// 整个应用组件的样式
#app
  width 100%
  height 100%
  background white
</style>