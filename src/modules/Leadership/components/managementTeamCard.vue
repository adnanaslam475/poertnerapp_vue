<template>
  <div class="image_card text-center">
        <!-- <img :src="require('@/assets/team/1.png')"/> -->
        <img :src="url +data.photo" :style="{objectFit:`cover`}"/>
        <h5 class="person_name py-2">{{ data.name }}</h5>
        <h6 class="person_name">{{ data.designation }}</h6>
  </div>
</template>

<script>
export default {
  name: "ManagementTeamCard",
  props: {
    data: Object,
  },
  data() {
    return {
      url: process.env.VUE_APP_IMAGE_URL,
    };
  },
};
</script>
<style scoped>
.custom-round {
  border-radius: 1rem !important;
}

.p-font {
  font-size: 0.8rem;
  line-height: 2em;
}

img {
  /* border-radius: 50%; */
  -webkit-filter: grayscale(100%);
  /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
  max-width: 100%;
  /* border-radius: 10%; */
  transition: 0.5s ease;
}

img:hover {
  -webkit-filter: grayscale(0%);
  /* Safari 6.0 - 9.0 */
  filter: grayscale(0%);
  cursor: pointer;
  border-radius: 10%;
  transition: 0.5s ease;
}

.image_card:hover .details{
  display: block;
}
.person_name{
  height: 100%;
  visibility: hidden;
}
.image_card:hover .person_name{
  visibility: visible;
}

.ms-n1 {
  margin-left: -4.5rem !important;
}

@media only screen and (max-width: 600px) {
  .ms-s-n1 {
    margin-left: -4.25rem !important;
  }
}
</style>
