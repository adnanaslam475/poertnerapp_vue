<template>
  <div>
    <!-- <b-icon :icon="data.icon" style="color: #ad7525"></b-icon> -->
    <span></span>
    <p class="text-size mt-2">
      <font-awesome-icon :icon="data.icon" style="font-size: large; color:#B39032;"/>
      <br>
      <span class="fw-bold fz-15"> {{ data.name }} </span>
    </p>
  </div>
</template>

<script>
  export default {
    name: "FacilityElement",
    props: { data: Object },
  }
</script>
<style scoped>
  .text-size {
    font-size: 0.7rem;
  }
</style>
