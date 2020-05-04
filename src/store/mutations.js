//多个可以直接同步更行状态的方法的对象模块，同步方法中心

//导入方法常量
import {ADD_TODO,DELETE_TODO,SELECT_ALL_TODO,DELETE_FINISHED_TODO} from './mutations-type'

export default {
  //[ADD_TODO],表示取ADD_TODO变量的值
  //传递参数todo对象
  [ADD_TODO](state,{todo}){  //ADD_TODO并不是方法名，方法名是ADD_TODO的值 add-todo
    state.todos.unshift(todo);  //使用unshift往数组中添加一个对象
  },

  //删除函数
  //传递参数index(索引值)
  [DELETE_TODO](state,{index}){
    state.todos.splice(index,1);  //使用splice函数删除数组中的对象，通过索引值删除，且删除一项
  },

  //是否选中所有的任务
  [SELECT_ALL_TODO](state,{isCheck}){
    state.todos.forEach(//使用forEach函数遍历数组todos中每一项，且命令每一项为todo
      todo=>{
        todo.finished = isCheck;  //将传入的参数赋值给每一项的finished

      }
    );
  },

  //删除todos中，所有项的finished为ture的项
  [DELETE_FINISHED_TODO](state){
    //使用filter函数删选数组todos中的每一项，返回每一项的finished属性为false的项，再次赋值给todos
    state.todos = state.todos.filter(todo=> !todo.finished);
  },

}
