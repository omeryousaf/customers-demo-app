<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
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

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
