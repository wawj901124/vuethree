<template>
    <div class="todo-footer" >
      <label>
        <!--使用v-model来双向绑定isCheck函数，input选项的属性值等于isCheck中get函数的返回值-->
        <!--点选选项时，就会进入到isCheck中的set函数-->
        <input type="checkbox" v-model="selectedAllOrNot"/>
      </label>
      <span>
        <!--使用length函数来计算数组的长度-->
        <span>已完成{{finishedCount}}件 /总计{{todosCount}}件</span>
      </span>
      <button class="btn btn-warning" @click="delFinishedTodos">清除已完成任务</button>
    </div>
</template>

<script>
    import  {mapGetters,mapActions} from  'vuex'

    export default {
        name: "ProjectFooter",
        //计算属性组件
        computed:{
          //展开mapGetters
          ...mapGetters(['todosCount','finishedCount','isCheck']),

          selectedAllOrNot:{
            //取
            get(){  //决定是否勾选
              return this.isCheck;
            },

            //设置
            //传入value
            set(value){
              this.selectedAllTodo(value);
            },
          },
        },

        //方法
        methods:{
          ...mapActions(['selectedAllTodo','delFinishedTodos']),
        },

    }
</script>

<style scoped>
  .todo-footer{
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label{
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input{
    position: relative;
    top: -1px;
    vertical-align: middle;
  }

  .todo-footer button{
    float: right;
    margin-top: 5px;
  }
</style>
