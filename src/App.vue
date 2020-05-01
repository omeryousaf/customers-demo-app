<template>
  <div id="app">
    <Layout v-if="isLoggedIn"/>
    <router-view v-else/>
  </div>
</template>

<script type="text/javascript">
  import { mapState } from 'vuex';
  import Layout from '@/components/Layout';

  export default {
    name: 'App',
    components: {
      Layout
    },
    computed: mapState(['isLoggedIn'])
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
