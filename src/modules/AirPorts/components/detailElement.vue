<template>
  <div class="card border-0 rounded custom-round pt-1">
    <p class="text-size mt-2 text-center">
      <span class="fw-bold"> {{ data.name }} :</span>
      {{ data.value }}
    </p>
  </div>
</template>

<script>
export default {
  name: "DetailElement",
  props: { data: Object },
};
</script>
<style scoped>
.custom-round {
  background-color: #f9f4ed;
  border-radius: 1rem !important;
}
.text-size {
  font-size: 0.7rem;
}
</style>
