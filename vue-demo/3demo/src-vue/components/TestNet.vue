<template>

  <div>
    <button @click="axios">axios请求</button>
    <br>

    <div v-if="!netData">loading</div>

    <div v-else>请求数据为: <a :href="url"> 个数:{{ dataCount }}</a></div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "TestNet",
  data() {
    return {
      netData: '',
      dataCount: 0,
      url: 'https://randomuser.me/api/?results=2',
    }
  },
  methods: {
    axios() {
      const {url} = this
      axios.get(url).then(response => {


        const data = response.data
        console.log('请求results=' + JSON.stringify(data))
        // 转换属性
        const models = data.results.map(item => ({
          // name: item.name.first+ '-' + item.name.last,
          name: item['name']['first']+ '-' + item['name']['last'],
          // username:item['login']['username'],
          username:item.login.username,
        }))

        console.log('models=' + JSON.stringify(models))
        console.log(models)
        this.netData = data;
        this.dataCount = this.netData['results'].length
        // console.log(this.dataCount)
        // this.netData = JSON.stringify(val['data']['results']);

      }).catch(error => {
        console.log('请求失败=' + JSON.stringify(error))
      })
    },
  },
}
</script>

<style scoped>

</style>
