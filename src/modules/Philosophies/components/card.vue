<template>
  <div class="card rounded custom-round px-2" :style="{height:height,objectFit:object_fit}">
    <div class="card-body">
      <div class="text-start">
        <b-icon
          class="h2 mb-2 border rounded p-2"
          :icon="icon"
          style="color: #d1b000"
        ></b-icon>
        <h5 class="h5 card-title">{{ heading }}</h5>
      </div>
      <p class="text-start text-wrap p-font">
        {{ text }}
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Card",
    props: {
      text: String,
      heading: String,
      icon: String,
      height: { type: String, default: "" },
      object_fit: { type: String, default: "" },
    },
  }
</script>
<style scoped>
  .custom-round {
    border-radius: 1rem !important;
  }
  .p-font {
    font-size: 0.8rem;
    line-height: 2em;
  }
</style>
