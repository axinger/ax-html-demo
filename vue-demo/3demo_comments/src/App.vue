<template>
  <div>

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

import Add from './components/Add'
import List from './components/List'

export default {
  name: 'App',
  components: {
    //2.映射组件标签
    Add,
    List,
  },
  provide(){
    return{
      message:'我是jim',
    }
  },// 和data，method等属性平级，

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



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
