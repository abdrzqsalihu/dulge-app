import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";


function Testimonials() {


  return (
    <div className='testimonial'><br /><br /><br />

        <section className="bg-black"><br /><br />
            <div className="container">
            <div className="center white-text">
                <h3 className='bolder' style={{lineHeight: "3.5rem"}}><span class="feature-highlight-container"><span class="highlight">Trusted by</span></span> 300k+ customer. </h3><br />
                <p className='width-full' style={{width: "60%", margin: "auto", fontSize: "1.1rem"}}>Dulge Project Management helps you stay in full control of all your projects and keeps track of all the moving parts.</p>
            </div> <br /><br /><br /><br />

            <>
                <Swiper pagination={true} modules={[Pagination]} className="mySwiper"> 
                    <SwiperSlide>
                        <div className="row">
                            <div className="col l5 m6 s12 push-l2"><br />
                                <img src={require("../../assets/img/11.png")}  style={{borderRadius: "50%", width: "55%"}} alt="" />
                            </div>
                            <div className="col l5 m6 s12 push-l1">
                            <i class="fa-solid fa-quote-right bg-blue white-text fa-2x" style={{padding: "12px", borderRadius: "50%", fontSize: "22px"}}></i>
                            
                                <p style={{fontSize: "1.2rem", lineHeight: "2.4rem"}}>"I'm now able to organize hundreds of links across 15 different affiliate programs and easily re-use them across my site. Best of all, the displays are beautiful and eye-catching, showing my readers exactly what to click and buy."</p>
                                <br /> 
                                <p className='bold'>John Mikel</p>
                                <p className='lighter' style={{fontSize: "1rem", lineHeight: "2rem", marginTop: "-1rem"}} >Product Manager at Flexstudio</p>
                            </div>
                        </div><br /><br /><br /><br /><br /><br /><br />
                        
                    </SwiperSlide> 

                    <SwiperSlide>
                        <div className="row">
                            <div className="col l5 m6 s12 push-l2"><br />
                                <img src={require("../../assets/img/1.png")}  style={{borderRadius: "50%", width: "55%"}} alt="" />
                            </div>
                            <div className="col l5 m6 s12 push-l1">
                            <i class="fa-solid fa-quote-right bg-blue white-text fa-2x" style={{padding: "12px", borderRadius: "50%", fontSize: "22px"}}></i>
                            
                                <p style={{fontSize: "1.2rem", lineHeight: "2.4rem"}}>"I'm now able to organize hundreds of links across 15 different affiliate programs and easily re-use them across my site. Best of all, the displays are beautiful and eye-catching, showing my readers exactly what to click and buy."</p>
                                <br /> 
                                <p className='bold'>Jennifer Duran</p>
                                <p className='lighter' style={{fontSize: "1rem", lineHeight: "2rem", marginTop: "-1rem"}} >Head of Content and Marketing at Brex</p>
                            </div>
                        </div><br /><br /><br /><br /><br /><br /><br />
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="row">
                            <div className="col l5 m6 s12 push-l2"><br />
                                <img src={require("../../assets/img/11.png")}  style={{borderRadius: "50%", width: "55%"}} alt="" />
                            </div>
                            <div className="col l5 m6 s12 push-l1">
                            <i class="fa-solid fa-quote-right bg-blue white-text fa-2x" style={{padding: "12px", borderRadius: "50%", fontSize: "22px"}}></i>
                            
                                <p style={{fontSize: "1.2rem", lineHeight: "2.4rem"}}>"I'm now able to organize hundreds of links across 15 different affiliate programs and easily re-use them across my site. Best of all, the displays are beautiful and eye-catching, showing my readers exactly what to click and buy."</p>
                                <br /> 
                                <p className='bold'>Micheal James</p>
                                <p className='lighter' style={{fontSize: "1rem", lineHeight: "2rem", marginTop: "-1rem"}} >Product Manager at Flexstudio</p>
                            </div>
                        </div><br /><br /><br /><br /><br /><br /><br />
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="row">
                            <div className="col l5 m6 s12 push-l2"><br />
                                <img src={require("../../assets/img/1.png")}  style={{borderRadius: "50%", width: "55%"}} alt="" />
                            </div>
                            <div className="col l5 m6 s12 push-l1">
                            <i class="fa-solid fa-quote-right bg-blue white-text fa-2x" style={{padding: "12px", borderRadius: "50%", fontSize: "22px"}}></i>
                            
                                <p style={{fontSize: "1.2rem", lineHeight: "2.4rem"}}>"I'm now able to organize hundreds of links across 15 different affiliate programs and easily re-use them across my site. Best of all, the displays are beautiful and eye-catching, showing my readers exactly what to click and buy."</p>
                                <br /> 
                                <p className='bold'>Jennifer Duran</p>
                                <p className='lighter' style={{fontSize: "1rem", lineHeight: "2rem", marginTop: "-1rem"}} >Head of Content and Marketing at Brex</p>
                            </div>
                        </div><br /><br /><br /><br /><br /><br /><br />
                    </SwiperSlide>
                   
                    <br /><br />
                    </Swiper>
            </>
                    
                    <br /><br /><br />
            </div>
        </section>
    </div>
  )
}

export default Testimonials
