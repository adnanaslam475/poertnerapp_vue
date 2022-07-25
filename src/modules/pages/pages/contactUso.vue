<template>
  <div>
    <PageHeader
      :image="require('@/assets/ourStory/our_story1.jpg')"
      :heading="'Contact Us'"
      :sub_heading="'Where you find peace'"
    />
    <div>
      <div
        class="banner-image w-100 vh-100 d-flex justify-content-between align-items-center"
      >
        <div class="container w-90 h-50 d-flex justify-content-end">
          <div
            class="d-flex flex-column justify-content-center align-items-end px-5"
            style="background-color: rgba(0, 0, 0, 0.404)"
          >
            <div class="para-width d-flex justify-content-start">
              <h4 class="text-box">Contact Us</h4>
            </div>

            <p class="para-box para-width">
              <span style="color: #b39032; font-weight: bold">Address: </span
              >RACL is 100% percent government-owned company incorporated on 11
              January 2021.
            </p>
            <div class="d-flex flex-row justify-content-around para-width">
              <p class=" para-width">
                <span style="color: #b39032; font-weight: bold">Phone: </span
                >+960 330 6969
              </p>
              <p class=" para-width">
                <span style="color: #b39032; font-weight: bold">Email: </span
                >info@airports.mv
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Navbar from "../modules/navBar/Navbar.vue"
// import Navbar from '@/components/navBar/verticalNavbar.vue'
import PageHeader from "@/modules/misc/PageHeader.vue";
export default {
  components: {
    PageHeader,
  },
  data() {
    return {};
  },
};
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
  width: 100%;
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
  background-image: url("../../../assets/ourStory/our_story2.jpg");
  background-size: cover;
}

@media screen and (max-width: 800px) {
  .para-box {
    width: 100%;
  }
}
</style>
