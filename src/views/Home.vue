<template>
  <div id="home">
    <!--<p>home页</p>-->
    <h2 >首页</h2>

    <!--&lt;!&ndash;配置路由导航&ndash;&gt;-->
    <!--<ul>-->
      <!--<li><router-link to="/home/news">新闻</router-link></li>-->
      <!--<li><router-link to="/home/shop">商品</router-link></li>-->
    <!--</ul>-->

    <!--处于三级路由，配置路由导航-->
    <ul>
      <li><router-link to="/dashBoard/home/news">新闻</router-link></li>
      <li><router-link to="/dashBoard/home/shop">商品</router-link></li>
    </ul>

    <!--配置二级路由出口-->
    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
  #home{
    width: 300px;
    height: 500px;
    background-color: skyblue;
    margin: 0 auto;
  }
  h2{
    color: red;
  }

</style>
