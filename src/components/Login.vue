<template>
	<button @click="onLogin">Click to simulate Login</button>
</template>
<script>
	import { mapState } from 'vuex';
	
	export default {
		name: 'Login',
		computed: mapState(['isLoggedIn']),
		mounted() {
			if(this.isLoggedIn) {
				this.$router.push({name: 'Customers'});
			}
		},
		methods: {
			onLogin() {
				this.$store.commit('setIsLoggedIn', true);
			}
		}
	}
</script>