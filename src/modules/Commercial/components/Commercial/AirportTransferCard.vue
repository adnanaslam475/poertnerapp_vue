<template>
  <div class="card rounded custom-round px-2" :style="{height:height}">
    <div class="card-body">
      <h6 class="text-start text-wrap g-color">Airport Transfer</h6>

      <p class="text-start text-wrap p-font">
        HRF Airport provides buggy transfer services to their customers.  You will not have to worry about your heavy luggage at HRF anymore, the staff will be ready to attend any individual who opts for Airport Transfer Service. 
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