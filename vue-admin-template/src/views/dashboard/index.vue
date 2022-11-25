<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>

    <i class="fa fa-users" />
    <i class="fa fa-user" />
    <i class="fa fa-address-book-o" />
    <i class="fa fa-window-close" />
    <br>
    <el-button type="info">
albutton
    </el-button>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
