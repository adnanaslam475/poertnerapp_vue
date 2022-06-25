<template>
    <div>
        <img src="https://unsplash.com/photos/jbQvJx2EWnU" alt="">
        <div class="home-content">
            <div class="banner-image w-100 vh-100 d-flex align-items-stretch align-items-center">
                <div class="container w-90 d-flex justify-content-between">
                    <div class="d-flex flex-column justify-content-center w-75 index-1">
                        <h4 class="text-box">Regional Airports</h4>
                        <h4 class="text-box">Company Limited</h4>
                        <p class="para-box para-width">
                            RACL is 100% percent government-owned company incorporated on 11
                            January 2021,to manage domestic airports in Maldives
                        </p>
                        <button class="btn btn-box" @click="changeRouter()">
                            More Details
                        </button>
                    </div>
                    <p class="para-box para-diection d-flex justify-content-center align-items-end year">
                        2022
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="https://unpkg.com/@diracleo/vue-scrubbable-video/dist/vue-scrubbable-video.min.js"></script>
<script src="https://unpkg.com/scrollmagic/scrollmagic/minified/ScrollMagic.min.js"></script>
<script>
    // import Navbar from "../components/Navbar.vue"
    import Navbar from '@/components/navBar/verticalNavbar.vue'
</script>
<style scoped>
    .index-1 {
        z-index: 1;
    }

    .home-content {
        /* position: absolute; */
        /* width: 99%; */
        /* z-index: 12; */
        /* top: 0; */
        /* background-color: transparent; */
        /* position: relative; */
        margin-top: 0;
        max-height: 100vh;
        overflow: hidden;
    }

    .btn-box {
        background-color: #b39032;
        color: white;
        border-radius: 20px;
        width: fit-content;
        height: 40px;
        padding-left: 20px;
        padding-right: 20px;
    }

    .web-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #b39032;
        color: white;
        width: fit-content;
        height: 30px;
        padding-left: 10px;
        padding-right: 10px;
        margin: 10px;
    }

    .icons-box {
        margin: 30px;
    }

    .text-box {
        color: white;
        font-weight: bold;
        font-size: 56px;
    }

    .para-box {
        color: white;
        font-size: 15px;
        line-height: 25px;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .para-width {
        width: 60%;
    }

    .para-diection {
        writing-mode: tb-rl;
        transform: rotate(-180deg);
    }

    .img-box {
        height: 100px;
        width: 150px;
    }

    .logo {
        color: white;
        font-size: 18px;
        margin: 8px;
    }

    /* .banner-image {
    background-image: url("./sownload.jpg");
    background-size: cover;
  } */

    @media screen and (max-width: 800px) {
        .para-box {
            width: 100%;
        }
    }

    [v-cloak] {
        display: none;
    }

    .scrollable {
        height: 100vh;
        overflow-x: hidden;
        overflow-y: auto;
        background-color: #fff;
        z-index: 0;
        position: absolute;
        width: 100%;
        top: 0;
        z-index: 0;
    }

    .scrollable .content .video {
        padding-top: 50px;
        padding-bottom: 50px;
        pointer-events: none;
    }

    canvas {
        pointer-events: none;
    }

    .scrollable .loading {
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: none;
        mix-blend-mode: difference;
        color: #fff;
    }

    .scrollbar-hidden::-webkit-scrollbar {
        display: none;
    }

    .scrollable .loading>div {
        display: inline-block;
        font-size: 50px;
        font-weight: bold;
    }
</style>