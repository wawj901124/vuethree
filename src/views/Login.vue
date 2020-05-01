<template>
    <div>
      <h2>登录页面</h2>
      <!---->
      <button @click="login">登录</button>
    </div>
</template>

<script>
    export default {
        name: "Login",
        methods:{
          login(){
            //1.登录成功
            window.isLogin = true;
            console.log('登录成功')
            //2.获取回调地址
            const redirect = this.$route.query.redirect;  //获取路由下的query中的参数中redirect的值
            if(redirect){  //如果有重定向地址，则跳转到地址
              //this.$router，拿到路由器
              //push函数，跳转至
              this.$router.push(redirect);     //跳转至重定向路径
            }else{  //否则，跳转到home页
              //replace与push的区别：直接替换跳转，不会有历史记录，而push会有历史记录返回，还会返回到上一个页面
              this.$router.replace('/');
            }
          }
        },
    }
</script>

<style scoped>

</style>
