import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'


//导入新的一级界面
import Login from '@/views/Login'
import DashBoard from '@/views/DashBoard'

//配置路由-步骤1-引入页面
//@直接到src目录
// 引入一级页面,由一级将为二级
import Home from '@/views/Home'
// import About from '@/views/About'  //使用懒加载，要注释这一行，开始导入和懒加载不能同时存在，否则会报错
import Mine from '@/views/Mine'

//路由懒加载，用到的时候再加载
//不会一开始就加载，用到的时候（即可以是点击页面导航链接）再加载
//有利于性能
const About = () => import('@/views/About')   //以函数的形式，设置路由懒加载，用到的时候再导入，有利于提高性能

//引入二级页面，由二级将为三级
import News from '@/views/News'
import Shop from '@/views/Shop'



Vue.use(Router)

//函数默认会把route传递给这个函数，所有函数接收到的就是一个route对象
// ()=>{},借读函数中定义两个变量参数：params和query
// 其中括号里的{params,query}对应获取到的是route路由对象中两个属性params和query
let func = ({params,query})=>{
  return{
    name:params.name,
    sex:params.sex,
    height:query.height,
    dog:query.dog
  }  //返回一个对象

};

// export default new Router({
//   // mode:'history',  //设置路由的模式，默认是hash模式，也就是路径前会有个#号
//   //                 // 设置成history模式，就是一般的路径，不会有#号，但是经过redirect: to=>{return '/home'}
//   //                 //设置的路径，后面会有#号
//
//   // //routes中每一个对象为一条路由信息
//   // //配置路由-步骤2-为页面配置路径，配置好路由后，一定要有出口
//   // routes: [
//   //   // {
//   //   //   path: '/',
//   //   //   name: 'HelloWorld',
//   //   //   component: HelloWorld
//   //   // },
//   //
//   //   // {
//   //   //   path:'/',
//   //   //   redirect:'/home'    //路由重定向，访问根目录的时候访问的是home路由,以路径的方式
//   //   // },
//   //
//   //   // {
//   //   //   path:'/',
//   //   //   redirect:{name:'about'}    //路由重定向，访问根目录的时候访问的是about路由,以路径名字的方式
//   //   // },
//   //
//   //   {
//   //     path:'/',
//   //     redirect: to=>{return '/home'}, //路由重定向，访问根目录的时候访问的是to后面函数定义的目标路由
//   //   },
//   //
//   //   {
//   //     path:'/home',   //路由路径
//   //     name:'home',        //路由名字
//   //     component:Home,  //路由组件
//   //     //存放子组件路由,路由嵌套，三级往后一样套路
//   //     children: [
//   //       {
//   //         path:'/home',
//   //         redirect:{name:'news'}    //路由重定向，访问home目录的时候访问的是home下的news路由,以路径名字的方式
//   //       },
//   //
//   //       {
//   //         path:'news',   //路由路径,二级路由，不加/，会自动在一级路由后匹配二级路由路径
//   //         name:'news',        //路由名字
//   //         component:News,  //路由组件
//   //       },
//   //       {
//   //         path:'shop',   //路由路径,二级路由，不加/，会自动在一级路由后匹配二级路由路径
//   //         name:'shop',        //路由名字
//   //         component:Shop,  //路由组件
//   //       },
//   //     ]
//   //   },
//   //
//   //   {
//   //     path:'/about',   //路由路径
//   //     name:'about',        //路由名字
//   //     component:About,  //路由组件
//   //   },
//   //
//   //   // //通过/:(即路径参数的形式)来配置动态路由
//   //   // {
//   //   //   path:'/mine/:name/:sex',   //路由路径,冒号后面为参数参数，即动态改变的内容,可以用/:增加多个层级
//   //   //   name:'mine',        //路由名字
//   //   //   component:Mine,  //路由组件
//   //   // },
//   //
//   //   // //通过属性(即props)来配置动态路由-步骤1-配置props
//   //   // {
//   //   //   path:'/mine',
//   //   //   name:'mine',        //路由名字
//   //   //   component:Mine,props:{name:'小撩'},  //路由组件，加上props属性，来配置动态路由
//   //   // },
//   //
//   //   // //可以接收路径参数，也可以接收属性参数，即以上两种都可以用
//   //   //     // //路径要用/:配置参数
//   //   //     // //props属性值设置为true,允许/:后面的配置参数转为属性
//   //   //     // {
//   //   //     //   path:'/mine/:name/:sex', //路由路径,冒号后面为参数参数，即动态改变的内容,可以用/:增加多个层级
//   //   //     //   name:'mine',        //路由名字
//   //   //     //   component:Mine,props:true,  //设置props为true,既可以接收路径参数，也可以接收属性参数，即以上两种都可以用
//   //   //     // },
//   //
//   //   //推荐使用
//   //   //可以将props传递一个函数，可以解析/:后面的参数，也可以解析?号后面的参数
//   //   //路径要用/:配置参数
//   //   //props属性值设置为true,允许/:后面的配置参数转为属性
//   //   {
//   //     path:'/mine/:name/:sex', //路由路径,冒号后面为参数参数，即动态改变的内容,可以用/:增加多个层级
//   //     name:'mine',        //路由名字
//   //     component:Mine,props:func,  //设置props为一个函数,既可以接收路径参数，也可以接收属性参数（/:后面的参数和?号后面的参数）
//   //   },
//   // ]
// })


