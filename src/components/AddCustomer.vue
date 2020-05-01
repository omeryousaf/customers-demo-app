<template>
	<Modal>
		<template v-slot:header>
			<h3>
				Add New Customer
			</h3>
		</template>
		<template v-slot:body>
			<div
				class="label-value-pair">
				<span>
					Name
				</span>
				<input
					type="text"
					v-model="name">
			</div>
			<div class="label-value-pair">
				<span>
					Email
				</span>
				<input
					type="text"
					v-model="email">
			</div>
			<div class="label-value-pair">
				<span>
					Phone
				</span>
				<input
					type="text"
					v-model="phone">
			</div>
		</template>
		<template
			v-slot:footer
			>
			<div class="align-right">
				<button
					@click="close"
					class="btn cancel mr_1Rem">
					Cancel
				</button>
				<button
					@click="onAdd"
					class="btn add">
					Add
				</button>
			</div>
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
	.label-value-pair {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin: 15px 0;

		& span {
			width: 70px;
		}
		& input {
			font-size: 16px;
		}
	}
	.btn {
		padding: 5px 1rem;
		border-radius: 5px;
		color: #fff;
		font-size: 15px;
		&.add {
			background-color: slateblue;
		}
		&.cancel {
			background-color: lightcoral;
		}
	}
	.align-right {
		text-align: end;
	}
	.mr_1Rem {
		margin-right: 1rem;
	}
</style>