<template>
  <v-fragment>
    <nav
      class="navbar navbar-fixed-top sticky navbar-expand-lg navbar-dark p-md-3 mb-5"
      style="background: #ffffff"
    >
      <div class="container">
        <router-link class="navbar-brand" :to="'/'">
          <img src="../../assets/logo.png" alt="" width="130" height="90" />
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <div class="mx-auto"></div>
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link text-black" :to="'/our-story'"
                >Our Story</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-black" :to="'/Leadership'"
                >Our Leadership</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-black" :to="'/management-team'"
                >Our Management Team</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-black" :to="'/Philosophies'"
                >Our Philosophies</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-black" :to="'/airports'"
                >Airports</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-black" :to="'/corporate'"
                >Corporate</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-black" :to="'/commercial'"
                >Commercial</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-black" :to="'/contact-us'"
                >Contact-us</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
  </v-fragment>
</template>
<script>
  export default {}
</script>
<style scoped>
  .sticky {
    position: sticky;
    top: 1px; /* When the element reaches top: 10px, it becomes fixed. */
    z-index: 100;
  }
</style>
