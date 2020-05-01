<template>
	<Modal>
		<template v-slot:header>
			<h3>
				Customer Details
			</h3>
		</template>
		<template v-slot:body>
			<div
				class="label-value-pair">
				<span>
					Name
				</span>
				<h4>{{customer.name}}</h4>
			</div>
			<div class="label-value-pair">
				<span>
					Email
				</span>
				<h4>{{customer.email}}</h4>
			</div>
			<div class="label-value-pair">
				<span>
					Phone
				</span>
				<h4>{{customer.phone}}</h4>
			</div>
		</template>
		<template
			v-slot:footer
			>
			<button @click="close">Close</button>
		</template>
	</Modal>
</template>

<script type="text/javascript">
	import Modal from '@/components/Modal';

	export default {
		name: 'ViewCustomer',
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
		& span {
			width: 70px;
		}
	}
</style>