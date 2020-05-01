import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isLoggedIn: false,
    newCustomerId: 3,
    customers: [{
      id: 1,
      name: 'Mujtaba Alvi',
      email: 'mushti@example.com',
      phone: '+92xxxxxxxx'
    }, {
      id: 2,
      name: 'Shahrukh Naeem',
      email: 'shahrukh@example.com',
      phone: '+92xxxxxxxx'
    }]
  },
  mutations: {
    addToCustomers(state, newCustomer) {
      state.customers.push(newCustomer);
    },
    setIsLoggedIn(state, flag) {
      state.isLoggedIn = flag;
    },
    incrementCustomerId(state) {
      state.newCustomerId++;
    }
  },
  getters: {
    fetchCustomer(state) {
      return function(id) {
        const matchedCustomers = state.customers.filter(customer => customer.id === id);
        return matchedCustomers.length ? matchedCustomers[0] : '';
      }
    }
  }
});

export default store;