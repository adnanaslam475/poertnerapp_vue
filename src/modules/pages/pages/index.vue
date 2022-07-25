<template>
  <div>
    <!-- Hero -->
    <div class="home-content">
      <img class="hero_image" src="@/assets/ourStory/our_story1.jpg" alt="" />
      <div
        class="banner-image w-100 vh-100 d-flex align-items-stretch align-items-center"
      >
        <div class="container w-90 d-flex justify-content-between">
          <div class="d-flex flex-column justify-content-center w-75 index-1">
            <h4 class="text-box">REGIONAL AIRPORTS</h4>
            <h4 class="text-box">COMPANY LIMITED</h4>
            <p class="para-box para-width">Progress Through Connectivity</p>
            <button
              class="btn btn-box more_details_btn"
              @click="changeRouter()"
            >
              Learn More
            </button>
          </div>
          <p
            class="para-box para-diection d-flex justify-content-center align-items-end year"
          >
            2022
          </p>
        </div>
      </div>
    </div>
    <!-- Second Section -->
    <section class="sec_2">
      <b-container class="pb-5">
        <div class="py-5 text-center second_heading">
          <h1 class="py-1 fw-bold">Welcome to Airports!</h1>
          <p class="text-muted"></p>
        </div>
        <b-row class="d-flex align-items-center" style="padding-top: 0.75rem">
          <!-- Left Column -->
          <b-col
            md="6"
            sm="12"
            class="aircraft_parent"
            style="padding-right: 0"
          >
            <CardImage
              :image="require('@/assets/commercial/delivery.jpg')"
              :height="'412px'"
              :object_fit="'cover'"
              class="aircraft_image"
            />
            <div class="aircraft_child text-center">
              <h1 class="fw-bold">Corporate</h1>
              <a href="#" class="btn btn-box-2 mt-2">Learn More</a>
            </div>
          </b-col>
          <!-- Right Column -->
          <b-col md="6" sm="12" class="">
            <b-row class="row-eq-height">
              <b-col class="aircraft_parent" style="padding-right: 0">
                <CardImage
                  :image="require('@/assets/ourStory/our_story2.jpg')"
                  :height="'200px'"
                  :object_fit="'cover'"
                  class="aircraft_image"
                />
                <div class="aircraft_child text-center">
                  <h6>Our Story</h6>
                  <a href="#" class="btn btn-box-2 mt-2">Learn More</a>
                </div>
              </b-col>
              <b-col class="aircraft_parent">
                <CardImage
                  :image="require('@/assets/commercial/air_cargo.jpg')"
                  :height="'200px'"
                  :object_fit="'cover'"
                  class="aircraft_image"
                />
                <div class="aircraft_child text-center">
                  <h6>Downloads</h6>
                  <a href="#" class="btn btn-box-2 mt-2">Learn More</a>
                </div>
              </b-col>
            </b-row>

            <b-row>
              <b-col class="aircraft_parent" style="margin-top: 0.75rem">
                <CardImage
                  :image="require('@/assets/corporate/image1.jpg')"
                  :height="'200px'"
                  :object_fit="'cover'"
                  class="aircraft_image"
                />
                <div class="aircraft_child text-center">
                  <h3>Contact Us</h3>
                  <a href="#" class="btn btn-box-2 mt-2">Learn More</a>
                </div>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        <!-- Bottom Card -->
        <b-row style="margin-top: 0.75rem">
          <b-col class="aircraft_parent">
            <CardImage
              :image="require('@/assets/home/hero.jpg')"
              :height="'400px'"
              :object_fit="'cover'"
              class="aircraft_image"
            />
            <div class="aircraft_child text-center">
              <h1>Commercial</h1>
              <a href="#" class="btn btn-box-2 mt-2">Learn More</a>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <!-- Third Section -->
    <section class="sec_3">
      <b-container>
        <div class="py-5 text-center">
          <h1 class="py-1 fw-bold">Gallary</h1>
          <p class="text-muted"></p>
        </div>
        <div class="pb-5">
          <carousel-3d>
            <slide :index="0">
              <!-- Slide 1 Content -->
              <img
                src="../../../assets/ourStory/our_story2.jpg"
                width="auto"
                height="100%"
                style="object-fit: cover"
                alt=""
              />
            </slide>
            <slide :index="1">
              <img
                src="../../../assets/ourStory/our_story1.jpg"
                width="auto"
                height="100%"
                style="object-fit: cover"
                alt=""
              />
            </slide>
            <slide :index="2">
              <img
                src="../../../assets/ourStory/our_story3.jpg"
                width="auto"
                height="100%"
                style="object-fit: cover"
                alt=""
              />
            </slide>
            <slide :index="3">
              <img
                src="../../../assets/corporate/image1.jpg"
                width="auto"
                height="100%"
                style="object-fit: cover"
                alt=""
              />
            </slide>
            <slide :index="4">
              <img
                src="../../../assets/corporate/image2.jpg"
                width="auto"
                height="100%"
                style="object-fit: cover"
                alt=""
              />
            </slide>
            <slide :index="5">
              <img
                src="../../../assets/home/hero.jpg"
                width="auto"
                height="100%"
                style="object-fit: cover"
                alt=""
              />
            </slide>
            <slide :index="6">
              <img
                src="../../../assets/ourStory/our_story3.jpg"
                width="auto"
                height="100%"
                style="object-fit: cover"
                alt=""
              />
            </slide>
          </carousel-3d>
        </div>
      </b-container>
    </section>

    <!-- Fourth Section - Daily Services Destination -->
    <section class="sec_4">
      <b-container>
        <div class="py-5 text-center">
          <h1 class="py-1 fw-bold">Our Airports</h1>
          <p class="text-muted"></p>
        </div>
        <Services />
      </b-container>
    </section>

    <!-- Blank -->
    <div class="blank_sec_5 bh-white py-5"></div>
  </div>
</template>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
<script>
import CardImage from "../components/imageCard.vue";
import Services from "../components/services.vue";
// import Footer from "../components/footer.vue"

import { Carousel3d, Slide } from "vue-carousel-3d";
export default {
  data() {
    return {
      baseUrl: window.location.origin,
    };
  },
  components: {
    CardImage,
    Carousel3d,
    Slide,
    Services,
  },
  methods: {
    changeRouter() {
      console.log("clicked");
      this.$router.push("/our-story");
    },
  },
};
</script>
<style scoped>
@import "../styles/hero.css";
</style>
