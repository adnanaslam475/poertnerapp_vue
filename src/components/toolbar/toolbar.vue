<template>
  <div
    class="d-flex justify-content-between align-items-center story-box mb-5 mt-3"
  >
    <div :class="getActive()">
      <!-- <b-icon-book class="ms-4 me-3 fw-bold"></b-icon-book> -->
      {{ name }}
    </div>
    <button class="btn button-box">RACL</button>
  </div>
</template>

<script>
  export default {
    name: "ToolBar",
    props: {
      name: {
        type: String,
        default: "",
      },
      isActive: {
        type: Boolean,
        default: true,
      },
    },
    methods: {
      getActive() {
        console.log(
          (this.isActive ? "golden-color" : "") + " fw-bold story-text px-2"
        )
        return (
          (this.isActive ? "golden-color" : "") + " fw-bold story-text px-3"
        )
      },
    },
  }
</script>
<style scoped>
  .bg-light {
    background-color: #ffffff !important;
  }
  .story-box {
    font-size: 12px !important;
    background-color: white;
    border-radius: 30px;
    /* box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.1); */
    width: 100%;
    padding: 0px 0px 0px 0px;
  }

  .story-text {
    font-size: 16px;
  }

  .button-box {
    background-color: #b39032;
    border-radius: 30px;
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 10px;
    padding-bottom: 10px;
    color: white;
    font-weight: bold;
  }

  .back {
    background-color: white !important;
  }
  .golden-color {
    color: #b39032 !important;
  }
</style>
