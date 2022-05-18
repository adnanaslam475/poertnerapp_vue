<template>
  <div>
    <div class="h5 mx-4 text-center elemet">
      <b-icon
        icon="camera"
        class="me-4 border bg-1 custom-round rounded p-2 onHover"
        font-scale="2"
      ></b-icon>
      <h6 class="text-center">Our Story</h6>
    </div>
    <div class="onHover">
      I am shown when someone hovers over the div above.
    </div>
  </div>
</template>
<script>
  export default {
    name: "NavbarElement",
  }
</script>
<style>
  .custom-round {
    border-radius: 1rem !important;
  }

  .elemet:hover + .onHover {
    color: red;
  }
</style>
