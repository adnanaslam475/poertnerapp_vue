<template>
  <v-fragment>
    <Navbar />
    <div
      class="banner-image w-100 vh-100 d-flex justify-content-between align-items-center"
    >
      <div class="container w-90 h-100 d-flex">
        <div class="d-flex flex-column justify-content-center w-100">
          <h4 class="text-box">Regional Airports</h4>
          <h4 class="text-box">Company Limited</h4>
          <p class="para-box para-width">
            RACL is 100% percent government-owned company incorporated on 11
            January 2021,to manage domestic airports in Maldives
          </p>
          <button class="btn btn-box" @click="changeRouter()">
            More Details
          </button>
        </div>
        <p
          class="para-box para-diection d-flex justify-content-center align-items-end"
        >
          2022
        </p>
      </div>
    </div>
  </v-fragment>
</template>

<script>
  import Navbar from "../components/Navbar.vue"
  export default {
    data() {
      return {}
    },
    components: { Navbar },
    methods: {
      changeRouter() {
        this.$router.push({ path: "/our-story" })
      },
    },
  }
</script>
<style scoped>
  .btn-box {
    background-color: #b39032;
    color: white;
    border-radius: 20px;
    width: fit-content;
    height: 40px;
    padding-left: 20px;
    padding-right: 20px;
  }

  .web-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #b39032;
    color: white;
    width: fit-content;
    height: 30px;
    padding-left: 10px;
    padding-right: 10px;
    margin: 10px;
  }

  .icons-box {
    margin: 30px;
  }

  .text-box {
    color: white;
    font-weight: bold;
    font-size: 56px;
  }

  .para-box {
    color: white;
    font-size: 15px;
    line-height: 25px;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .para-width {
    width: 60%;
  }

  .para-diection {
    writing-mode: tb-rl;
    transform: rotate(-180deg);
  }

  .img-box {
    height: 100px;
    width: 150px;
  }

  .logo {
    color: white;
    font-size: 18px;
    margin: 8px;
  }

  .banner-image {
    background-image: url("./sownload.jpg");
    background-size: cover;
  }

  @media screen and (max-width: 800px) {
    .para-box {
      width: 100%;
    }
  }
</style>
