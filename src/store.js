import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isLoggedIn: false,
    customers: []
  },
  mutations: {
    addToCustomers(state, newCustomer) {
      state.customers.push(newCustomer);
    },
    setIsLoggedIn(state, flag) {
      state.isLoggedIn = flag;
    }
  }
});

export default store;