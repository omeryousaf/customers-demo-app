import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login.vue'
import Customers from '@/components/Customers.vue'
import Home from '../views/Home.vue'
import store from '@/store.js'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/customers',
    name: 'Customers',
    component: Customers
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = store.state.isLoggedIn;
  console.log(`store.state.isLoggedIn: ${store.state.isLoggedIn}`);
  if (to.name !== 'Login' && !isLoggedIn) {
    next({ name: 'Login' });
  }
  // if the user is not authenticated, `next` is called twice
  next();
});

export default router
