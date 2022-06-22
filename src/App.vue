<script>
import Navbar from '@/components/navBar/verticalNavbar.vue'
export default {
  name: "App",
  components: {Navbar},
};
</script>

<template>
  <div class="app">
    <Navbar/>
    <router-view />
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
