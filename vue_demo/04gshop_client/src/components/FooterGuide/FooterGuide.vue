<template>
  <div class="footer_guide border-1px">

    <!--    绑定class :class,{}对象方法,判断是否当前的-->
    <div class="guide_item" @click="goto('/msite')" :class="{on: isCurrent('/msite')}">

    <span class="item_icon">
    <i class="iconfont icon-food"></i>
    </span>
      <span>首页</span>
    </div>


    <div class="guide_item" @click="goto('/search')" :class="{on: isCurrent('/search')}">
    <span class="item_icon">
    <i class="iconfont icon-search"></i>
    </span>
      <span>搜索</span>
    </div>
    <div class="guide_item" @click="goto('/order')" :class="{on: isCurrent('/order')}">
    <span class="item_icon">
    <i class="iconfont icon-single"></i>
    </span>
      <span>订单</span>
    </div>

    <div class="guide_item" @click="goto('/profile')" :class="{on: isCurrent('/profile')}">
    <span class="item_icon">
    <i class="iconfont icon-user"></i>
    </span>
      <span>我的</span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goto(path) {
      this.$router.replace(path)
    },
    isCurrent(path) {
      // console.log(this.$route.path)
      return this.$route.path === path
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
/*引入公共样式*/
@import "../../common/stylus/mixins.styl"
.footer_guide
  //  顶部有白色的边框
  top-border-1px(#ff0000)

  //start 生成绝对定位的元素
  position fixed
  z-index 100
  left 0
  right 0
  bottom 0
  // 坐标 end
  background-color whitesmoke
  width 100%
  height 50px
  display flex


.guide_item
  //display flex
  flex 1
  // 文字对齐
  text-align center
  // 纵向布局
  flex-direction column
  // 对齐
  //align-items center
  margin 5px
  color green

&.on
  color red

span
  font-size 12px
  margin-top 2px
  margin-bottom 2px

.iconfont
  font-size 22px

</style>