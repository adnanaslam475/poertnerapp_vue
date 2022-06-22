<template>
  <div class="card rounded custom-round px-2" :style="{height:height}">
    <div class="card-body">
      <h6 class="text-start text-wrap g-color">Ground Handling</h6>

      <p class="text-start text-wrap p-font">
        The term "ground handling" in aviation refers to a wide range of services offered to support an aircraft flight or aircraft ground repositioning, as well as customer service and ramp service tasks, prior to and after a flight. Regional Airports Company Limited has Ground Power Units placed in Hanimaadhoo International Airport and Fuvahmulah that provides clean power for both maintenance and engine starting aircraft that are on the ground. 
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