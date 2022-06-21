import React from 'react'
import './style.css'
import Carimage from '../../images/icons/lady-on-phone-image.jpg'
function contact() {
    return (
        <>
    <div className="contact-section5 pt-5 pb-5">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-12 p-5">
                    <img src={Carimage} alt="car" className="contact-form-carimg"/><br/>
                    <div className="contact-email">
                        <h4 >Email us:contact@coveragevista.com</h4>

                    </div>
                    
                </div>
                <div className="col-md-6 col-12 p-5">
                    <div className="container">
                        <div className="contact-form-heading pb-5 ">
                            <h3 className=" pb-3">About</h3>
                        <h1 className=" text fw-bold fs-1 pb-3 fm-sans-serif">Let's Talk</h1>
                        <p className="fs-4">We’re here to ensure that you save money on your insurance.</p>
                        </div>
                        <form className="contact-form">
                          <div className="row">
                            <div className="col-75">
                              <label for="fname">Full Name:</label>
                            </div>
                            <div className="col-75">
                              <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-75">
                              <label for="lname">Email Address:</label>
                            </div>
                            <div className="col-75">
                              <input type="text" id="lname" name="lastname" placeholder="Your email.."/>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-75">
                              <label for="country">Subject:</label>
                            </div>
                            <div className="col-75">
                                <input type="text" id="lname" name="lastname" placeholder="Subject.."/>
                            </div>
                          </div>
                          <div className="row pb-5">
                            <div className="col-75">
                              <label for="subject">Message:</label>
                            </div>
                            <div className="col-75">
                              <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"200px"}}></textarea>
                            </div>
                          </div>
                          <div className="row w-75 mx-0">
                            <input type="submit"className="contact-form-button" value="SEND MESSAGE"/>
                          </div>
                        </form>
                      </div>
                      
                </div>
            </div>
        </div>
    </div>
            
        </>
    )
}
export default contact;
