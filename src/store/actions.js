//包含多个间接更行state的方法的对象模块，异步方法中心

//导入方法常量
import {ADD_TODO,DELETE_TODO,SELECT_ALL_TODO,DELETE_FINISHED_TODO} from './mutations-type'

export default {
  //添加函数
  addTodo({commit},todo){
    commit(ADD_TODO,{todo});
  },

  //删除函数
  delTodo({commit},index){
    commit(DELETE_TODO,{index});
  },

  //是否全选
  selectedAllTodo({commit},isCheck){
    commit(SELECT_ALL_TODO,{isCheck});
  },

  //删除所有选中项
  delFinishedTodos({commit}){
    commit(DELETE_FINISHED_TODO);
  },

}
