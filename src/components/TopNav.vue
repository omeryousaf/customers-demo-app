<template>
	<div class="flex">
		<div>logo</div>
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
	}
</style>