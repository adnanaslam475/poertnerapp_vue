<template>
  <div>
        <PageHeader 
    :image="require('@/assets/ourStory/our_story1.jpg')" 
    :heading="'Airports'"
    :sub_heading="'sub heading of airports'" />
    <div class="d-flex justify-content-center m-3 p-3" v-if="load">
      <div class="spinner-border text-dark text-center" role="status"></div>
    </div>
    <v-fragment class="d-flex flex-row background-repeater-custom" v-if="!load">
    <!-- Sidebar -->
      <div
        class="nav d-flex flex-column justify-content-center align-items-center main-container-bg topBottomRadius py-3 sidebar"
        v-if="!load">
        <div class="nav flex-column nav-pills mb-3 nav-scroll" id="v-pills-tab" role="tablist"
          aria-orientation="vertical">
          <div class="nav-item d-flex flex-column justify-content-center align-items-center">
            <router-link v-for="(ele, i) in data" :key="i" to="/airports" :class="getClass(i)">
              <div @click="activeAirport(i)" class="d-flex align-items-center side_image">
                <img :src="require('@/assets/airports/sidebar/1.jpeg')" width="90" height="90" class="img-class d-flex text-center"/>
                <div class="centered">HNV</div>
                <!-- <p class="text-capitalize pl-3">
                  {{ ele.name }}
                </p> -->
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div style="width: 100%" class="mx-3" v-if="!load">
        <b-row class="mx-3" v-for="(ele, i) in data" :key="i">
          <b-col md="12" sm="12" xs="12" class="pt-3" v-if="ele.active">
            <AirportCard :data="ele" />
          </b-col>
          <b-col md="6" sm="12" xs="12" class="mt-2" v-if="ele.active">
            <Detail :data="ele.service" />
          </b-col>
          <b-col md="6" sm="12" xs="12" class="mt-2" v-if="ele.active">
            <Facility :data="ele.facilities" />
            <br />
            <br />
            <br />
            <br />
          </b-col>
        </b-row>
      </div>
    </v-fragment>
  </div>
</template>

<script>
import AirportCard from "../components/airportCards.vue";
import Detail from "../components/detail.vue";
import Facility from "../components/Facilities.vue";
  import PageHeader from "@/modules/misc/PageHeader.vue"
import axios from "axios";
export default {
  components: { AirportCard, Detail, Facility, PageHeader },
  data() {
    return {
      url: process.env.VUE_APP_IMAGE_URL,
      load: true,
      data: {
        name: "Hoarafushi Airport",
        content:
          "Hoarafushi is the northern most airport in the Maldives with a residing population of 2048 people within the island. The island consists of beautiful sandy beaches  and the surrounding blue lagoon that can be observed from all around the island. The construction of the Hoarafushi Airport began on 18th April 2019. A little over a  year later the airport was officially opened on the 19th of November 2020 by President Ibrahim Mohamed Solih. Hoarafushi Airport serves as the sole air-port of transportation throughout the HA Atoll, with a residing population of roughly 17,389 people",
        image: "https://i.imgur.com/8RKXAIV.jpg",
        background:
          "https://images.unsplash.com/photo-1542296332-2e4473faf563?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
    };
  },
  created() {
    axios
      .get(process.env.VUE_APP_BASE_URL + "airports")
      .then((response) => {
        this.data = response.data.data;

        this.data.forEach((element, key) => {
          if (key == 0) element.active = true;
          else element.active = false;
        });
        this.load = false;
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
        this.load = false;
      })
      .finally(() => (this.loading = false));
  },
  methods: {
    getClass(i) {
      return (
        "d-flex flex-column justify-content-center align-items-center container-bg p-2" +
        (this.data[i].active ? " active-class" : "")
      );
    },
    activeAirport(index) {
      let temp = this.data;
      this.data = [];
      temp.forEach((element) => {
        element.active = false;
      });
      temp[index].active = true;
      this.data = temp;
    },
  },
};
</script>
<style scoped>
@import '../styles/index.css';
</style>
