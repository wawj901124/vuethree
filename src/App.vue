<template>
  <!--project工程项目的div层-->
  <div class="todo-container">
    <div class="todo-wrap">
      <ProjectHeader></ProjectHeader>
      <ProjectList></ProjectList>
      <ProjectFooter></ProjectFooter>
      <button @click="reqData">获取网络数据</button>
    </div>
  </div>

</template>

<script>
  // 1.导入组件
  import ProjectHeader from './components/ProjectHeader'
  import ProjectList from './components/ProjectList'
  import ProjectFooter from './components/ProjectFooter'

  export default {
    name: 'App',

    //2.注册组件
    components:{
      ProjectHeader,
      ProjectList,
      ProjectFooter,
    },

    methods:{
      //获取网络数据
      reqData(){

      },
    },
  }
</script>

<style>
  /*project 工程项目的style*/
  .todo-container{
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap{
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
