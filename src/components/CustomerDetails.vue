<template>
	<Modal>
		<template
			v-slot:header>
			<h3>
				Customer Details
			</h3>
		</template>
		<template
			v-slot:body>
			<div
				class="label-value-pair">
				<span>
					Name
				</span>
				<label>{{customer.name}}</label>
			</div>
			<div
				class="label-value-pair">
				<span>
					Email
				</span>
				<label>{{customer.email}}</label>
			</div>
			<div
				class="label-value-pair">
				<span>
					Phone
				</span>
				<label>{{customer.phone}}</label>
			</div>
		</template>
		<template
			v-slot:footer>
			<div
				class="align-right">
				<button
					@click="close"
					class="btn">
					Close
				</button>
			</div>
		</template>
	</Modal>
</template>

<script type="text/javascript">
	import Modal from '@/components/Modal';

	export default {
		name: 'CustomerDetails',
		components: {
			Modal
		},
		data() {
			return {
				customer: {}
			};
		},
		created() {
			this.customer = this.$store.getters.fetchCustomer(this.$route.params.id) || {};
		},
		methods: {
			close() {
				this.$router.push({name: 'Customers'});
			}
		}
	}
</script>

<style scoped lang="scss">
	.label-value-pair {
		display: flex;
		align-items: center;
		margin: 15px 0;

		& span {
			width: 70px;
		}
		& label {
			font-weight: bold;
		}
	}
	.align-right {
		text-align: end;
	}
	.btn {
		margin-right: 1rem;
		padding: 5px 1rem;
		border-radius: 5px;
		color: #fff;
		background-color: lightcoral;
		font-size: 15px;
	}
</style>