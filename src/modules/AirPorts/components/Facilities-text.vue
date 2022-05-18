<template>
  <div class="d-flex justify-content-center align-items-center text-box">
    <p class="text-size mt-2">
      <span class="fw-bold"> Facilities </span>
    </p>
  </div>
</template>

<script>
export default {
  name: "FacilityText",
  props: { data: Object },
};
</script>
<style scoped>
.text-size {
  font-size: 1.2rem;
  writing-mode: tb-rl;
  transform: rotate(-180deg);
}

.text-box {
  background-color: #f9f4ed;
  border-radius: 1rem;
}
</style>
