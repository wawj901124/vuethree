<template>
    <div>
      <h3>主面板</h3>
      <!--配置路由-步骤4-也可以设置路由导航作为路由出口-->
      <!--使用<router-link>作为路由导航.有to表示到哪个路径下-->
      <!--<router-link to="/"> 相当于一个a标签-->
      <div id="nav">
        <router-link to="/dashBoard/home">首页</router-link>
        <router-link to="/dashBoard/about">关于</router-link>
        <router-link to="/dashBoard/mine">我的</router-link>
      </div>

      <!--配置路由-步骤3-设置路由出口，路由没有出口的话，它的页面是不会展现出来的-->
      <!-- <router-view></router-view>,就是路由出口-->
      <!--不配置路由出口，即使配置了路由链接导航，也导航不到路由路径下-->
      <!--<router-view></router-view>-->

      <!--在路由外面加上一个<keep-alive>，表示路由缓存，从下一个页面返回到该页面时，之前内容会保存-->
      <!--有一些消息的话，会保存-->
      <keep-alive>
        <router-view></router-view>
      </keep-alive>

    </div>
</template>

<script>
    export default {
        name: "DashBoard"
    }
</script>

<style scoped>
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
