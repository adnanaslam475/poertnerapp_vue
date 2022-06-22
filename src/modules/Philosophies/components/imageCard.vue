<template>
  <div class="card rounded custom-round">
    <img
      class="rounded custom-round img-fluid"
      :src="image"
      alt="Card image cap"
      :style="{height:height,objectFit:object_fit}"
    />
  </div>
</template>

<script>
  export default {
    name: "CardImage",
    props: {
      image: { type: String, default: "" },
      height: { type: String, default: "" },
      object_fit: { type: String, default: "" },
    },
  }
</script>
<style scoped>
  .custom-round {
    border-radius: 1rem !important;
  }
</style>
