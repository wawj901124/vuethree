<template>
    <div class="todo-header">
      <!--v-model="title",v-model,双向绑定一个变量title值-->
      <!--@keyup.enter="addTodo",使用@绑定回车键弹起时触发函数addTodo-->
      <input type="text"
             placeholder="请输入今天的任务清单，按回车键确认"
             v-model="title"
             @keyup.enter="addItem"
      />
    </div>
</template>

<script>
    export default {
        name: "ProjectHeader",
        //使用props接受父组件传入的参数
        props:{
          addTodo: Function,  //接受一个函数
        },
        //凡是input输入数据，都要有data()来接受数据
        data(){
          return{
            title:'',
          }
        },
        methods:{
          // 处理要添加的数据
          addItem(){
            alert(0);
            // 1.判断是否为空
            const title=this.title.trim();   //使用trim()函数将this.title中的内容去掉前后的空格
            if(!title){  //如果title中无内容，则执行以下内容
              alert('输入的任务不能为空！');
              return;   //返回，终结，没有return，则会继续往下执行
            };
            //2.生成一个todo对象
            let todo = {title,finished:false};
            //3.调用父组件的插入方法
            //使用this.$store.dispatch调用store中actions中的addTodo方法，并传入参数todo
            console.log(todo);
            this.$store.dispatch('addTodo',todo);
            console.log('提交添加');
            //4.清空输入框
            this.title='';
          },
        },

    }
</script>

<style scoped>
  .todo-header input{
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
    outline: none;
  }
  .todo-header input:focus{
    outline: none;
    border-color: rgba(255,0,0,0.8);
    box-shadow: inset 0 1px 1px rgba(255,0,0,0.075), 0 0 8px rgba(255,0,0,0.6);
  }

</style>
