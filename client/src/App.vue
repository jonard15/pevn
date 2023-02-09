<template>
      <div>
    <!-- <v-app-bar
      color="deep-purple accent-4"
      dense
    >
      <v-spacer></v-spacer>

      <v-btn icon>
        <router-link to="/about">About</router-link>
      </v-btn>

      <v-btn icon>
       <router-link to="/">Home</router-link> |
      </v-btn>

    </v-app-bar> -->
    <TopToolbar></TopToolbar>
    <router-view/>
    <BottomNav></BottomNav>

  </div>
</template>

<script>
import TopToolbar from './components/TopToolbar.vue';
import BottomNav from './components/BottomNav.vue';
export default {
    components: {
    TopToolbar,
    BottomNav,
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
