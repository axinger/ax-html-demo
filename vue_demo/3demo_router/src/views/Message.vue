<template>
  <div>

    <button class="text-left btn btn-primary" @click="$router.back()">< 返回</button>
    <ul>
      <li v-for="(item) in msgArray" :key="item.id">
        <router-link :to="`/home/message/detail/${item.id}`">{{ item.title }}</router-link>
        <button type="button" class="btn btn-info" @click="pushShow(item.id)">push查看(js跳转路由)</button>
        <button class="btn btn-primary" @click="replaceShow(item.id)">replace查看(js跳转路由)</button>
        <br>
        <br>
      </li>
    </ul>

    <hr>
    <router-view msg="abc"></router-view>
  </div>
</template>

<script>

export default {
  name: "Message",
  data() {
    return {
      msgArray: []
    }
  },
  mounted() {
    setTimeout(() => {
      this.msgArray = [
        {
          id: 1,
          title: 'msg1'
        },
        {
          id: 2,
          title: 'msg2'
        },
        {
          id: 3,
          title: 'msg3'
        },
      ]
    }, 1000)

  },
  methods: {
    pushShow(id) {
      // $route路由  $router 路由器
      console.log(`id=${id}`)
      this.$router.push(`/home/message/detail/${id}`)
    },

    replaceShow(id) {
      this.$router.replace(`/home/message/detail/${id}`)
    }
  }
}
</script>

<style>

</style>
