import Vue from 'vue'
import VueRouter from 'vue-router'
import Menu from '../components/Menu.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../components/Login.vue')
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu
    }
  ]
})

router.beforeEach((to, from, next) => {
  //to 代表将要访问的路径
  //from 代表从哪个路径跳转
  //next 是一个函数，表示放行
  //next()代表放行,next('/login')代表强制跳转到login登录页
  if (to.path == '/login') {
    return next()
  } else {
    const tokenid = window.localStorage.getItem('LoginValidateCode')
    if (!tokenid) {
      return next()
    } else {
      return next()
    }
  }
})

export default router
