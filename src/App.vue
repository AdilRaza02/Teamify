<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
    <Footer v-if="$route.name === 'Home'" />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>
