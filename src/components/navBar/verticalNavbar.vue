<template>
  <nav class="navbar navbar-fixed-top sticky navbar-expand-lg navbar-dark p-md-2">
      <div class="container">
        <router-link class="navbar-brand" :to="'/'">
          <img src="../../assets/logo.png" alt="" width="130" height="60" />
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <div class="mx-auto"></div>
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" :to="'/'">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="'/our-story'">Our Story</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="'/Leadership'">Our Leadership</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="'/management-team'">Our Management Team</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="'/Philosophies'">Our Philosophies</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="'/airports'">Airports</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="'/corporate'">Corporate</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="'/commercial'">Commercial</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="'/contact-us'">Contact-us</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>
<script>
export default {
  components: { },
  data() {
    return {
      data: {
        
      }
    }
  },
  methods: {
  },
}


</script>
<style scoped>
.sticky {
  position: fixed;
  top: 1px;
  /* When the element reaches top: 10px, it becomes fixed. */
  z-index: 100;
}
img{
  background-size: cover;
  width: auto !important;
}
.app .navbar {
  /* background: transparent; */
  background-color: #00000093;
  /* background-color: transparent; */
  /* border-bottom: 0.3px solid white; */
  /* position: absolute; */
  width: 100%;
}

.navbar {
  /* transition: background 0.5s linear; */
  transition: all .8s;
}

.navbar:hover {
  background: white;
}

.navbar:hover .navbar-nav .nav-link {
  color: black !important;
}

.navbar-dark .navbar-nav .nav-link {
  color: rgb(255, 255, 255) !important;
}

.navbar-dark .navbar-nav .nav-link:hover {
  color: black !important;
}

a.nav-link.router-link-exact-active.router-link-active {
  color: white !important;
  font-weight: bold;
  border-bottom: 1px solid white;
}
a.nav-link:hover{
  /* border-bottom: 1px black solid; */
  /* font-weight: bold; */
}
</style>
