//集成，vuex核心管理模块

import Vue from 'vue'    //导入vue
import Vuex from 'vuex'  //导入vuex

import state from './state'    //导入
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex);   //Vue使用Vuex

export default new Vuex.Store(   //新建vuex
  {
    state,
    mutations,
    actions,
    getters,
  });

