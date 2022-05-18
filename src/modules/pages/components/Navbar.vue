<template>
  <nav
    class="navbar fixed-top navbar-expand-lg navbar-dark p-md-3"
    style="background: #ffffff; opacity: 80%"
  >
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="./logo.png" alt="" width="100" height="80" />
      </a>
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
</template>
<script>
  export default {}
</script>
