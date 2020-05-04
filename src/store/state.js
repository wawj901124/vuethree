//状态对象模块，数据中心

import localStorageUtil from './../utils/localStorageUtil'    //导入本地存储js

export default {
  todos: localStorageUtil.readTodos(),    //获取本地存储数据

}
