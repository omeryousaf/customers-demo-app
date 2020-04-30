<template>
	<Modal>
		<template v-slot:header>
			<h3>
				Add New Customer
			</h3>
		</template>
		<template v-slot:body>
			<div
				class="field-value-pair">
				<span>
					Name
				</span>
				<input type="text" name="" v-model="name">
			</div>
			<div class="field-value-pair">
				<span>
					Email
				</span>
				<input type="text" name="" v-model="email">
			</div>
			<div class="field-value-pair">
				<span>
					Phone
				</span>
				<input type="text" name="" v-model="phone">
			</div>
		</template>
		<template
			v-slot:footer
			>
			<button @click="close">Cancel</button>
			<button @click="onAdd">Add</button>
		</template>
	</Modal>
</template>

<script type="text/javascript">
	import Modal from '@/components/Modal';
	import { mapState } from 'vuex';

	export default {
		name: 'AddCustomer',
		components: {
			Modal
		},
		computed: mapState(['newCustomerId']),
		data() {
			return {
				name: '',
				email: '',
				phone: ''
			}
		},
		methods: {
			onCloseModal() {
				this.forAddCustomer = false;
				this.forViewCustomer = false;
			},
			onAdd() {
				this.$store.commit('addToCustomers', {
					id: this.newCustomerId,
					name: this.name,
					email: this.email,
					phone: this.phone
				});
				this.$store.commit('incrementCustomerId');
				this.$router.push({name: 'Customers'});
			},
			close() {
				this.$router.push({name: 'Customers'});
			}
		}
	}
</script>

<style scoped lang="scss">
	.field-value-pair {
		display: flex;
		justify-content: center;
		& span {
			width: 70px;
		}
	}
	button {
		margin-right: 1rem;
	}
</style>