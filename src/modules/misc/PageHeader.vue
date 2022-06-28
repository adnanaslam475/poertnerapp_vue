<template>
    <div class="container-fluid p-0">

        <header class="header">
            <!-- Background image -->
            <div class="text-center bg-image"
                :style="{ 'background-image': `url(${image})` }" 
                style="display: relative; height: 300px; background-size: cover;
      ">
      <!-- ../../assets/ourStory/our_story1.jpg -->
                <div class="mask pt-5">
                    <div class="d-flex justify-content-center align-items-center h-100">
                        <div class="text-white headings">
                            <h1 class="mb-3 heading">{{ heading }}</h1>
                            <h4 class="mb-3 sub_heading">{{ sub_heading }}</h4>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Background image -->
        </header>
    </div>



</template>

<script>
    export default {
        name: "CardImage",
        props: {
            image: {
                type: String,
                default: ""
            },
            height: {
                type: String,
                default: ""
            },
            object_fit: {
                type: String,
                default: ""
            },
            heading:{
                type:String
            },
            sub_heading:{
                type:String
            }
        },
    }
</script>
<style scoped>
    @import "../misc/PageHeader.css";
</style>