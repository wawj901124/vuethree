//处理本地数据持久化,数据存储在本地

const LK_TODO='lk_todo'   //使用const,定义一个常量LK_TODO
export default {
  // 读取数据
  readTodos(){
    //使用JSON.parse()获取数据;
    //获取localStorage中的LK_TODO的内容,或者空数组
    return JSON.parse(localStorage.getItem(LK_TODO) || '[]');
  },
  //保存数据
  saveTodos(todos){
    console.log(todos);  //输出todos
    //使用localStorage来存储，根据LK_TODO来存
    //将todos数据经过JSON.stringify()转化为json字符串
    localStorage.setItem(LK_TODO,JSON.stringify(todos));

  },
}
