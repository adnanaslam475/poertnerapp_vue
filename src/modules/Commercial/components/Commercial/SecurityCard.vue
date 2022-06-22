<template>
  <div class="card rounded custom-round px-2" :style="{height:height}">
    <div class="card-body">
      <h6 class="text-start text-wrap g-color">Security & surveillance</h6>

      <p class="text-start text-wrap p-font">
        Regional Airports company provides security and surveillance devices. Being the sole distributor of Rapiscan machines, Regional Airports Company can cater to the client’s requirements to provide customized Rapiscan systems.
      </p>
      <ul>
        <li>
          Rapiscan support specialists work with a variety of global clients to identify vulnerabilities and install custom solutions to prevent potential threats.</li>
        <li>Rapiscan® Systems aviation screening solutions are approved by international transportation agencies including the U.S. Transportation Security Administration (TSA), Transport Canada (TC), the European Civil Aviation Conference (ECAC), France Civil Aviation Authority (STAC) and the U.K. Department for Transport (DfT)</li>
        <li>Rapiscan® Systems and S2 Global have provided security most recently for FIFA World Cup 2010, Vancouver 2010 Olympics, London 2012 Olympics, Sochi 2014 Olympics, U.S. Open Tennis Championships, Glasgow 2014 Commonwealth Games and Gold Coast 2018 Commonwealth Games. Our first Olympics was in 1998 and we look forward to providing safe environments for the next games</li>
      </ul>
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