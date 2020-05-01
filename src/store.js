import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    //所有的数据都放在state中
    //相当于data()中的数据管理
    state:{
      count:0,  //初始化数据
    },

    //操作数据，唯一的通道是mutations
    //只有同步，同步的方法放在这里
    mutations:{
      //加法函数
      //函数中可以直接拿到state中的数据，传入参数state即可
      INCREMENT(state){
        state.count++;  //自加1
      },
      //减法函数
      DECREMENT(state){
        state.count--;  //自减一
      },

    },

    //actions,可以来做异步操作，然后提交给mutations，而后再对state(数据)进行操作
    //异步的方法，需要放在这里
    actions:{
      //actions中的方法，通过{commit}提交到state中
      //只要是actions中的方法，参数都是{commit},
      //{commit}为commit方法
      //异步方法，必须通过commit方法，来同步数据
      //固定写法
      //加函数
      increment({commit}){
        //使用commit转为同步
        commit('INCREMENT');  //提交调用mutations中的INCREMENT方法
      },

      //减函数
      decrement({commit}){
        commit('DECREMENT'); //提交调用mutations中的DECREMENT方法
      },
    }
})
