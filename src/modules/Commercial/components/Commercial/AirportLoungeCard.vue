<template>
  <div class="card rounded custom-round px-2" :style="{height:height}">
    <div class="card-body">
      <h6 class="text-start text-wrap g-color">Airport Lounge</h6>

      <p class="text-start text-wrap p-font">
        Regional Airports Company offers lounge services for their customers. Head to a lounge if you need to unwind, quiet, calm environments are our forte. Large, comfy chairs, entertainment, couches, fast Wi-Fi, showers, and other amenities can be found in the lounge. Our lounges also provide work areas where you may get some work done. If you plan to travel with our airports, you may call in advice to book your spot. 
        <br />
        <br />
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Card",
    props: {
      data: Object,
      height: {
        type: String,
        default: ""
      },
    }
  }
</script>
<style scoped>
  .custom-round {
    border-radius: 1rem !important;
  }

  .g-color {
    color: #b39032;
  }

  .p-font {
    font-size: 0.8rem;
    line-height: 2em;
  }

  .button-box {
    background-color: #b39032;
    border-radius: 30px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
    font-size: 12px;
    color: white;
    font-weight: bold;
  }
</style>