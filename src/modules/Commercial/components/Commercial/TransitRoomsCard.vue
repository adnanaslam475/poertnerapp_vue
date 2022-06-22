<template>
  <div class="card rounded custom-round px-2" :style="{height:height}">
    <div class="card-body">
      <h6 class="text-start text-wrap g-color">Transit Rooms</h6>

      <p class="text-start text-wrap p-font">
        Dheyvis Inn is a transit stop located in Hanimaadhoo within the bounds of the Airport. There are varieties of contemporary rooms to choose from. Named after the first settlers of Maldives, this transit stop is a way into the past culture of Maldives. Each room has a pamphlet with the cultural side of Maldives and history within the nearby local islands for our guests to read up on.
        <br>
        Standard rooms are located just a few meters away from the arrival lounge of the airport. Surrounded by nature, this option is perfect for individuals who want tranquility away from the hustle of the city life.
        <br>
        The beachfront rooms are located right in front of the beach. Just 2 mins away from your doorstep, you will find the sandy beaches and turquoise ocean. Perfect for couples on a budget who want to have a mini get away to enjoy the sunny side of paradise.
        <br>
        Located near a beautiful reef, this transit stop is perfect for diving enthusiast who want to explore the depts of Haa Dhaal’s beautiful lagoons. Dolphin siting’s have also been recorded near Hanimaadhoo island.
        <br />
        <br />
        The transit stop also offers other activities such as:
      </p>
      <ul>
        <li>Beach BBQ set up </li>
        <li>Coconut water refreshers from Thoshali</li>
        <li>Water sports with additional charge</li>
        <li>Bed & Breakfast </li>
        <li>Island Tours</li>
        <li>Island Hopping</li>
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