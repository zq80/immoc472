import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/home/Home'
import Login from '../views/login/Login'
import Register from '../views/register/Register'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
    // beforeEnter (to, from, next) {
    //   const isLogin = localStorage.isLogin
    //   if (isLogin) {
    //     next({ name: 'home' })
    //   } else {
    //     next()
    //   }
    // }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter (to, from, next) {
      const isLogin = localStorage.isLogin
      if (isLogin) {
        next({ name: 'home' })
      } else {
        next()
      }
    }
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const isLogin = localStorage.isLogin
  if (isLogin || to.name === 'Login' || to.name === 'Register') {
    next()
  } else {
    next({ name: 'Login' })
  }
})

export default router
