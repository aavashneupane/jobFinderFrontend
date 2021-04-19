import { React, Component } from 'react';
import { Route, Link } from "react-router-dom";
import carousel1 from './background.png'
import carousel2 from './background2.png'
import carousel3 from './background3.png'

class home extends Component {
    render() {
        return (

            <div>

                <div className="hero1">
                    <section class="pt-5 pb-5 mt-0 align-items-center d-flex bg-dark" id="hero2">
                        <div class="container ">
                            <div class="row align-items-center d-flex justify-content-between">
                                <div class="col-12 col-md-6 pb-5 order-2 order-sm-2 ">
                                    <h1 class="  text-white font-weight-bold mb-3 mt-5 display-3">Let us “build” a job for you</h1>
                                    <p class="lead text-white">Our jobs change so fast…that you won’t need a job description</p>
                                    <div class=" d-flex mt-3 mb-1">

                                        <a class="btn btn-primary btn-raised text-uppercase btn-lg  mt-md-3 " href="#goto" role="button">Get Started</a>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 order-sm-1 order-md-2  ">
                                    <div class="icon-wrap text-primary d-flex justify-content-md-center my-3">
                                        <a target="_blank" href="https://www.youtube.com/watch?v=x2wNf4evAPM"><button class="icon d-flex border-0 align-items-center justify-content-center bg-white text-dark shadow-lg rounded-circle " style={{ height: "70px", width: "70px" }}>
                                            <i class=" fa fa-play fa-lg ml-1" href="https://www.youtube.com/watch?v=x2wNf4evAPM"></i>
                                        </button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>






                <div id="goto"></div>

                <div class="pt-5 service-33 border-top">
                    <div class="container">
                        <div class="row wrap-service-33">
                            <div class="col-lg-6 align-self-center"> <span class="badge badge-danger rounded-pill px-3 py-1 font-weight-light">POST AND FIND</span>
                                <h3 class="my-3 text-uppercase">Hire the best employees for any job, online. </h3>
                                <p class="mt-3">A whole world of talent at your fingertips</p>
                                <div class="play-btn"> <span class="display-1">INTRO</span> <a target="_blank" href="https://www.youtube.com/watch?v=x2wNf4evAPM"><span class="btn rounded-circle btn-danger btn-md mr-3"><i class="icon-control-play"></i></span>Tap to play</a> </div>
                            </div>
                            <div class="col-lg-6">
                                <img src="https://image.freepik.com/free-vector/team-leader-teamwork-concept_74855-6671.jpg" alt="LOGO" style={{ width: "580px", height: "480px", }} class="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>





                <div class="blog-home3 py-5">
                    <div class="container">

                        <div class="row justify-content-center">

                            <div class="col-md-8 text-center">
                                <h3 class="my-3">Need a job or want to hire someone?</h3>
                                <h6 class="subtitle font-weight-normal"> Find the right job for your next work from home opportunity on the world's largest hiring platform connecting savvy businesses and professionals.
                                Browse by our robust database of categories, skills, and deliverables.
</h6>
                            </div>


                        </div>
                        <div class="row mt-4">

                            <div class="col-lg-6">
                                <div class="card border-0 mb-4">
                                    <Link to='/register'><img class="card-img-top" src={`http://localhost:91/images/register.jpg`} alt="linking to register" /></Link>
                                    <div class="date-pos text-center text-white p-3 bg-success-gradiant">Sign Up  &nbsp; &nbsp; Now</div>
                                    <h5 class="font-weight-medium mt-3"><a href="#" class="link text-decoration-none">Join us</a></h5>
                                    <p class="m-t-20">You can join us as Company or Customer. </p>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="row">

                                    <div class="col-md-6">
                                        <div class="card border-0 mb-4">
                                            <a href="#"><img class="card-img-top" src="https://cdn.iconscout.com/icon/free/png-512/post-46-1107671.png" alt="post" /></a>
                                            <div class="date-pos text-center text-white p-3 bg-success-gradiant">Post a job</div>
                                            <h6 class="font-weight-medium mt-3"><a href="#" class="link text-decoration-none">Companies can post a job and customers can apply on them</a></h6>
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="card border-0 mb-4">
                                            <a href="#"><img class="card-img-top" src="https://library.kissclipart.com/20180828/lfq/kissclipart-review-clipart-post-it-note-computer-icons-clip-ar-e9545e154ed3d566.jpg" alt="review" /></a>
                                            <div class="date-pos text-center text-white p-3 bg-success-gradiant">Review detail</div>
                                            <h6 class="font-weight-medium mt-3"><a href="#" class="link text-decoration-none">Review potenial employees data. </a></h6>
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="card border-0 mb-4">
                                            <Link to="/myListings"><a href="#"><img class="card-img-top" src="https://st2.depositphotos.com/6025596/12387/v/950/depositphotos_123872566-stock-illustration-tick-and-cross-signs-simple.jpg" alt="approve" /></a></Link>
                                            <div class="date-pos text-center text-white p-3 bg-success-gradiant">Confirm?</div>
                                            <h6 class="font-weight-medium mt-3"><a href="#" class="link text-decoration-none">Confirm or reject employees. And employees get notified.</a></h6>
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="card border-0 mb-4">
                                            <Link to="/contact"><a href="#"><img class="card-img-top" src="https://www.comsyscx.com/wp-content/uploads/2019/04/contact-page-banner.png" alt="contact" /></a></Link>
                                            <div class="date-pos text-center text-white p-3 bg-success-gradiant">Contact us</div>
                                            <h6 class="font-weight-medium mt-3"><a href="#" class="link text-decoration-none">Directly contact us if you have any queries.</a></h6>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>





                <div class="py-5 team3 bg-light">
                    <div class="container">
                        <div class="row justify-content-center mb-4">
                            <div class="col-md-7 text-center">
                                <h3 class="mb-3">Experienced & Professional Team</h3>
                                <h6 class="subtitle font-weight-normal">Listen to what our stakeholders say about the platform.</h6>
                            </div>
                        </div>
                        <div class="row">

                            <div class="col-lg-4 mb-4">

                                <div class="row">
                                    <div class="col-md-12">
                                        <img src="https://api-campus.softwarica.edu.np/uploads/users/57398588_2062661233845167_2829105355991023616_o_1605074122216.jpg" alt="aavsash" class="img-fluid" />
                                    </div>
                                    <div class="col-md-12">
                                        <div class="pt-2">
                                            <h5 class="mt-4 font-weight-medium mb-0">Aavash Neupane</h5>
                                            <h6 class="subtitle">JobFinder CEO</h6>
                                            <p>Come for the job… stay for the challenge</p>
                                            <ul class="list-inline">
                                                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-facebook"></i></a></li>
                                                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-twitter"></i></a></li>
                                                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-instagram"></i></a></li>
                                                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-behance"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>


                            <div class="col-lg-4 mb-4">

                                <div class="row">
                                    <div class="col-md-12 pro-pic">
                                        <img src="https://www.wwe.com/f/styles/og_image/public/all/2019/10/RAW_06202016rf_1606--3d3997f53e6f3e9277cd5a67fbd8f31f.jpg" alt="johncena" class="img-fluid" />
                                    </div>
                                    <div class="col-md-12">
                                        <div class="pt-2">
                                            <h5 class="mt-4 font-weight-medium mb-0">John Cena</h5>
                                            <h6 class="subtitle">Brand Ambassador</h6>
                                            <p>The home of your dream job</p>
                                            <ul class="list-inline">
                                                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-facebook"></i></a></li>
                                                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-twitter"></i></a></li>
                                                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-instagram"></i></a></li>
                                                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-behance"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>


                            <div class="col-lg-4 mb-4">

                                <div class="row">
                                    <div class="col-md-12 pro-pic">
                                        <img src="data:image/jpeg;base64,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" alt="elon musk" class="img-fluid" />
                                    </div>
                                    <div class="col-md-12">
                                        <div class="pt-2">
                                            <h5 class="mt-4 font-weight-medium mb-0">Elon Musk</h5>
                                            <h6 class="subtitle">Technical Expert</h6>
                                            <p>More than a job…it’s an adventure in innovation</p>
                                            <ul class="list-inline">
                                                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-facebook"></i></a></li>
                                                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-twitter"></i></a></li>
                                                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-instagram"></i></a></li>
                                                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-behance"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>


            </div>
        )
    }
}
export default home;