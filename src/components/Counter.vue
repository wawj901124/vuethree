<template>
    <div>
      <p>vuex使用</p>
      <p>点击了{{count}}次</p>
      <button @click="increment">增加+1</button>
      <button @click="decrement">减少-1</button>
      <button @click="incrementIfEven">偶数+1</button>
    </div>
</template>

<script>
    //使用vuex中的方法-步骤1-导入vuex
    // 导入mapMutations，就可以通过mapMutations使用store.js中的mutations中定义的方法
    // 如果是属性，可以在计算属性computed中展开mapMutations
    //如果是方法，可以在methods中展开mapMutations
    import {mapMutations,mapState} from 'vuex'

    export default {
        name: "Counter",
        //计算组件
        computed:{
          //拿到store.js中的state中定义的count变量的值-方法一
          count(){
            //可以通过this.$store.state.count拿到store.js中的state中定义的count变量的值
            return this.$store.state.count;
          },

        },
        methods:{
           //   //使用store.js中的mutations中定义的方法-方法一
          // //通过三个点，在methods展开mapMutations
          // //store.js中的mutations中定义的方法，可以在这里通过数组的形式获取相应方法的名字
          // //以此，来调用相应的方法
          // ...mapMutations(['INCREMENT','DECREMENT']),
          // increment(){
          //   this.INCREMENT();  //通过this,调用store.js中的mutations中定义的INCREMENT方法
          // },
          // decrement(){
          //   this.DECREMENT(); //通过this,调用store.js中的mutations中定义的DECREMENT方法
          // },

          // //  使用store.js中的mutations中定义的方法-方法二
          // increment(){
          //   //通过this.$store.commit('INCREMENT')，调用store.js中的mutations中定义的INCREMENT方法
          //   //通过commi来调用mutations中定义的方法
          //   this.$store.commit('INCREMENT');  //通过this,调用store.js中的mutations中定义的INCREMENT方法
          // },
          // decrement(){
          //   this.$store.commit('DECREMENT'); //通过this.$store.commit('DECREMENT'),调用store.js中的mutations中定义的DECREMENT方法
          // },

          //  使用store.js中的actions中定义的方法
          increment(){
            //通过this.$store.dispatch('increment')，调用store.js中的actions中定义的increment方法
            //通过dispatch来调用actions中的定义的方法
            this.$store.dispatch('increment');
          },
          decrement(){
            //通过this.$store.dispatch('decrement')，调用store.js中的actions中定义的decrement方法
            this.$store.dispatch('decrement');
          },

          incrementIfEven(){
            this.$store.dispatch('incrementIfEven');   //调用store.js中的actions中定义的incrementIfEven方法

          },

        },
    }
</script>

<style scoped>

</style>
