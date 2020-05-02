import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import faker from 'faker';
import state from '@/store/state';
import mutations from '@/store/mutations';
import getters from '@/store/getters';
import routes from '@/router/routes';
import Customers from '@/components/Customers.vue';
import AddCustomer from '@/components/AddCustomer.vue';
import CustomerDetails from '@/components/CustomerDetails.vue';

let localVue;
let newStore;
let newRouter;

const createActualStore = () => {
	localVue.use(Vuex);
	return new Vuex.Store({
		state,
		mutations,
		getters
	});
};

const createActualRouter = () => {
	localVue.use(VueRouter);
	return new VueRouter({
		routes
	});
};

describe('Unit tests for customer management feature', () => {
	beforeEach(() => {
		localVue = createLocalVue();
		newStore = createActualStore();
	});

	it('should check that the store has two customers preloaded', () => {
		expect(newStore.state.customers.length).toEqual(2);
		expect(newStore.state.newCustomerId).toEqual(3);
	});

	it('should render customers present in store in the customers listing view', () => {
		newRouter = createActualRouter();
		const wrapper = shallowMount(Customers, {
			store: newStore,
			router: newRouter,
			localVue
		});
		// assert that the Customers listing view contains data of default customers
		expect(newStore.state.customers.length).toEqual(2);
		newStore.state.customers.map((customer) => {
			expect(wrapper.html()).toContain(customer.name);
			expect(wrapper.html()).toContain(customer.email);
			expect(wrapper.html()).toContain(customer.phone);
			return true;
		});
	});

	it('should update store when create new customer event is fired', () => {
		const addButtonSelector = '[data-test-submit="add-customer"]';
		newRouter = createActualRouter();
		const wrapper = shallowMount(AddCustomer, {
			store: newStore,
			router: newRouter,
			localVue
		});
		const newCustomer = {
			name: faker.name.findName(),
			email: faker.internet.email(),
			phone: faker.phone.phoneNumber()
		};
		// simulate new customer data population in the new cutomer form
		wrapper.setData(newCustomer);
		// assert that store state does not contain new customer before clicking Add button
		let foundInStore = newStore.state.customers.filter((customer) => customer.name === newCustomer.name).length > 0;
		expect(foundInStore).toBe(false);
		// click the add (new customer) button
		wrapper.find(addButtonSelector).trigger('click');
		// assert that the store now contains the new customer in it
		foundInStore = newStore.state.customers.filter((customer) => customer.name === newCustomer.name).length > 0;
		expect(foundInStore).toBe(true);
	});

	it('should render selected customer`s details in customer details view', () => {
		const selectedCustomer = newStore.state.customers[0];
		const wrapper = shallowMount(CustomerDetails, {
			store: newStore,
			mocks: {
				$route: {
					params: {
						id: selectedCustomer.id
					}
				}
			},
			localVue
		});
		// assert select customer's data is rendered
		expect(wrapper.html()).toContain(selectedCustomer.name);
		expect(wrapper.html()).toContain(selectedCustomer.email);
		expect(wrapper.html()).toContain(selectedCustomer.phone);
	});
});