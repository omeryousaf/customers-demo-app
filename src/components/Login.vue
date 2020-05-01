<template>
	<div>
		<button
			@click="onLogin">
			Click to Login
		</button>
		<label>
			You will stay logged in until you refresh the app or logout from the menu.
		</label>
	</div>
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

<style scoped>
	div {
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	button {
		padding: 5px 1rem;
		border-radius: 5px;
		color: #fff;
		background-color: slateblue;
		font-size: 15px;
	}
</style>