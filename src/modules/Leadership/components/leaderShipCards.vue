<template>
  <div class="card rounded custom-round px-2">
    <img
      class="card-img-top rounded custom-round p-1"
      :src="url + data.cover_image"
      alt="Card image cap"
    />
    <div class="card-body little-profile px-5">
      <div class="d-flex justify-content-start pro-img text-start">
        <img :src="url + data.profile_image" alt="user" />
        <span class="ms-3 pb-4 m-b-0 text-start pro-text">
          <span class="h4 d-block prof-name"> {{ data.name }} </span>
          <span class="p d-block desig"> {{ data.designation }} </span>
        </span>
      </div>

      <p class="text-start p-font" v-html="data.description">
        <!-- {{ data.content }} -->
      </p>
    </div>
  </div>
</template>

<script>
export default {
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
.padding {
  padding: 3rem !important;
  /* margin-left: 200px; */
}

.card-img-top {
  height: 300px;
}
.custom-round {
  border-radius: 1rem !important;
}
.card-no-border .card {
  border-color: #d7dfe3;
  border-radius: 4px;
  margin-bottom: 30px;
  -webkit-box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.05);
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.05);
}

.card-body {
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 1.25rem;
}

.pro-img {
  margin-top: -80px;
  margin-bottom: 20px;
}

.pro-text {
  margin-top: 65px !important;
}

.little-profile .pro-img img {
  width: 128px;
  height: 128px;
  -webkit-box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.2);
  border-radius: 100%;
}

html body .m-b-0 {
  margin-bottom: 0px;
}

h3 {
  line-height: 30px;
  font-size: 21px;
}

.btn-rounded.btn-md {
  padding: 12px 35px;
  font-size: 16px;
}

html body .m-t-10 {
  margin-top: 10px;
}

.btn-primary,
.btn-primary.disabled {
  background: #7460ee;
  border: 1px solid #7460ee;
  -webkit-box-shadow: 0 2px 2px 0 rgba(116, 96, 238, 0.14),
    0 3px 1px -2px rgba(116, 96, 238, 0.2), 0 1px 5px 0 rgba(116, 96, 238, 0.12);
  box-shadow: 0 2px 2px 0 rgba(116, 96, 238, 0.14),
    0 3px 1px -2px rgba(116, 96, 238, 0.2), 0 1px 5px 0 rgba(116, 96, 238, 0.12);
  -webkit-transition: 0.2s ease-in;
  -o-transition: 0.2s ease-in;
  transition: 0.2s ease-in;
}

.btn-rounded {
  border-radius: 60px;
  padding: 7px 18px;
}
.p-font {
  font-size: 0.8rem;
  line-height: 2em;
}
.m-t-20 {
  margin-top: 20px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: #455a64;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
}

p {
  margin-top: 0;
  margin-bottom: 1rem;
}

.desig {
  font-size: 13px;
  color: grey;
}

.prof-name {
  margin-bottom: 2px !important;
}
</style>
