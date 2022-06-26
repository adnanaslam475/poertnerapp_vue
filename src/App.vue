<script>
  import Navbar from '@/components/navBar/verticalNavbar.vue'
  import Footer from '@/modules/pages/components/footer.vue'

  export default {
    data() {
      return {}
    },
    methods: {},
    name: "App",
    components: {
      Navbar,
      Footer
    }
  };
</script>

<template>
  <div class="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<style>
  .app {
    /* background-color: #962929; */
    /* background-repeat: repeat-x repeat-y;
  background: url("./assets/background.jpeg");
  opacity: 0.6; */

  }
</style>