<template>
  <div>

    <PageHeader :image="require('@/assets/ourStory/our_story2.jpg')" :heading="'Our Leadership'"
      :sub_heading="'sub heading of our leadership'" />

    <div class="d-flex justify-content-center m-3 p-3" v-if="load">
      <div class="spinner-border text-dark text-center" role="status"></div>
    </div>
    <v-fragment class="d-flex flex-row background-repeater-custom">
      <div
        class="nav d-flex flex-column grad justify-content-center align-items-center main-container-bg topBottomRadius p-5"
        v-if="!load">
        <div class="nav flex-column nav-pills grad mb-3 nav-scroll" id="v-pills-tab" role="tablist"
          aria-orientation="vertical">
          <div class="nav-item d-flex flex-column justify-content-center align-items-center">
            <router-link v-for="(ele, i) in data" :key="i" to="/Leadership" :class="getClass(i)">
              <div @click="activeLeadership(i)">
                <img :src="require(`@/assets/leadership/profile_images/${ele.profile_image}`)" width="90" height="90"
                  class="img-class" :style="{objectFit:'cover'}" />
                <!-- <img
                  :src="url + ele.cover_image"
                  width="90"
                  height="90"
                  class="img-class"
                /> -->
              </div>
              <p class="text-capitalize text-center">
                {{ ele.name }}
              </p>
            </router-link>
          </div>
        </div>
      </div>
      <div style="width: 100%" class="mx-3" v-if="!load">
        <b-row v-for="(ele, i) in data" :key="i">
          <b-col md="12" sm="12" xs="12" v-if="ele.active">
            <LeaderShipCard :data="ele" />
          </b-col>
        </b-row>
      </div>
    </v-fragment>
  </div>
</template>

<script>
  import LeaderShipCard from "../components/leaderShipCards.vue";
  import PageHeader from "@/modules/misc/PageHeader.vue"
  import axios from "axios";

  export default {
    components: {
      LeaderShipCard,
      PageHeader
    },
    data() {
      return {
        url: process.env.VUE_APP_IMAGE_URL,
        load: true,
        data: {
          name: "Mohamed Rizvi",
          designation: "Managing Director",
          content: "Mr. Rizvi was appointed as the Managing Director at Regional Airports Company Limited on the 07th January 2021. Prior to Mr. Rizvi joining Regional Airports Company Limited as its Managing Director; he was the Managing Director of the National Airline Carrier of Maldives – Maldivian. He began his carrier in the aviation industry as a Sales and Ground Services Agent Manager. He has worked in various positions from middle management to the top management and executive level in the tourism industry and aviation sector for over seventeen years; in the areas mainly from Sales to Business Development. His remarkable services in the non-executive level includes his term as the Chairman at Maldives Post Limited and as the Vice President at Maldives National Chamber of Commerce and Industry. Although his primary work experience is based more on airline management, he has undergone trainings in order to familiarise himself in airport management field so as to understand the managerial aspects of the airport management segment of aviation",
          image: "https://i.imgur.com/8RKXAIV.jpg",
          background: "https://i.imgur.com/K7A78We.jpg",
        },
        values: {
          icon: "eye-fill",
          text: "At Regional Airports Company we pride ourselves in being the sole gateway of air travel to and from islands around the tiny paradise of Maldives. We provide abundant investment and advertising opportunities for our customers to grow with us through innovative approaches. In order to ensure the safety of our customers, stakeholders and employees we work on the clock which also allows to nurture the relationships for the years to come. Moreover, this also enables the company to hold ourselves accountable by taking leadership and initiative in mandating professional work ethics. ",
          heading: "Our Values",
        },
      };
    },
    created() {
      axios
        .get(process.env.VUE_APP_BASE_URL + "leaderships")
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
      activeLeadership(index) {
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

  .active-class {
    height: fit-content;
    width: fit-content;
    text-decoration: none;
  }

  .active-class .icon-container {
    cursor: pointer;
    border-radius: 10px;
    background-color: #b39032;
  }

  .active-class i {
    color: white;
  }

  .active-class p {
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

  .background-repeater-custom {
    /* background-repeat: repeat-x repeat-y;
  background: url("../../../assets/background.jpeg"); */
  }

  .nav-scroll {
    height: 100vh;
    overflow-y: scroll;
  }

  .nav-scroll ::-webkit-scrollbar {
    display: none;
  }

  ::-webkit-scrollbar {
    display: none;
  }
</style>