<template>
  <b-container>

    <b-row class="py-4">
      <b-col cols="12" class="mh-100">
          <b-row>
            <b-col class="mb-4" cols="7">
              <Card :icon="this.rightData[0].icon" :heading="this.rightData[0].heading" :text="this.rightData[0].text" :height="'100%'" />
            </b-col>
            <b-col class="mb-4" cols="5">
              <Card :icon="this.rightData[2].icon" :heading="this.rightData[2].heading" :text="this.rightData[2].text" :height="'100%'" />
            </b-col>
          </b-row>

          <b-row>
            <b-col class="mb-4" cols="5">
              <Card :icon="this.rightData[1].icon" :heading="this.rightData[1].heading" :text="this.rightData[1].text" :height="'300px'" />
            </b-col>
            <b-col cols="7" class="mb-2">
              <CardImage :image="require('@/assets/philosophies/img.jpg')" :height="'300px'" :object_fit="'cover'" />
            </b-col>
          </b-row>
      </b-col>

    </b-row>
  </b-container>
</template>

<script>
  import Card from "../components/card.vue"
  import CardImage from "../components/imageCard.vue"

  export default {
    components: {
      Card,
      CardImage
    },
    data() {
      return {
        rightData: [{
            icon: "eye-fill",
            heading: "Vision",
            text: "At RACL we have devised future plans that not only connects the tiny islands of Maldives through air travel, but also acts as the active catalyst in development of the economies. We pride ourselves in being a professionaly conducted company that wants development not only for the company but also the community as a whole. Thus, our main purpose, our sole vision is to progress through connectivity",
          },
          {
            icon: "eye-fill",
            heading: "Mission",
            text: "Our mission is to ensure the utmost safety for our customers and consistently workingon realising our vision through mandating work allowing for sustainable growth inshareholder value, while also balancing the needs of our customers, work force, andthe communities in which we work in. We, at RACL have an ambitious mission to be themost robust and dynamic aviation company in the Maldives, with strategic businessplans, we have come up with business strategies which lays out the foundation ofthis company for the next decade.",
          },
          {
          icon: "eye-fill",
          heading: "Our Values",
          text: "At Regional Airports Company we pride ourselves in being the sole gateway of air travel to and from islands around the tiny paradise of Maldives. We provide abundant investment and advertising opportunities for our customers to grow with us through innovative approaches. In order to ensure the safety of our customers, stakeholders and employees we work on the clock which also allows to nurture the relationships for the years to come. Moreover, this also enables the company to hold ourselves accountable by taking leadership and initiative in mandating professional work ethics. ",
        }
        ],
      }
    },
  }
</script>