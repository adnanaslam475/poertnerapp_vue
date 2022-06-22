<template>
  <b-container>
    <b-row class="mb-5 py-4 d-flex align-items-stretch">
      <b-col cols="6" cols-md="12" cols-sm="12" lg="6">
        <b-row>
          <b-col cols="12" cols-md="12" cols-sm="12" class="align-items-stretch">
            <Card />
          </b-col>
          <b-col class="mt-3" cols="12" cols-md="12" cols-sm="12">
            <CardImage :image="require('@/assets/corporate/image2.jpg')" />
          </b-col>
        </b-row>

      </b-col>
      <b-col cols="12" cols-md="12" cols-sm="12" lg="6" class="align-items-stretch">
        <CardImage :image="require('@/assets/corporate/image1.jpg')" :height="'810px'" :object_fit="'cover'"/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import Card from "../components/Corporate/card.vue"
  import CardImage from "../components/Corporate/imageCard.vue"
  export default {
    components: {
      Card, CardImage
    },
    data(){
      
    }
  }
</script>