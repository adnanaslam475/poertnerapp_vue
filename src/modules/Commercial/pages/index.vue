<template>

  <div>
    <PageHeader :image="require('@/assets/commercial/lounge1.jpg')" :heading="'Commercial'"
      :sub_heading="'sub heading of Commercial'" />
    <b-container>
      <b-row class="mb-5 my-4">
        <b-col cols="12" class="mh-100">
          <!-- Advertising -->
          <b-row>
            <b-col cols="7" cols-md="12" cols-sm="12">
              <Card :height="'100%'" />
            </b-col>
            <b-col cols="5" class="" cols-md="12" cols-sm="12">
              <CardImage :image="require('@/assets/commercial/down.jpg')" :height="'100%'" :object_fit="'cover'" />
            </b-col>
          </b-row>
          <!-- Cargo Services -->
          <b-row class="mt-3">
            <b-col cols="5" class="" cols-md="12" cols-sm="12">
              <CardImage :image="require('@/assets/commercial/delivery.jpg')" :height="'100%'" :object_fit="'cover'" />
              <br>
              <CardImage :image="require('@/assets/commercial/air_cargo.jpg')" :height="'100%'" :object_fit="'cover'" />
              <br>
              <CardImage :image="require('@/assets/commercial/cargo_services3.jpg')" :height="'100%'"
                :object_fit="'cover'" />
            </b-col>
            <b-col cols="7" cols-md="12" cols-sm="12">
              <CargoServicesCard :height="'100%'" />
            </b-col>
          </b-row>
          <!-- TransitRoomsCard -->
          <b-row class="mt-3">
            <b-col cols="7" cols-md="12" cols-sm="12">
              <TransitRoomsCard :height="'100%'" />
            </b-col>
            <b-col cols="5" class="" cols-md="12" cols-sm="12">
              <CardImage :image="require('@/assets/commercial/batch_DHEYVIS INN.webp')" :height="'100%'"
                :object_fit="'cover'" />
              <br>
              <CardImage :image="require('@/assets/commercial/batch_DHEYVIS INN 2.webp')" :height="'100%'"
                :object_fit="'cover'" />
            </b-col>
          </b-row>
          <!-- Training Academy -->
          <b-row class="mt-3">
            <b-col cols="5" class="" cols-md="12" cols-sm="12">
              <CardImage :image="require('@/assets/commercial/trainings1.webp')" :height="'100%'"
                :object_fit="'cover'" />
              <br>
              <CardImage :image="require('@/assets/commercial/trainings2.webp')" :height="'100%'"
                :object_fit="'cover'" />
              <br>
              <CardImage :image="require('@/assets/commercial/trainings3.webp')" :height="'100%'"
                :object_fit="'cover'" />
              <br>
              <CardImage :image="require('@/assets/commercial/trainings4.webp')" :height="'100%'"
                :object_fit="'cover'" />
            </b-col>
            <b-col cols="7" cols-md="12" cols-sm="12">
              <TrainingAcademyCard :height="'100%'" />
            </b-col>
          </b-row>
          <!-- Security & surveillance -->
          <b-row class="mt-3">
            <b-col cols="7" cols-md="12" cols-sm="12">
              <SecurityCard :height="'100%'" />
            </b-col>
            <b-col cols="5" class="" cols-md="12" cols-sm="12">
              <CardImage :image="require('@/assets/commercial/security1.jpg')" :height="'100%'" :object_fit="'cover'" />
              <br>
              <CardImage :image="require('@/assets/commercial/security2.jpg')" :height="'100%'" :object_fit="'cover'" />
            </b-col>
          </b-row>
          <!-- Fuel -->
          <b-row class="mt-3">
            <b-col cols="5" class="" cols-md="12" cols-sm="12">
              <CardImage :image="require('@/assets/commercial/fuel1.jpg')" :height="'100%'" :object_fit="'cover'" />
            </b-col>
            <b-col cols="7" cols-md="12" cols-sm="12">
              <FuelCard :height="'100%'" />
            </b-col>
          </b-row>
          <!-- Ground Handling -->
          <b-row class="mt-3">
            <b-col cols="7" cols-md="12" cols-sm="12">
              <GroundHandlingCard :height="'100%'" />
            </b-col>
            <b-col cols="5" class="" cols-md="12" cols-sm="12">
              <CardImage :image="require('@/assets/commercial/ground1.jpg')" :height="'100%'" :object_fit="'cover'" />
            </b-col>
          </b-row>
          <!-- Landing & Parking-->
          <b-row class="mt-3">
            <b-col cols="5" class="" cols-md="12" cols-sm="12">
              <CardImage :image="require('@/assets/commercial/parking.jpg')" :height="'100%'" :object_fit="'cover'" />
            </b-col>
            <b-col cols="7" cols-md="12" cols-sm="12">
              <LandingParkingCard :height="'100%'" />
            </b-col>
          </b-row>
          <!-- Airport Lounge -->
          <b-row class="mt-3">
            <b-col cols="7" cols-md="12" cols-sm="12">
              <AirportLoungeCard :height="'100%'" />
            </b-col>
            <b-col cols="5" class="" cols-md="12" cols-sm="12">
              <CardImage :image="require('@/assets/commercial/lounge1.jpg')" :height="'100%'" :object_fit="'cover'" />
            </b-col>
          </b-row>
          <!-- Airport Transfer -->
          <b-row class="mt-3">
            <b-col cols="5" class="" cols-md="12" cols-sm="12">
              <CardImage :image="require('@/assets/commercial/transfer1.jpg')" :height="'100%'" :object_fit="'cover'" />
            </b-col>
            <b-col cols="7" cols-md="12" cols-sm="12">
              <AirportTransferCard :height="'100%'" />
            </b-col>
          </b-row>
          <!-- AirportRestaurantCard -->
          <b-row class="mt-3">
            <b-col cols="7" cols-md="12" cols-sm="12">
              <AirportRestaurantCard :height="'100%'" />
            </b-col>
            <b-col cols="5" class="" cols-md="12" cols-sm="12">
              <CardImage :image="require('@/assets/commercial/restaurant1.jpg')" :height="'100%'"
                :object_fit="'cover'" />
            </b-col>
          </b-row>
          <!-- AirlineOfficeCard -->
          <b-row class="mt-3">
            <b-col cols="5" class="" cols-md="12" cols-sm="12">
              <CardImage :image="require('@/assets/commercial/office1.jpg')" :height="'100%'" :object_fit="'cover'" />
            </b-col>
            <b-col cols="7" cols-md="12" cols-sm="12">
              <AirlineOfficeCard :height="'100%'" />
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import Card from "../components/card.vue"
  import CardImage from "../components/imageCard.vue"
  import CargoServicesCard from "../components/Commercial/CargoServicesCard.vue"
  import TransitRoomsCard from "../components/Commercial/TransitRoomsCard.vue"
  import TrainingAcademyCard from "../components/Commercial/TrainingAcademyCard.vue"
  import SecurityCard from "../components/Commercial/SecurityCard.vue"
  import FuelCard from "../components/Commercial/FuelCard.vue"
  import GroundHandlingCard from "../components/Commercial/GroundHandlingCard.vue"
  import LandingParkingCard from "../components/Commercial/LandingParkingCard.vue"
  import AirportLoungeCard from "../components/Commercial/AirportLoungeCard.vue"
  import AirportTransferCard from "../components/Commercial/AirportTransferCard.vue"
  import AirportRestaurantCard from "../components/Commercial/AirportRestaurantCard.vue"
  import AirlineOfficeCard from "../components/Commercial/AirlineOfficeCard.vue"

  import PageHeader from "@/modules/misc/PageHeader.vue"

  export default {
    components: {
      Card,
      CardImage,
      CargoServicesCard,
      TransitRoomsCard,
      TrainingAcademyCard,
      SecurityCard,
      FuelCard,
      GroundHandlingCard,
      LandingParkingCard,
      AirportLoungeCard,
      AirportTransferCard,
      AirportRestaurantCard,
      AirlineOfficeCard,
      PageHeader
    },
  }
</script>