<template>
	<div>
		<a to="#" @click="onLogout">Logout</a>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: 'Logout',
		methods: {
			onLogout(e) {
				e.preventDefault();
				this.$store.commit('setIsLoggedIn', false);
				this.$router.push({name: 'Login'});
			}
		}
	}
</script>