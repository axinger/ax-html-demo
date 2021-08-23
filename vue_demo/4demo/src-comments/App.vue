<template>
  <!--  <div id="app">-->
  <!--    <img class="logo" src="./assets/logo.png">-->
  <!--    &lt;!&ndash;    <router-view/>&ndash;&gt;-->
  <!--    &lt;!&ndash;    3.使用组件&ndash;&gt;-->
  <!--    <Home/>-->
  <!--  </div>-->

  <div id="app1">

    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>对xx的评论</h1>
          </div>
        </div>
      </div>

    </header>
    <div class="container" >
<!--      当前方法,给子控件传值-->
     <div class="left" >
       <Add :addComment="addComment"/>
     </div>
      <div class="right" >
        <List :comments="comments" :deleteComment="deleteComment"/>
      </div>

    </div>

  </div>
</template>

<script>

//1.引入组件
import Home from './components/Home'
import Add from './components/Add'
import List from './components/List'

export default {
  name: 'App',
  components: {
    //2.映射组件标签
    Home,
    Add,
    List,
  },
  data() {
    return {
      comments: [ // 数据在哪个组件,更新数据的行为(方法)就应该定义在哪个组件
        {
          name: 'jim1',
          content: '评论1'
        },
        {
          name: 'tom',
          content: '评论2'
        },
        {
          name: 'jim1',
          content: '评论3'
        },
      ],
    }
  },
  methods: {
    addComment(comment) {
      //插入最前面
      this.comments.unshift(comment)
    },

    deleteComment(index) {
      //插入最前面
      this.comments.splice(index,1)
    },
  },
}
</script>
<!--scoped 属性是一个布尔属性。

如果使用该属性，则样式仅仅应用到 style 元素的父元素及其子元素。
-->
<style scoped>
.container{
  background: white;
  /*margin-top: 8px;*/
  text-align: center;
  float:left;
  width:100%;
}
.left{
  width:40%;
  position:absolute;
  display: flex;
  display: -webkit-flex;
  align-items:center;
  justify-content:center;
  color: #008cff;
  border-right:1px solid #ebedf0;
}

.right{
  float: right;
  width: 60%;
}

</style>




