//服务于state的对象模块，  处理计算属性中心

export default {
  //任务总数量
  todosCount(state){
    return state.todos.length;   //使用length函数获取数组的总项数
  },

  //已经完成的任务数量
  finishedCount(state){
    // reduce函数，一个数组方法，遍历数组，查出符合条件的就加1
    // total，不赋值时，默认为0
    // reduce遍历数组的一项命名为todo
    //如果一项中的finished字段的值为true,则返回1，为false，则返回0
    // total 加1或者加0
    //最后一个0 ，表示初始值为0，默认初始值也为0
    // ()=> ,为一个借读函数
    return state.todos.reduce(
      (total,todo)=> total + (todo.finished ? 1: 0),0
    );
  },

  //判断是否是全选
  //可以传入state
  //还可以传入getters
  isCheck(state,getters){
    //如果选中的和总长度恒等于（===）
    //并且数组todos的长度大于0
    return getters.finishedCount ===getters.todosCount &&  getters.todosCount > 0;
  },

}
