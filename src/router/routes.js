import Login from '@/components/Login.vue'
import Customers from '@/components/Customers.vue'
import Home from '../views/Home.vue'
import AddCustomer from '@/components/AddCustomer.vue'
import CustomerDetails from '@/components/CustomerDetails.vue'
import ContactUs from '@/components/ContactUs.vue'

export default [{
    path: '/login',
    name: 'Login',
    component: Login
  }, {
    path: '/customers',
    name: 'Customers',
    component: Customers,

    children: [{
      path: 'create',
      name: 'AddCustomer',
      component: AddCustomer
    }, {
      path: ':id',
      name: 'CustomerDetails',
      component: CustomerDetails
    }]
  }, {
    path: '/contact-us',
    name: 'ContactUs',
    component: ContactUs
  }, {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
];