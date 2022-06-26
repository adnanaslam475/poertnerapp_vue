<template>
<div>

      <PageHeader 
    :image="require('@/assets/ourStory/our_story3.jpg')" 
    :heading="'Team Management'"
    :sub_heading="'sub heading of team management'" />

  <b-container>
    <div class="d-flex justify-content-center m-3 p-3" v-if="load">
      <div class="spinner-border text-dark text-center" role="status"></div>
    </div>
    <b-row class="mt-3" v-else>
      <!-- <h1 class="text-center py-3">Team Management</h1> -->
      <b-col md="2" sm="12" xs="12" class="mb-1" v-for="(n, index) in data" :key="index">
        <ManagementTeamCard :data="n"/>
      </b-col>
      <div :class="'details px-5'">
        <h5 class="">{{ data[0].name }}</h5>
        <h5 class="">{{ data[0].designation }}</h5>
      </div>
    </b-row>
  </b-container>
</div>

</template>

<script>
import ManagementTeamCard from "../components/managementTeamCard.vue";
  import PageHeader from "@/modules/misc/PageHeader.vue"
import axios from "axios";

export default {
  components: { ManagementTeamCard,PageHeader },
  data() {
    return {
      load: true,
      data: [
        {
          name: "Junaid",
          designation: "Managing Director",
          image: "./assets/images/team/1.png",
        },
        {
          name: "Mohamed Rizvi",
          designation: "Managing Director",
          image: "https://i.imgur.com/8RKXAIV.jpg",
        },
        {
          name: "Muhammad Hassnain",
          designation: "Managing Director",
          image: "https://i.imgur.com/8RKXAIV.jpg",
        },
        {
          name: "Haseebullah",
          designation: "Managing Director",
          image: "https://i.imgur.com/8RKXAIV.jpg",
        },
        {
          name: "Mohamed Rizvi",
          designation: "Managing Director",
          image: "https://i.imgur.com/8RKXAIV.jpg",
        },
        {
          name: "Mohamed Rizvi",
          designation: "Managing Director",
          image: "https://i.imgur.com/8RKXAIV.jpg",
        }
      ],
    };
  },
  methods: {
    hoverMe(n){
      this.name = this.data[n].name;
      this.designation = this.data[n].designation;
    },
    clickMe(index){
      console.log(index);
      console.log(this.data[index].name);
    }
  },
  created() {
    axios
      .get(process.env.VUE_APP_BASE_URL + "managments")
      .then((response) => {
        this.data = response.data.data;
        this.load = false;
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
        this.load = false;
      })
      .finally(() => (this.loading = false));
  },
};
</script>
<style>
.app {
    background-color: white;
    /* background-color: #f4f4f4; */
}
.details{
  background-color: #f4f4f4;
  border-radius: 5%;
  display: none;
}
.display_details{
  display: block !important;
}
</style>
