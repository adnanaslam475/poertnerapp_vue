<template>
  <div class="card rounded custom-round scroll">
    <b-row class="px-4">
      <b-col
        v-for="(ele, index) in data"
        :key="index"
        :data="ele"
        class="my-3"
        md="6"
        sm="12"
        xs="12"
      >
        <DetailElement :data="ele" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import DetailElement from "./detailElement"
  export default {
    name: "Detail",
    props: { data: Object },
    components: { DetailElement },
  }
</script>
<style scoped>
  .custom-round {
    border-radius: 1rem !important;
  }
  .scroll {
    min-height: 240px;
    max-height: 240px;
    overflow-y: auto;
    overflow-x: hidden;
  }
</style>
