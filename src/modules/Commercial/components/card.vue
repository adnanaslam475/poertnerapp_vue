<template>
  <div class="card rounded custom-round px-2">
    <div class="card-body">
      <h4 class="text-start text-wrap">Commercial</h4>
      <h6 class="text-start text-wrap g-color">Advertising Opportunities</h6>

      <p class="text-start text-wrap p-font">
        Regional Airports Company Limited has currently 6 airports scattered
        throughout Maldives which ensures %100 exposure through the country
        <br />
        <br />

        RACL has come up with the Advertising opportunities for suitable parties
        to advertise with our company.

        <br />
        <br />
        From billboard leasing, to trolley slots, all are available for
        companies that want to have a wider exposure, digital slots and many
        more ideas that can be referred to on the attached media kit
        <br />
        <br />
      </p>
      <div class="d-flex justify-content-between">
        <b> To Download Media Kit: </b>
        <button class="btn button-box">Click Here</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Card",
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
