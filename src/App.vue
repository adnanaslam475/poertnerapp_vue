<script>
import Navbar from "@/components/navBar/verticalNavbar.vue";
import Footer from "@/modules/pages/components/footer.vue";

export default {
  data() {
    return {};
  },
  methods: {},
  name: "App",
  components: {
    Navbar,
    Footer,
  },
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
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;1,100;1,300&display=swap");
.app {
  font-family: "Montserrat", sans-serif !important;
}
</style>


 <!-- Change the home page header image to a slider like on https://agronational.mv/en

- replace the homepage gallery with Instagram photos, but show like grid css

- and add a clickable map to home like on https://agronational.mv/en
It will be a bit different in our map, we just need to display the airport names
and it should be clickble to each airport so that it redirects to another page

- display leadership page images correctly -->