<template>
  <b-container>
    <div class="d-flex justify-content-center m-3 p-3" v-if="load">
      <div class="spinner-border text-dark text-center" role="status"></div>
    </div>
    <b-row class="mt-5" v-else>
      <b-col
        md="6"
        sm="12"
        xs="12"
        class="mb-3"
        v-for="(n, index) in data"
        :key="index"
      >
        <TeamCard :data="n" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import TeamCard from "../Team/components/TeamCard.vue";
import axios from "axios";

export default {
  components: { TeamCard },
  data() {
    return {
      load: true,
      data: [
        {
          name: "Mohamed Rizvi",
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
        },
        {
          name: "Mohamed Rizvi",
          designation: "Managing Director",
          image: "https://i.imgur.com/8RKXAIV.jpg",
        },
      ],
    };
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
