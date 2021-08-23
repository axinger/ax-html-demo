<template>
  <div class="todo-footer">
    <div class="item-left">
      <input type="checkbox" v-model="isSelectAl" :disabled="this.$store.getters.isDisabled"/>
      <span>已完成{{ selectCount }}/全部{{ totalCount }},可全选{{ !isDisabled ? '是' : '否' }}</span>
    </div>
    <div class="item-right">
            <button type="button" id="do-action"
                    @click="deleteAllSelect"
                    v-show="selectCount">清除已经完成任务
            </button>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";


export default {

  computed: {

    ...mapGetters(['totalCount', 'selectCount', 'isDisabled']),

    isSelectAl: {
      get() {
        return this.$store.getters.isAllSelect
      },
      set(flag) {
        this.$store.dispatch('selectAllTodos', flag)
      },
    },

  },
  methods: {
    ...mapActions(['deleteAllSelect'])
  }
}
</script>

<style scoped>

.todo-footer {
  /*color: red;*/
  /*font-size: 30px;*/
  /*justify-content: space-between;*/
  width: 100%;

  display: inline-block;

  position: relative;
}

.item-left {
  float: left;
}

.item-right {
  float: right;
}

#do-action {
  background-color: red;
  color: white;
  padding: 0px 10px 0px 10px;
  text-align: right;
  alignment: right;
}
</style>
