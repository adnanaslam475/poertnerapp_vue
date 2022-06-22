<template>
  <div class="d-flex flex-row card rounded custom-round">
    <FacilityText />
    <b-row class="px-4 scroll my-3">
      <b-col
        v-for="(ele, index) in data"
        :key="index"
        class=""
        md="4"
        sm="12"
        xs="12"
      >
        <FacilityElement :data="ele" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import FacilityElement from "./facilityElement";
import FacilityText from "./Facilities-text";
export default {
  name: "Facility",
  props: { data: Object },
  components: { FacilityElement, FacilityText },
};
</script>
<style scoped>
.facilities{
  border-radius: 5%;
}
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
