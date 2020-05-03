<template>
  <div id="app">
    <!--<router-view></router-view>-->

    <!--&lt;!&ndash;配置路由-步骤4-也可以设置路由导航作为路由出口&ndash;&gt;-->
    <!--&lt;!&ndash;使用<router-link>作为路由导航.有to表示到哪个路径下&ndash;&gt;-->
    <!--&lt;!&ndash;<router-link to="/"> 相当于一个a标签&ndash;&gt;-->
    <!--<div id="nav">-->
      <!--<router-link to="/home">首页</router-link>-->
      <!--<router-link to="/about">关于</router-link>-->
      <!--<router-link to="/mine">我的</router-link>-->
    <!--</div>-->

    <!--&lt;!&ndash;配置路由-步骤3-设置路由出口，路由没有出口的话，它的页面是不会展现出来的&ndash;&gt;-->
    <!--&lt;!&ndash; <router-view></router-view>,就是路由出口&ndash;&gt;-->
    <!--&lt;!&ndash;不配置路由出口，即使配置了路由链接导航，也导航不到路由路径下&ndash;&gt;-->
    <!--<router-view></router-view>-->

    <!--3.使用组件-->
    <!--<counter></counter>-->
    <Counter02></Counter02>
  </div>
</template>

<script>
  // 1.导入组件
  import Home from './views/Home'
  import About from './views/About'
  import Counter from './components/Counter'
  import Counter02 from  './components/Counter02'

export default {
  name: 'App',

  //2.注册组件
  components:{
    Home,
    About,
    Counter,
    Counter02,
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  #nav{
    padding: 30px;
  }
  #nav a{
    font-size: 30px;
    color: #484848;
    margin: 0 10px;
  }
  /*a.router-link-exact-active,router-link-exact-active为路由选中的动作，*/
  /*此处设置路由选中的样式*/
  #nav a.router-link-exact-active{
    color: #e9232c;
  }
</style>
