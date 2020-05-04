<template>
    <div>
        <ul class="todo-main">
            <!--3.使用组件-->
            <!--使用for遍历循环-->
            <!--使用冒号动态绑定向子组件ProjectItem传入对象参数todo-->
            <ProjectItem v-for="(todo,index) in todos"
                         :todo="todo"
                         :index="index"
                         :delTodo="delTodo"
            />
        </ul>
    </div>
</template>

<script>
    import localStorageUtil from './../utils/localStorageUtil'
    //1.导入组件
    import ProjectItem from './ProjectItem'

    //拿到store中的数据-步骤1-导入mapstate
    import {mapState} from 'vuex'

    export default {
        name: "ProjectList",

        //拿到store中的数据-步骤2-通过计算属性展开map
        computed:{
          ...mapState(['todos']),
        },

        //2.注册组件
        components:{
          ProjectItem,
        },

        //深度监视
        watch:{
          //监视todos
          todos:{
            deep:true,  //开启深度监视
            handler: localStorageUtil.saveTodos,   //监视操作,存储数据
          },
        },
    }
</script>

<style scoped>
  .todo-main{
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }
</style>
