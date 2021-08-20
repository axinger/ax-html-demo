<template>
<div>
  <ul>
    <li v-for="(item,index) in newsArray" :key="index">{{item.title}}</li>
  </ul>
</div>
</template>

<script>
export default {
  name: "News",
  data(){
    return{
      newsArray:[
        {
          title:'new1'
        },
        {
          title:'new2'
        },
        {
          title:'new3'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
