<template>
    <div>
      <p>vuex使用</p>
      <!--<p>&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;</p>-->
      <!--<p>点击了{{count}}次,{{count}}是{{evenOrOdd}}</p>-->
      <!--<button @click="increment">增加+1</button>-->
      <!--<button @click="decrement">减少-1</button>-->
      <!--<button @click="incrementIfEven">偶数+1</button>-->
      <!--<button @click="incrementAsync">异步+1</button>-->

      //使用map拿到store.js中的内容-步骤3-使用相应的map内容
      <p>----------------------Map 拿到内容----------------------------------------</p>
      <!--直接使用 ...mapState展开的count即可-->
      <!--直接使用 ...mapGetters展开的evenOrOdd即可-->
      <p>点击了{{count}}次,{{count}}是{{evenOrOdd}}</p>
      <!--直接使用 ...mapActions展开的'increment','decrement','incrementIfEven','incrementAsync'即可-->
      <button @click="increment">增加+1</button>
      <button @click="decrement">减少-1</button>
      <button @click="incrementIfEven">偶数+1</button>
      <button @click="incrementAsync">异步+1</button>
    </div>
</template>

<script>
    //使用vuex中的方法-步骤1-导入vuex
    // 导入mapMutations，就可以通过mapMutations使用store.js中的mutations中定义的方法
    // 如果是属性，可以在计算属性computed中展开mapMutations
    //如果是方法，可以在methods中展开mapMutations
    //使用map拿到store.js中的内容-步骤1-导入相应的map内容
    import {mapState,mapGetters,mapActions,mapMutations,} from 'vuex'

    export default {
        name: "Counter",
        //计算组件
        computed:{
          // //拿到store.js中的state中定义的count变量的值-方法一
          // count(){
          //   //可以通过this.$store.state.count拿到store.js中的state中定义的count变量的值
          //   return this.$store.state.count;
          // },
          //
          // //在computed中获取store.js中的state中getters中的方法
          // evenOrOdd(){
          //   //可以通过this.$store.getters.evenOrOdd拿到store.js中的getters中定义的evenOrOdd函数的值
          //   return this.$store.getters.evenOrOdd;
          // },

          //使用map拿到store.js中的内容-步骤2-用...展开相应的map内容
          ...mapState(['count']),
          //使用map拿到store.js中的内容-步骤2-用...展开相应的map内容
          ...mapGetters(['evenOrOdd']),

        },
        methods:{
        //    //   //使用store.js中的mutations中定义的方法-方法一
        //   // //通过三个点，在methods展开mapMutations
        //   // //store.js中的mutations中定义的方法，可以在这里通过数组的形式获取相应方法的名字
        //   // //以此，来调用相应的方法
        //   // ...mapMutations(['INCREMENT','DECREMENT']),
        //   // increment(){
        //   //   this.INCREMENT();  //通过this,调用store.js中的mutations中定义的INCREMENT方法
        //   // },
        //   // decrement(){
        //   //   this.DECREMENT(); //通过this,调用store.js中的mutations中定义的DECREMENT方法
        //   // },
        //
        //   // //  使用store.js中的mutations中定义的方法-方法二
        //   // increment(){
        //   //   //通过this.$store.commit('INCREMENT')，调用store.js中的mutations中定义的INCREMENT方法
        //   //   //通过commi来调用mutations中定义的方法
        //   //   this.$store.commit('INCREMENT');  //通过this,调用store.js中的mutations中定义的INCREMENT方法
        //   // },
        //   // decrement(){
        //   //   this.$store.commit('DECREMENT'); //通过this.$store.commit('DECREMENT'),调用store.js中的mutations中定义的DECREMENT方法
        //   // },
        //
        //   //  使用store.js中的actions中定义的方法
        //   increment(){
        //     //通过this.$store.dispatch('increment')，调用store.js中的actions中定义的increment方法
        //     //通过dispatch来调用actions中的定义的方法
        //     this.$store.dispatch('increment');
        //   },
        //   decrement(){
        //     //通过this.$store.dispatch('decrement')，调用store.js中的actions中定义的decrement方法
        //     this.$store.dispatch('decrement');
        //   },
        //
        //   //偶数加1
        //   incrementIfEven(){
        //     this.$store.dispatch('incrementIfEven');   //调用store.js中的actions中定义的incrementIfEven方法
        //   },
        //
        //   //异步加1
        //   incrementAsync(){
        //     this.$store.dispatch('incrementAsync');   //调用store.js中的actions中定义的incrementAsync方法
        //   },

          //使用map拿到store.js中的内容-步骤2-用...展开相应的map内容
          ...mapActions(['increment','decrement','incrementIfEven','incrementAsync']),
        },
    }
</script>

<style scoped>

</style>
