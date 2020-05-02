import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import routes from './routes'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = store.state.isLoggedIn;
  // console.log(`store.state.isLoggedIn: ${store.state.isLoggedIn}`);
  if (to.name !== 'Login' && !isLoggedIn) {
    next({ name: 'Login' });
  }
  // if the user is not authenticated, `next` is called twice
  next();
});

export default router
