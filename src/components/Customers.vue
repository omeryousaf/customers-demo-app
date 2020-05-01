<template>
	<div>
		<div
			class="grid-page-header">
			<h1>
				Customers
			</h1>
			<div>
				<button
					@click="onAddCustomer"
					class="btn">
					Create
				</button>
			</div>
		</div>
		<div
			class="grid-customers-list">
			<h3>ID</h3>
			<h3>Name</h3>
			<h3>Email</h3>
			<h3>Phone</h3>
			<h3></h3>
		</div>
		<div
			class="grid-customers-list"
			v-for="customer in customers"
			:key="customer.id">
			<div>{{ customer.id }}</div>
			<div>{{ customer.name }}</div>
			<div>{{ customer.email }}</div>
			<div>{{ customer.phone }}</div>
			<div>
				<router-link
					:to="{name: 'ViewCustomer', params: { id: customer.id }}">
					View
				</router-link>
			</div>
		</div>
		<router-view/>
	</div>
</template>

<script type="text/javascript">
	import { mapState } from 'vuex';

	export default {
		name: 'Customers',
		computed: mapState(['customers']),
		methods: {
			onAddCustomer() {
				this.$router.push({name: 'AddCustomer'});
			}
		}
	}
</script>

<style scoped lang="scss">
	.grid-customers-list {
		display: grid;
		grid-template-columns: repeat(5, minmax(100px, 1fr));
	}
	.grid-page-header {
		display: grid;
		grid-template-columns: auto 200px;
		& :last-child {
			align-self: center;
		}
	}
	.btn {
		margin-right: 1rem;
		padding: 5px 1rem;
		border-radius: 5px;
		color: #fff;
		background-color: grey;
	}
</style>