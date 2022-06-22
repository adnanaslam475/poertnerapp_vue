<template>
  <div class="card rounded custom-round px-2" :style="{height:height}">
    <div class="card-body">
      <h6 class="text-start text-wrap g-color">Training Academy</h6>

      <p class="text-start text-wrap p-font">
        At our fire academy, we deliver an integrated fire safety service based from our airports. With a focus on rapid response, we provide expert consultancy services and inspection of safety hazard. We aim to build a strong cohesion between these services and creating the highest level of protection.
        <br />
        <br />
      </p>
      <ul>
        <li>
          <h6 class="g-color">Trainings</h6>
          <p class="text-start text-wrap p-font">
           Our staff carry out inspection assessments of the potential fire safety hazards in a building. Depending on relevant laws and guidelines, industry specific regulations our expert personnel’s give guidance accordingly. 
          </p>
          <ul>
            <li>
              <h6>Aircraft Rescue & FireFighting</h6>
              <ol type="i">
                <li>ARFF Basic Fire Fighting Course</li>
                <li>Driver operator Course</li>
                <li>Leading Fireman Course</li>
                <li>Fire Officer Training</li>
                <li>Live Fire Training</li>
                <li>Structural Fire Fighting Training</li>
              </ol>
            </li>
            <li>
              <h6>Emergency Medical Training</h6>
              <ol type="i">
                <li>Emergency Medical Technician Training </li>
                <li>Basic First Aid Training</li>
                <li>Medical Trainers of Trainer</li>
              </ol>
            </li>
            <li>
              <h6>Awareness training</h6>
              <ol type="i">
                <li>Fire Awareness Training</li>
                <li>Live Fire Training & Exercises</li>
                <li>Basic Fire Equipment Awareness</li>
              </ol>
            </li>
            <li>
              <h6>Fire services</h6>
              <p>We offer servicing and inspection for equipment’s on site, with our trusted expertise, you can be sure to find the best approach with us.</p>
              <ol type="i">
                <li>Fire inspection</li>
                <p>Our team of experts will carry out an in-depth inspection of the area and the equipment’s to ensure the highest level of safety protocols are being adhered to.</p>
                <li>Fire Equipment Management & Installation</li>
                <p>Our team of experts are well trained for installation of a comprehensive amount of fire safety related equipment’s such as fire alarm systems, fire hydrant system, foam pourers and drencher systems, etc. Being affiliated with the world’s best brands, we also help manage these equipment’s to ensure the top quality of service.</p>
                <li>Fire Equipment Services</li>
                <p>Our team of professionals will service your existing fire equipment to ensure the equipment’s will be in the best condition for when an emergency arise.</p>
                <li>Fire Consultancy Service</li>
                <p>Consultancy services are for our retainer-based clients who opt to our company for the servicing and management of their equipment’s. We will be a call away from giving consultancy on your next step for any fire safety related concern.</p>
              </ol>
            </li>
          </ul>
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