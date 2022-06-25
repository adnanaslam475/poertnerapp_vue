<template>
  <div>
    <!-- Hero -->
    <div class="home-content">
      <img class="hero_image" src="@/assets/ourStory/our_story1.jpg" alt="">
      <div class="banner-image w-100 vh-100 d-flex align-items-stretch align-items-center">
        <div class="container w-90 d-flex justify-content-between">
          <div class="d-flex flex-column justify-content-center w-75 index-1">
            <h4 class="text-box">Regional Airports</h4>
            <h4 class="text-box">Company Limited</h4>
            <p class="para-box para-width">
              RACL is 100% percent government-owned company incorporated on 11
              January 2021,to manage domestic airports in Maldives
            </p>
            <button class="btn btn-box more_details_btn" @click="changeRouter()">
              Learn More
            </button>
          </div>
          <p class="para-box para-diection d-flex justify-content-center align-items-end year">
            2022
          </p>
        </div>
      </div>
    </div>
    <!-- Second Section -->
    <b-container>
      <div class="py-5 text-center second_heading">
        <h1 class="py-1 fw-bold">Hello! We Have A New Visitor. Welcome, On-Board!</h1>
        <p class="text-muted">Hello! We Have A New Visitor. Welcome, On-Board! Hello! We Have A New Visitor. Welcome,
          On-Board! Hello! We
          Have A New Visitor. Welcome, On-Board!</p>
      </div>
      <b-row class="d-flex align-items-center">
        <b-col cols="6" class="pr-0 aircraft_parent">
          <CardImage :image="require('@/assets/commercial/delivery.jpg')" :height="'400px'" :object_fit="'cover'"
            class="aircraft_image" />
          <div class="aircraft_child text-center">
            <h1 class="fw-bold">On-Board Courier</h1>
            <a href="#" class="btn btn-box-2 mt-2">Learn More</a>
          </div>
        </b-col>
        <b-col cols="6">
          <b-row class="">
            <b-col class="aircraft_parent">
              <CardImage :image="require('@/assets/ourStory/our_story2.jpg')" :height="'200px'" :object_fit="'cover'"
                class="aircraft_image" />
              <div class="aircraft_child text-center">
                <h6>On-Board Courier</h6>
                <a href="#" class="btn btn-box-2 mt-2">Learn More</a>
              </div>
            </b-col>
            <b-col class="aircraft_parent">
              <CardImage :image="require('@/assets/commercial/air_cargo.jpg')" :height="'200px'" :object_fit="'cover'"
                class="aircraft_image" />
              <div class="aircraft_child text-center">
                <h6>Private & VIP Jet Charters</h6>
                <a href="#" class="btn btn-box-2 mt-2">Learn More</a>
              </div>
            </b-col>
          </b-row>

          <b-row>
            <b-col class="pt-1 aircraft_parent">
              <CardImage :image="require('@/assets/corporate/image1.jpg')" :height="'200px'" :object_fit="'cover'"
                class="aircraft_image" />
              <div class="aircraft_child text-center">
                <h1>Aircraft Leasing & Trading</h1>
                <a href="#" class="btn btn-box-2 mt-2">Learn More</a>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row class="pt-1">
        <b-col class="aircraft_parent">
          <CardImage :image="require('@/assets/home/hero.jpg')" :height="'400px'" :object_fit="'cover'"
            class="aircraft_image" />
          <div class="aircraft_child text-center">
            <h1>Aircraft Leasing & Trading</h1>
            <a href="#" class="btn btn-box-2 mt-2">Learn More</a>
          </div>

        </b-col>
      </b-row>
    </b-container>

    <!-- Third Section -->
    <b-container>
      <div class="py-5 text-center">
        <h1 class="py-1 fw-bold">The best place for you to travel</h1>
        <p class="text-muted">Hello! We Have A New Visitor. Welcome, On-Board! Hello! We Have A New Visitor.</p>
      </div>
      <div>
        <carousel-3d>
          <slide :index="0">
            <!-- Slide 1 Content -->
            <img src="../../../assets/ourStory/our_story2.jpg" width="auto" height="100%" style="object-fit: cover;"
              alt="">
          </slide>
          <slide :index="1">
            <img src="../../../assets/ourStory/our_story1.jpg" width="auto" height="100%" style="object-fit: cover;"
              alt="">
          </slide>
          <slide :index="2">
            <img src="../../../assets/ourStory/our_story3.jpg" width="auto" height="100%" style="object-fit: cover;"
              alt="">
          </slide>
          <slide :index="3">
            <img src="../../../assets/corporate/image1.jpg" width="auto" height="100%" style="object-fit: cover;"
              alt="">
          </slide>
          <slide :index="4">
            <img src="../../../assets/corporate/image2.jpg" width="auto" height="100%" style="object-fit: cover;"
              alt="">
          </slide>
          <slide :index="5">
            <img src="../../../assets/home/hero.jpg" width="auto" height="100%" style="object-fit: cover;" alt="">
          </slide>
          <slide :index="6">
            <img src="../../../assets/ourStory/our_story3.jpg" width="auto" height="100%" style="object-fit: cover;"
              alt="">
          </slide>
        </carousel-3d>
      </div>
    </b-container>

    <!-- Fourth Section - Daily Services Destination -->
    <b-container>
      <div class="py-4 text-center">
        <h1 class="py-1 fw-bold">Daily Services Destination</h1>
        <p class="text-muted">Hello! We Have A New Visitor. Welcome, On-Board! Hello! We Have A New Visitor.
        </p>
      </div>
    <Services />
    </b-container>

    <!-- Footer -->

    <footer class="container-fluid footer_background py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <div class="row">
              <div class="col-md-12 ">
                <div class="logo-part">
                  <img src="../../../assets/logo.png" class="w-50 logo-footer">
                  <h1 class="under_logo">Subscribe here</h1>
                  <!-- <form class="form-footer my-3">
                    <input type="text" placeholder="Email Address" name="search">
                    <input type="button" value="Go">
                  </form> -->
                </div>
              </div>

            </div>
          </div>
          <div class="col-md-9">
            <div class="row">
              <div class="col-md-3 px-4">
                <h5 class="col_heading">Company Info</h5>
                <a href="#" class="btn-footer"> About Us </a><br>
                <a href="#" class="btn-footer"> Our Philosophies </a><br>
                <a href="#" class="btn-footer"> We are hiring </a><br>
                <a href="#" class="btn-footer"> Blog </a><br>
              </div>
              <div class="col-md-3 px-4">
                <h5 class="col_heading">Features</h5>
                <a href="#" class="btn-footer"> About Us </a><br>
                <a href="#" class="btn-footer"> Our Philosophies </a><br>
                <a href="#" class="btn-footer"> We are hiring </a><br>
                <a href="#" class="btn-footer"> Blog </a><br>
              </div>
              <div class="col-md-3 px-4">
                <h5 class="col_heading">Legal</h5>
                <a href="#" class="btn-footer"> About Us </a><br>
                <a href="#" class="btn-footer"> Our Philosophies </a><br>
                <a href="#" class="btn-footer"> We are hiring </a><br>
                <a href="#" class="btn-footer"> Blog </a><br>
              </div>
              <div class="col-md-3 px-4">
                <h5 class="col_heading">Get in touch</h5>
                <div class="d-flex align-items-center">
                  <img src="../../../assets/footer/phone-solid.svg" width="30px" height="30px" alt="">
                  <a href="#" class="btn-footer px-2"> 
                    +960 330 6969 </a><br>
                </div>
                <div class="d-flex align-items-center">
                  <img src="../../../assets/footer/location-dot-solid.svg" width="30px" height="30px" alt="">
                  <a href="#" class="btn-footer px-2"> 
                    H. Suez 6th & 7th Floor, Ameeru Ahmed Magu, Male’ </a><br>
                </div>
                <div class="d-flex align-items-center">
                  <img src="../../../assets/footer/envelope-solid.svg" width="30px" height="30px" alt="">
                  <a href="#" class="btn-footer px-2"> 
                    info@airports.mv </a><br>
                </div>
              </div>
              <!-- <div class="col-md-6 px-4">
                <h6 class="col_heading"> Legal</h6>
                <div class="row ">
                  <div class="col-md-6">
                    <ul>
                      <li> <a href="#"> Home</a> </li>
                      <li> <a href="#"> About</a> </li>
                      <li> <a href="#"> Service</a> </li>
                      <li> <a href="#"> Team</a> </li>
                      <li> <a href="#"> Help</a> </li>
                      <li> <a href="#"> Contact</a> </li>
                    </ul>
                  </div>
                  <div class="col-md-6 px-4">
                    <ul>
                      <li> <a href="#"> Cab Faciliy</a> </li>
                      <li> <a href="#"> Fax</a> </li>
                      <li> <a href="#"> Terms</a> </li>
                      <li> <a href="#"> Policy</a> </li>
                      <li> <a href="#"> Refunds</a> </li>
                      <li> <a href="#"> Paypal</a> </li>
                    </ul>
                  </div>
                </div>
              </div> -->
            </div>
          </div>
        </div>
      </div>
      <div>

      </div>

    </footer>
    <b-container class="bg-light d-flex align-items-center justify-content-between py-3">
      <div>
        <h6>Regional Airports Company Limited. All Right Reserved ©. 2022.</h6>
      </div>
      <div class="social">
        <ul>
          <li>
            <a href="#">
              <img class="footer_icon" src="../../../assets/home/icons/facebook-brands.svg" width="40px" height="40px" alt="">
            </a>
          </li>
          <li>
            <a href="#">
              <img src="../../../assets/home/icons/instagram-brands.svg" width="40px" height="40px" alt="">
            </a>
          </li>
          <li>
            <a href="#">
              <img src="../../../assets/home/icons/twitter-brands.svg" width="40px" height="40px" alt="">
            </a>
          </li>
        </ul>
      </div>
    </b-container>
  </div>
</template>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
<script>
  import CardImage from "../components/imageCard.vue"
  import Services from "../components/services.vue"

  import {
    Carousel3d,
    Slide, 
  } from 'vue-carousel-3d';
  export default {
    data() {
      return {}
    },
    components: {
      CardImage,
      Carousel3d,
      Slide,
      Services
    },
    methods: {

    }
  }
</script>
<style scoped>
  @import '../styles/hero.css';
  @import '../styles/footer.css';
</style>