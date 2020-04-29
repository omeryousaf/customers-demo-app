<template>
	<div>
		<TopNav/>
		<SideNav/>
		<Content/>
	</div>
</template>

<script type="text/javascript">
	import TopNav from '@/components/TopNav';
	import SideNav from '@/components/SideNav';
	import Content from '@/components/Content';

	export default {
		name: 'Layout',
    components: {
      TopNav,
      SideNav,
      Content
    }
	}
</script>