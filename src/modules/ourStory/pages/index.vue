<template>
  <div>
    
    <PageHeader 
    :image="require('@/assets/ourStory/our_story1.jpg')" 
    :heading="'Our Story'"
    :sub_heading="'sub heading of our story'" />

    <b-container>
      <b-row class="py-4">
        <div class="container-fluid">

        </div>
        <b-col cols="12" class="mh-100">


          <b-row class="d-flex">
            <b-col cols="7" cols-md="12" cols-sm="12" class="h-100 d-inline-block mb-2">
              <Card :height="'450px'" />
            </b-col>
            <b-col cols="5" cols-md="12" cols-sm="12" class="first_image h-100 d-inline-block mb-2 fluid">
              <div class="equal-column-content">
                <CardImage :image="require('@/assets/ourStory/our_story2.jpg')" :height="'450px'"
                  :object_fit="'cover'" />
              </div>
            </b-col>
          </b-row>

          <b-row>
            <b-col cols="5" cols-md="12" cols-sm="12" class="mb-2">
              <CardImage :image="require('@/assets/ourStory/our_story3.jpg')" :height="'250px'" :object_fit="'cover'" />

            </b-col>
            <b-col cols="7" cols-md="12" cols-sm="12" class="mb-2">
              <Card1 :height="'250px'" />
            </b-col>
          </b-row>
        </b-col>




      </b-row>

    </b-container>
  </div>

</template>

<script>
  import Card from "../components/card.vue"
  import Card1 from "../components/card1.vue"
  import CardImage from "../components/imageCard.vue"

  import PageHeader from "@/modules/misc/PageHeader.vue"

  export default {
    data() {
      return {}
    },
    components: {
      Card,
      Card1,
      CardImage,
      PageHeader
    },
    created() {
      console.log("Component mounted.")
    },
  }
</script>

<style>
  @import '../styles/index.css';
</style>