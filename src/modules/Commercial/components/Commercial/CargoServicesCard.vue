<template>
  <div class="card rounded custom-round px-2" :style="{height:height}">
    <div class="card-body">
      <!-- <h4 class="text-start text-wrap">Commercial</h4> -->
      <h6 class="text-start text-wrap g-color">Cargo Services</h6>

      <p class="text-start text-wrap p-font">
        At Regional Airports Company Limited we have expanded our services to offer Cargo & other services to our
        customers. We will be utilizing all the airports managed under RACL to make Halikan services an effective and
        reliable service that caters to customers around the country. With airports up north and far south we are
        certain Halikan services would prove to be one of the most flexible and operative service. With 6 airports at
        our disposal, we have created a range of services to cater for our customers. Each destination will be utilized
        to the maximum potential to offer the best service in the country.
        <br />
        <br />
      </p>
      <ul>
        <li>
          <h6 class="g-color">Door Step Delivery</h6>
          <p class="text-start text-wrap p-font">
            Receiving finger food and other gifts from family, and sending goods back has become as easy as ordering
            your online packages now. From our airports and the nearby islands, cargo can be delivered to and from your
            doorstep. At the convenience of your homes, our agents will provide door step delivery of your cargo. Now
            you don’t have to wait for the next person who travels from your island to receive your goodies, turn to our
            service for a prompt delivery service.
          </p>
        </li>
        <li>
          <h6 class="g-color">Excess Baggage Counter</h6>
          <p class="text-start text-wrap p-font">
            Every traveler goes through the stress of weighing their luggage prior to checking in to ensure they are within the allowed weight. Now you don’t have to worry about excess baggage. At our airports, excess baggage can be a hassle of the past, we will deliver your baggage to your desired destination once you check the excess baggage into our counters providing a hassle-free service to ensure convenience for our customers.
          </p>
        </li>
        <li>
          <h6 class="g-color">Air Cargo</h6>
          <p class="text-start text-wrap p-font">
            From 6 different airports and the neighboring islands, our agents will pick up the cargo from your door step to the airports for air freight. Small business owners in islands can now conveniently send their items to and from different parts of the country. Agricultural, perishable items can all be sent through our Air cargo service without the hassle of loading and unloading from boats whose ETA depends entirely on the weather conditions and calmness of the sea. 
          </p>
        </li>
        <li>
          <h6 class="g-color">Cold Storage</h6>
          <p class="text-start text-wrap p-font">
            In addition to leasing land for warehouse purposes, we have gone the extra mile and provide cold storage leasing services for your perishable goods. We can store your perishable items for you once the air cargo arrives until you need to access to the goods, making this service convenient.
          </p>
        </li>
        <li>
          <h6 class="g-color">Leasing</h6>
          <p class="text-start text-wrap p-font">
            At our airports, we will now be leasing land for warehouse operations. Businesses that want a spacious area to carry out their work efficiently, may now approach us to lease land from us from different parts of the country. You can base your main distribution chains from either the south end or north end, we have options for you scattered around the tiny island of Maldives. Your convenience is our utmost priority.
          </p>
        </li>
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