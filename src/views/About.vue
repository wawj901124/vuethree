<template>
    <div id="about">
      <!--<p>about页</p>-->
      <h2>关于我们</h2>
    </div>
</template>

<script>
export default {
  name: 'About',
  //局部钩子的配置，可以在这里进行
  //组件路由钩子函数-1-beforeRouteEnter
  //进入路由前做什么
  //一定要有next(),不然会停留在钩子中，出不去
  beforeRouteEnter(to,from,next){
    console.log("路由进入之前调用");
    next();
  },

  //组件路由钩子函数-2-beforeRouteUpdate
  //只要路由参数变了，就会进入，不变，不会进入
  beforeRouteUpdate(to,from,next){
    console.log("路由参数变了");
    next();
  },

  //组件路由钩子函数-3-beforeRouteLeave
  //路由离开前调用
  beforeRouteLeave(to,from,next){
    console.log("路由离开前调用");
    next();

  },
}
</script>

<style scoped>
  #about{
    width: 300px;
    height: 500px;
    background-color: red;
    margin: 0 auto;
  }
  h2{
    color: green;
  }

</style>
