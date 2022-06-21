import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'
import Image1 from '../../images/icons/car-image.jpg'
import image2 from '../../images/icons/car-image-2.jpg'
import Image3 from '../../images/icons/lady-image.jpg'
import Image4 from '../../images/icons/icon-1.svg'
import Image5 from '../../images/icons/icon-2.svg'
import Image6 from '../../images/icons/icon-3.svg'

const Home=()=> {
    // const {value}=props;
    // console.log("allvalue",value);
    return ( 
<>
    <div className="homepage-section1">
        <div className="container">
            <nav className="navbar sticky-top navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <a className="navbar-brand text-light" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto">
                            <Link to={"/about"}>
                            <li className="nav-item">
                                <a className="nav-link text-light active" aria-current="page" href="#">About</a>
                            </li>
                            </Link>
                            <Link to={"/contact"}>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">Contact</a>
                            </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="text-center mt-5">
                <h1 className="text-light text-center text-wrap Save-on-Auto-Insurance-text1">Save on Auto Insurance the Easy Way</h1>
                    <h4 className="text-light text-center text-wrap Instant-results-text2">Instant results. Better rates. No extra fees.
                    </h4>
            </div>
            <div className="button text-center mt-4">
                <Link to={"/make"}>
                <button type="button" className="btn btn-warning free-quote-button1 "><span className="fs-6 fw-bold">GET FREE
                        QUOTE</span></button><br/>
                        </Link>
                <span className="text-center text-light fs-6">Complete our form and save up to $900/year.</span>
            </div>

        </div>
    </div>
    <div className="homepage-section2">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 text-light fs-3 fw-bold ">Progressive</div>
                <div className="col-lg-3 text-light fs-3 fw-bold ">American Family</div>
                <div className="col-lg-3 text-light fs-3 fw-bold ">Liberty Mutual</div>
                <div className="col-lg-3 text-light fs-3 fw-bold ">Nation Wide</div>
            </div>
        </div>
    </div>
    <div className="home-page-section3">
        <div className="container">
            <div className="home-page-section3-text3 text-wrap fw-bold text-center">We negotiate better rates than if you shop directly</div>
            <div className="row text-center mt-5">
                <div className="col-lg-4 col-md-4 col-12">
                    <img src={Image4} alt="icon1"/>
                    <hr size="9"
                        style={{width:"45px", margin: "auto", margintop: "20px", backgroundcolor: "rgb(4, 122, 0)", opacity: "100"}}/>
                    <span className="text-center home-page-section-number1">01</span>
                    <h3 className="text-center text-wrap fs-2 mt-5">Fill out a simple online form.</h3>
                    <p className="text-center text-wrap fs-6 mt-4">Tell us a little about yourself and your coverage needs
                    </p>
                </div>
                <div className="col-lg-4 col-md-4 col-12">
                    <img src={Image5} alt="icon2"/>
                    <hr size="9"
                        style={{width:"45px", margin: "auto", margintop: "20px", backgroundcolor: "rgb(4, 122, 0)", opacity: "100"}}/>
                    <span className="text-center home-page-section-number1">02</span>
                    <h3 className="text-center text-wrap fs-2 mt-5">Compare and select the best offer.</h3>
                    <p className="text-center text-wrap fs-6 mt-4">We’ll look around and show you the best insurance
                        providers for you.</p>
                </div>
                <div className="col-lg-4 col-md-4 col-12">
                    <img src={Image6}alt="icon3"/>
                    <hr size="9"
                        style={{width:"45px", margin: "auto", margintop: "20px", backgroundcolor: "rgb(4, 122, 0)", opacity: "100"}}/>
                    <span className="text-center home-page-section-number1">03</span>
                    <h3 className="text-center text-wrap fs-2 mt-5">Start saving lots of money.</h3>
                    <p className="text-center text-wrap fs-6 mt-4">Secure your new rate online or via one of our licensed
                        agents.</p>
                </div>
            </div>
        </div>
    </div>
     <div className="home-page-section4 mt-5">
        <div className="container">
            <img src={Image3} alt="lady image" className="homepage-ladyimg"/>
            <div className="homes-page-innersection">
                <div className="#">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <h1 className="homePage-text4 text-wrap">What determines your auto insurance rate?</h1>
                        </div>
                        <div className="col-md-6 col-12">
                            <p className="homePage-text5">Shopping for car insurance is challenging because there is no best
                                provider concept. Each provider offers a better experience and deal for a different kind
                                of driver. This is why two people can apply to the same provider and get completely
                                different price ranges. Your insurance rates depend on many factors, such as age,
                                driving record, credit score, type of vehicle and location.</p>
                            <div className="button text-center mt-5">
                                <button type="button" className="btn btn-warning free-quote-button1 "><span className="fs-6 fw-bold">SEE
                                        YOUR PRICE</span></button><br/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div> 
    <div className="home-page-section5 pt-5 pb-5">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-12 p-5">
                    <img src={image2} alt="car" className="home-page-carimg"/><br/>
                    <span className="home-page-spantxt ">VEHICLE</span>
                    <h3 className="home-page-text6">Your vehicle is the biggest factor in your insurance</h3>
                    <p className="fs-5 mt-4">Some insurance providers are better for certain types of vehicles. If you have a large truck or a
                        luxury vehicle it would be more expensive to replace therefore more expensive to insure. Also,
                        your location plays a big role, some providers, such as Tennessee Farmers are better for a 2017
                        Audi R8, while a 2015 model would be better with Progressive.</p>
                </div>
                <div className="col-md-6 col-12 p-5">
                    <img src={Image1} alt="car2" className="home-page-carimg"/><br/>
                    <span className="home-page-spantxt ">LOCATION</span>
                    <h3 className="home-page-text6">Location is the second biggest factor in the equation</h3>
                    <p className="fs-5 mt-4">Geographic concerns play a large factor in how insurance providers determine their rates. For
                        example, in states where hail and flooding are common you’ll see a major increase in automobile
                        insurance rates. Also, cities with crowded populations, such as Los Angeles, result in common
                        accidents leading to 20% higher rates than the national average. Each insurance provider
                        evaluates these risks differently and you’ll see rates that will commonly vary by more than
                        200%.</p>
                </div>
            </div>
        </div>
    </div>
    <div className="home-page-section6">
        <div className="container">
            <div className="text-center">
                <hr size="9"
                        style={{width:"45px", margin: "auto", margintop: "20px", backgroundcolor: "rgb(4, 122, 0)", opacity: "100"}}/>
                        <h1 className="text-center mt-4 home-page-section6-text7">Get started now — it’s free!</h1>
                        <h2 className="mt-4">We do the leg work, you do the saving</h2> 
                        <div className="button text-center mt-5">
                            <button type="button" className="btn home-page-section6-button2 "><span className="fs-6 fw-bold">SEE YOUR PRICE</span></button><br/>
                            <span className="text-center text-light fs-6">Risk free - Takes 3-5 minutes to complete</span>
                        </div>  
            </div>
        </div>
    </div>
    <div className="home-page-footer-bback">
        <div className="text-center pt-5">
            <h3 className="text-center text-white">IMPORTANT DISCLOSURES</h3>
            <p className="text-center text-wrap text-white w-75 m-auto pt-5">This site is for informational and comparative purposes only.
                Upon submittal of your inquiry, we will work hard to connect you with a licensed insurance provider or
                professional who may assist you with additional product information, and/or product eligibility
                requirements for your individual situation including the application process. When inquiring about an
                insurance product on this site, this is not an insurance application or an offer to insure and we are
                not affiliated with any insurance provider.</p>
            <p className="text-center text-wrap text-white w-75 m-auto mt-3">The information on this site is not intended to take the place
                of professional advice from a licensed insurance agent and we do not provide any evaluation of the
                insurance providers or their policies or products. We recommend that all consumers consult with multiple
                licensed insurance agents before purchasing any insurance policy or insurance product.</p>
            <p className="text-center text-wrap text-white w-75 m-auto mt-3">We are not a licensed insurance agency or broker and we do not
                provide insurance quotes. We make reasonable efforts to provide accurate, complete and current
                information on this Site, however; we do not guarantee the correctness, accuracy or reliability of any
                information contained herein. This website and the company that owns it is not responsible for any
                typographical or photographic errors. This site may contain affiliate and partner links and could
                receive compensation for referrals.</p>
            <p className="text-center text-wrap text-white w-75 m-auto mt-3">Contents of this website are copyrighted property of the owner
                of this website. All trademarks, logos, and service marks (collectively the "Trademarks") displayed are
                registered and/or unregistered Trademarks of their respective owners.</p>
            <p className="text-center text-wrap text-white mt-3">This site is not a government agency or an insurance provider</p>
            </div>
            <br/>
            <h4 className="text-center"><b>Copyright 2021.All rights reserved</b></h4>
            <hr className="alaa"/>
             <p style={{color: "white", textAlign:"center",marginBottom:"1%"}}>
              <span style={{cursor:"pointer;"}}><a target="_blank" href="privacy.html" style={{color: "white"}}>Privacy Policy</a></span>
              &nbsp;&nbsp;&nbsp; &nbsp;
    <span style={{cursor:"pointer"}}><a target="_blank" href="terms.html" style={{color: "white"}}>Terms & Conditions</a></span>
    
             &nbsp;&nbsp;&nbsp; &nbsp;
              <a href="" style={{color: "white"}} className="text-middle">Contact Us</a></p><br/>
          </div>
        
        
        
  </>
)
}
export default Home;