<template>
	<div class="flex">
		<img class="logo" src="../assets/logo.png">
		<Logout/>
	</div>
</template>

<script type="text/javascript">
	import Logout from '@/components/Logout';

	export default {
		name: 'TopNav',
		components: {
			Logout
		}
	}
</script>
<style scoped>
	.flex {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.logo {
		max-width: 40px;
	}
</style>