import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import firebase from 'firebase/app'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { layout: 'main', auth: false },
    component: Home

  },
  {
    path: '/vot',
    name: 'vot',
    meta: { layout: 'main', auth: false },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Vot.vue'),
    beforeEnter (to, from, next) {
      firebase.auth().currentUser ? next() : next('/register')
    }
  },
  {
    path: '/history',
    name: 'history',
    meta: { layout: 'main', auth: false },

    component: () => import('../views/History.vue')

  },
  {
    path: '/login',
    name: 'Login',
    meta: { layout: 'empty' },

    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    meta: { layout: 'empty' },

    component: () => import('../views/Register.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  const user = firebase.auth().currentUser
  // const users = this.$store.dispatch('getUid')
  const requireAuth = to.matched.some(history => history.meta.auth)
  if (requireAuth && !user) {
    next('/login?message=login')
  } else {
    next()
  }
})

export default router
