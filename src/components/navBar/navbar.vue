<template>
  <v-fragment class="d-flex flex-row">
    <div
      class="nav d-flex flex-column grad justify-content-center align-items-center main-container-bg topBottomRadius p-5"
    >
      <div
        class="nav flex-column nav-pills grad mb-3"
        id="v-pills-tab"
        role="tablist"
        aria-orientation="vertical"
      >
        <div
          class="nav-item d-flex flex-column justify-content-center align-items-center"
        >
          <router-link
            to="/Leadership"
            class="d-flex flex-column justify-content-center align-items-center container-bg p-2"
          >
            <div>
              <img
                src="https://i.imgur.com/8RKXAIV.jpg"
                width="90"
                height="90"
                class="img-class"
              />
            </div>
            <p class="text-capitalize">Mohamed Rizvi</p>
          </router-link>
          <router-link
            to="/Leadership"
            class="d-flex flex-column justify-content-center align-items-center container-bg p-2"
          >
            <div>
              <img
                src="https://i.imgur.com/8RKXAIV.jpg"
                width="90"
                height="90"
                class="img-class"
              />
            </div>
            <p class="text-capitalize">Mohamed Rizvi</p>
          </router-link>

          <router-link
            to="/Leadership"
            class="d-flex flex-column justify-content-center align-items-center container-bg p-2"
          >
            <div>
              <img
                src="https://i.imgur.com/8RKXAIV.jpg"
                width="90"
                height="90"
                class="img-class"
              />
            </div>
            <p class="text-capitalize">Mohamed Rizvi</p>
          </router-link>

          <router-link
            to="/Leadership"
            class="d-flex flex-column justify-content-center align-items-center container-bg p-2"
          >
            <div>
              <img
                src="https://i.imgur.com/8RKXAIV.jpg"
                width="90"
                height="90"
                class="img-class"
              />
            </div>
            <p class="text-capitalize">Mohamed Rizvi</p>
          </router-link>

          <!-- </router-link> -->
        </div>
      </div>
    </div>
    <router-view />
  </v-fragment>
</template>

<script>
  // import NavbarElement from "./navbarElement"
  export default {
    name: "Navbar",
    components: {},
    props: {
      name: {
        type: String,
      },

      image: {
        type: String,
      },
    },
  }
</script>
<style scoped>
  .flex-row {
    background-color: #f4f4f4;
  }
  .grad {
    background-image: linear-gradient(#ebd8c6, #dddfdf);
  }

  .main-container-bg {
    height: fit-content;
    width: fit-content;
    /* background-color: blue; */
  }

  i {
    color: grey;
    font-size: 30px;
  }

  p {
    color: grey;
    font-size: 10px;
    font-weight: bold;
  }
  a {
    height: fit-content;
    width: fit-content;
    text-decoration: none;
    /* background-color: aqua; */
  }

  a:hover {
    cursor: pointer;
  }

  a:hover .icon-container {
    cursor: pointer;
    border-radius: 10px;
    background-color: #b39032;
  }

  a:hover i {
    color: white;
  }

  a:hover p {
    color: black;
  }

  .icon-container {
    height: 50px;
    width: 50px;
  }

  .btn-container {
    width: 180px;
    color: white;
    background-color: #b39032;
  }

  .topBottomRadius {
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
  }

  .text-capitalize {
    font-size: 13px;
    color: transparent;
  }

  .img-class {
    border-radius: 100%;
  }
</style>
