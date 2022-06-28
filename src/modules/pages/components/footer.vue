<template lang="">
    <div>
        <footer class="container-fluid footer_background py-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-3">
                        <div class="row">
                            <div class="col-md-12 ">
                                <div class="logo-part">
                                    <img src="../../../assets/logo.png" class="w-50 logo-footer">
                                    <h1 class="under_logo">Subscribe here</h1>
                                    <!-- <form class="form-footer my-3">
                    <input type="text" placeholder="Email Address" name="search">
                    <input type="button" value="Go">
                  </form> -->
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="col-md-9">
                        <div class="row">
                            <div class="col-md-3 px-4">
                                <h5 class="col_heading">Company Info</h5>
                                <a href="#" class="btn-footer"> About Us </a><br>
                                <a href="#" class="btn-footer"> Our Philosophies </a><br>
                                <a href="#" class="btn-footer"> We are hiring </a><br>
                                <a href="#" class="btn-footer"> Blog </a><br>
                            </div>
                            <div class="col-md-3 px-4">
                                <h5 class="col_heading">Features</h5>
                                <a href="#" class="btn-footer"> About Us </a><br>
                                <a href="#" class="btn-footer"> Our Philosophies </a><br>
                                <a href="#" class="btn-footer"> We are hiring </a><br>
                                <a href="#" class="btn-footer"> Blog </a><br>
                            </div>
                            <div class="col-md-3 px-4">
                                <h5 class="col_heading">Legal</h5>
                                <a href="#" class="btn-footer"> About Us </a><br>
                                <a href="#" class="btn-footer"> Our Philosophies </a><br>
                                <a href="#" class="btn-footer"> We are hiring </a><br>
                                <a href="#" class="btn-footer"> Blog </a><br>
                            </div>
                            <div class="col-md-3 px-4">
                                <h5 class="col_heading">Get in touch</h5>
                                <div class="d-flex align-items-center">
                                    <img src="../../../assets/footer/phone-solid.svg" width="30px" height="30px" alt="">
                                    <a href="#" class="btn-footer px-2">
                                        +960 330 6969 </a><br>
                                </div>
                                <div class="d-flex align-items-center">
                                    <img src="../../../assets/footer/location-dot-solid.svg" width="30px" height="30px"
                                        alt="">
                                    <a href="#" class="btn-footer px-2">
                                        H. Suez 6th & 7th Floor, Ameeru Ahmed Magu, Male’ </a><br>
                                </div>
                                <div class="d-flex align-items-center">
                                    <img src="../../../assets/footer/envelope-solid.svg" width="30px" height="30px"
                                        alt="">
                                    <a href="#" class="btn-footer px-2">
                                        info@airports.mv </a><br>
                                </div>
                            </div>
                            <!-- <div class="col-md-6 px-4">
                <h6 class="col_heading"> Legal</h6>
                <div class="row ">
                  <div class="col-md-6">
                    <ul>
                      <li> <a href="#"> Home</a> </li>
                      <li> <a href="#"> About</a> </li>
                      <li> <a href="#"> Service</a> </li>
                      <li> <a href="#"> Team</a> </li>
                      <li> <a href="#"> Help</a> </li>
                      <li> <a href="#"> Contact</a> </li>
                    </ul>
                  </div>
                  <div class="col-md-6 px-4">
                    <ul>
                      <li> <a href="#"> Cab Faciliy</a> </li>
                      <li> <a href="#"> Fax</a> </li>
                      <li> <a href="#"> Terms</a> </li>
                      <li> <a href="#"> Policy</a> </li>
                      <li> <a href="#"> Refunds</a> </li>
                      <li> <a href="#"> Paypal</a> </li>
                    </ul>
                  </div>
                </div>
              </div> -->
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>

        </footer>
        <div class="bg-light footer_strip">
            <b-container class=" d-flex align-items-center justify-content-between py-3">
                <div>
                    <h6>Regional Airports Company Limited. © All Rights Reserved 2022.</h6>
                </div>
                <div class="social d-flex align-items-center justify-content-between">
                    <ul>
                        <li>
                            <a href="#">
                                <img class="footer_icon" src="../../../assets/home/icons/facebook-brands.svg"
                                    width="40px" height="40px" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="../../../assets/home/icons/instagram-brands.svg" width="40px" height="40px"
                                    alt="">
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="../../../assets/home/icons/twitter-brands.svg" width="40px" height="40px"
                                    alt="">
                            </a>
                        </li>
                    </ul>
                </div>
            </b-container>
            </div>

        </div>
</template>
<script>
    export default {

    }
</script>
<style>
    /* footer strip */
    .footer_strip {
        background-color: white;
    }

    /* footer */
    body {
        font-family: 'Signika', sans-serif;
    }

    .footer_background {
        background: #3c271d;
    }

    .logo-footer {
        margin-bottom: 40px;
    }

    .under_logo {
        color: #cea46b;

    }

    .col_heading {
        color: #cea46b;
    }

    footer {
        color: white;
    }

    footer p,
    a {
        font-size: 12px;
        /* font-family: 'Roboto', sans-serif; */
    }

    footer h6 {
        /* font-family: 'Playfair Display', serif; */
        margin-bottom: 40px;
        position: relative;
    }

    footer h6:after {
        position: absolute;
        content: "";
        background: rgb(219, 219, 219);
        width: 12%;
        height: 1px;
        left: 0;
        bottom: -20px;
    }

    .btn-footer {
        color: rgb(202, 202, 202);

        text-decoration: none;
        /* border: 1px solid; */
        /* border-radius: 43px; */
        font-size: 18px;
        padding: 7px 0px;
        line-height: 47px;
        width: 500px !important;
    }

    .btn-footer:hover {

        text-decoration: none;

    }

    .form-footer input[type="text"] {
        border: none;
        border-radius: 16px 0 0 16px;
        outline: none;
        padding-left: 10px;

    }

    ::placeholder {
        font-size: 10px;
        padding-left: 10px;
        font-style: italic;
    }

    .form-footer input[type="button"] {
        border: none;
        background: #232323;
        margin-left: -5px;
        color: #fff;
        outline: none;
        border-radius: 0 16px 16px 0;
        padding: 2px 12px;
    }

    .social .fa {
        color: grey;
        font-size: 22px;
        padding: 10px 15px;
        background: #3c3c3c;
    }

    footer ul li {
        list-style: none;
        display: block;
    }

    footer ul {
        padding-left: 0;
    }

    footer ul li a {
        text-decoration: none;
        color: grey;
        text-decoration: none;
    }

    a:hover {
        text-decoration: none;
        color: #f5f5f5 !important;

    }

    .logo-part {
        /* border-right: 1px solid grey; */
        height: 100%;
    }
    .social{
        display: flex;
        align-items: center;
    }

    /* below Footer */
    .social ul li {
        list-style: none;
        display: inline;
        padding: 0 10px;
        color: #cea46b;
    }

    .social ul li a .footer_icon {
        color: #3c271d !important;
        filter: blur(50%);
    }
</style>