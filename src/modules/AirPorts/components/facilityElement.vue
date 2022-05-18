<template>
  <div>
    <b-icon :icon="data.icon" style="color: #ad7525"></b-icon>
    <p class="text-size mt-2">
      <span class="fw-bold"> {{ data.name }} </span>
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
