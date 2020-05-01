<template>
    <div id="mine">
      <h2>个人中心</h2>
      <!--通过/:路径传参方式配置动态路由-->
      <p>----------------------------------------------------</p>
      <h2>根据路由对象获取的路径参数</h2>
      <p>姓名：{{$route.params.name}}</p>
      <p>性别：{{$route.params.sex}}</p>
      <p>身高：{{$route.query.height}}</p>
      <p>小狗：{{$route.query.dog}}</p>

      <!--通过属性(即props)来配置动态路由-步骤3-显示props-->
      <p>----------------------------------------------------</p>
      <h2>根据属性获取的路径参数</h2>
      <p>姓名：{{name}}</p>
      <p>性别：{{sex}}</p>
      <p>身高：{{height}}</p>
      <p>小狗：{{dog}}</p>



    </div>
</template>

<script>
    export default {
        name: "Mine",
        //通过属性(即props)来配置动态路由-步骤2-通过props来接收传递的参数
        props:['name','sex','height','dog'],

        //created，组件创建完成
        created(){
          console.log(this.$route);   // $route,当前路由对象
          console.log(this.$route.fullPath) //路由的fullPath属性值
          console.log(this.$route.path)  //路由的path属性值
          console.log(this.$route.params)  //路由的params属性值
          console.log(this.$route.query)  //路由的query属性值

          // console.log(this.$router);   // $router,当前路由对象所在的路由器（路由容器）
        },
    }
</script>

<style scoped>
  #mine{
    width: 300px;
    height: 500px;
    background-color: orange;
    margin: 0 auto;
  }
  h2{
    color: green;
  }

</style>
