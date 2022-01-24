<template>

  <div>
<!--    <p>click {{ $store.state.count }} 是 {{ evenOrOdd }}</p>-->
    <p>click {{ count }} 是 {{ evenOrOdd2 }}</p>
    <button @click="add">+</button>
    <button @click="reduce">-</button>
    <button @click="addIfOdd">奇数才增加</button>
    <button @click="addAsync">异步增加</button>

  </div>
</template>

<script>

/// 映射
import {mapState,mapGetters,mapActions} from 'vuex'

export default {
  name: "TestVuex",

  computed: {
    // evenOrOdd() {
    //   return this.$store.getters.evenOrOdd
    // }
    ...mapState(['count']),
    // ...mapGetters(['evenOrOdd']),
    /// 别名
    ...mapGetters({evenOrOdd2:'evenOrOdd'}),
  },
  methods: {
    ...mapActions(['add','reduce','addIfOdd','addAsync'])
  }

  // methods: {
  //   add() {
  //     // 通知vuex
  //     this.$store.dispatch('add',)//触发action调用
  //   },
  //   reduce() {
  //     this.$store.dispatch('reduce')//触发action调用
  //   },
  //   addIfOdd() {
  //     this.$store.dispatch('addIfOdd',)//触发action调用
  //   },
  //   addAsync() {
  //     this.$store.dispatch('addAsync',)//触发action调用
  //   }
  //
  // }
}
</script>

<style scoped>

</style>
