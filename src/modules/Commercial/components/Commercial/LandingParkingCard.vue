<template>
  <div class="card rounded custom-round px-2" :style="{height:height}">
    <div class="card-body">
      <h6 class="text-start text-wrap g-color">Landing & Parking</h6>

      <p class="text-start text-wrap p-font">
        There are landing and parking opportunities for airlines who are interested. There is a wide array of services for those who are interested in travelling to any airports managed under RACL. 
  
        <br />
        <br />
      </p>
      <div class="d-flex justify-content-between align-items-center">
        <p> For further details and landing charges please email : </p>
        <a href="mailto:marketing@airports.mv." class="btn button-box">marketing@airports.mv</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Card",
    props:{
      data: Object,
      height: { type: String, default: "" },
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