//制作全局路由守卫-步骤1-定义一个路由常量
const router = new Router({
  //加入新登录页的配置
  routes: [
    {
      path:'/',
      redirect: to=>{return '/dashBoard'}, //路由重定向，访问根目录的时候访问的是to后面函数定义的目标路由
    },

    {
      path:'/dashBoard',   //路由路径
      name:'dashBoard',        //路由名字
      component:DashBoard,  //路由组件
      //存放子组件路由,路由嵌套
      children: [
        {
          path:'/dashBoard',   //路由路径
          redirect:{name:'home'},  //路由重定向
        },
        {
          path:'home',   //路由路径
          name:'home',        //路由名字
          component:Home,  //路由组件
          //存放子组件路由,路由嵌套，三级往后一样套路
          children: [
            {
              path:'/dashBoard/home',
              redirect:{name:'news'}    //路由重定向，访问home目录的时候访问的是home下的news路由,以路径名字的方式
            },

            {
              path:'news',   //路由路径,二级路由，不加/，会自动在一级路由后匹配二级路由路径
              name:'news',        //路由名字
              component:News,  //路由组件
            },
            {
              path:'shop',   //路由路径,二级路由，不加/，会自动在一级路由后匹配二级路由路径
              name:'shop',        //路由名字
              component:Shop,  //路由组件
            },
          ],
        },

        {
          path:'about',   //路由路径
          name:'about',        //路由名字
          component:About,  //路由组件
        },

        {
          path:'mine', //路由路径,冒号后面为参数参数，即动态改变的内容,可以用/:增加多个层级
          name:'mine',        //路由名字
          component:Mine,  //路由组件
        },
      ],
      beforeEach(){
        console.log("/dashBoard,局部前置路由守卫");
      },  //局部(前置)守卫路由逻辑可以写在这里
    },

    {
      path:'/login',   //路由路径
      name:'login',        //路由名字
      component:Login,  //路由组件
    }

  ]
});

//制作全局路由守卫-步骤3-制作守卫-全局前置守卫
router.beforeEach((to,from,next)=>{
  console.log(to,from);
  //有条件的放行
  //获取到to对象的路径，如果路径不恒等于登录页面路径，则需要判断是否登录
  //登录后，才放行进入主页面
  if(to.path !== '/login'){
    //验证是否登录
    if(window.isLogin ){  //window.isLogin为一个未定义的全局变量，如果未定义则默认为false,定义了则为true
      //如果变量值为true,则说明已经登录
      //放行
      next();
    }else{
      //如果没有登录，则让其进入登录路径
      // next('/login');
      //为登录后加一个重定向，可以在登录后，直接重定向到要到的页面
      next('/login?redirect='+to.path);
    }
  }else{  //如果是进入登录页，则不需要验证
    next();
  }
  //放行
  // next();  //如果不放行，不会进入到下一个页面
  console.log("全局前置路由守卫")

  });  //beforeEach()为全局前置守卫

//制作全局路由守卫-步骤3-制作守卫-全局后置守卫
//后置守卫，没有next(),也不会跳出当前页面
//做一些善后工作
router.afterEach(()=>{
  console.log('来了')
});

//制作全局路由守卫-步骤2-导出这个路由常量
export default router;


