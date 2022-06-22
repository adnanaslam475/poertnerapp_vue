<template>
  <div class="card rounded custom-round px-2" :style="{height:height}">
    <div class="card-body">
      <h6 class="text-start text-wrap g-color">Airline Office</h6>

      <p class="text-start text-wrap p-font">
        There are opportunities to set up an airline office in any of our airports. With movement of the whole atoll in an out of our airports, the customer movement is guaranteed. For airline companies who are interested in setting up an airline office in one of our premises you may contact 
        <a href="mailto:info@airports.mv" class="email">info@airports.mv</a> or <a href="mailto:marketing@airports.mv" class="email">marketing@airports.mv</a> for more information. 
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

.email{
  color: #b39032;
  font-weight: bold;
}
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