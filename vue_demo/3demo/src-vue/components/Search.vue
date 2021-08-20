<template>
  <div>
    <h2 v-if="fistView">输入用户名搜索</h2>
    <h2 v-if="loading">Loading</h2>
    <h2 v-if="errMsg">{{ errMsg }}</h2>


  </div>
</template>

<script>


export default {

  name: "Search",
  components: {},
  data() {
    return {
      fistView: true,
      loading: false,
      errMsg: '',

    }
  },
}
</script>

<style scoped>

</style>
