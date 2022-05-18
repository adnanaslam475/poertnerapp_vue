<template>
  <div class="card custom-round float-right border-0 shadow-sm">
    <div class="row p-0 m-0">
      <div class="col-4">
        <img class="shadow-sm w-50 m-3" :src="url + data.photo" alt="" />
      </div>
      <div class="col-8 mt-4 ms-n1 ms-s-n1">
        <div class="card-block">
          <h5>{{ data.name }}</h5>
          <p>{{ data.designation }}</p>
        </div>
      </div>
    </div>
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
  border-radius: 50%;
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
