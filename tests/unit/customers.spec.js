import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import state from '@/store/state.js';
import mutations from '@/store/mutations.js';
import getters from '@/store/getters.js';
import Login from '@/components/Login.vue'

const localVue = createLocalVue();
localVue.use(Vuex);

const createStore = () => {
	return new Vuex.Store({
		state,
		mutations,
		getters
	});
};

describe('Unit tests for customer management feature', () => {
	it('should check that the store has two customers preloaded', async () => {
		const newStore = createStore();
		expect(newStore.state.customers.length).toEqual(2);
		expect(newStore.state.newCustomerId).toEqual(3);
	});
});