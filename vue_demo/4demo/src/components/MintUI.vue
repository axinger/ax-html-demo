<template>
<div class="container">

  <mt-button type="default">default</mt-button>
  <mt-button type="primary">primary</mt-button>
  <mt-button type="danger">danger</mt-button>

  <mt-button size="small">small</mt-button>
  <mt-button size="large">large</mt-button>
  <mt-button size="normal" @click="toast">normal</mt-button>


</div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
  name: "MintUI",
  methods:{
    toast(){
      Toast({
        message: '提示',
        position: 'middle',
        duration: 5000
      });
    },
  },
}
</script>

<style scoped>

</style>