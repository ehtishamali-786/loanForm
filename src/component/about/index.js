import React from 'react'
import './style.css'
import Aboutimage from '../../images/bg1.jpeg'
import Aboutimage1 from '../../images/img2.jpeg'
 function about() {
    return (
        <div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <img className="about-page-imgfst" src={Aboutimage}/>
        </div>
        <div className="col-md-6 about-Page-seccol">
          <h3 className="about-pages-heading">ABOUT</h3><br/>
            <h2 className="about-page-about">
            Finding the <br/>best <br/>insurance is<br/> like fishing <br/>without a rod
            </h2>
              <p className="paragraph" style={{width: "50%", marginLeft: "50px "}}>
                We believe that personal freedom and financial health are essential to flourishing. Coverage Vista was created by a group of car enthusiasts who were tired of shopping for auto insurance the old way. It typically took a day of calling insurance providers to get the best deal. But we prefer to keep life simple, so we took this process, automated it, and called it Coverage Vista.
              </p>
        </div>
      </div>
    </div>

    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <h1 className="about-page-heading2">Providers don’t want you to shop for better rates.</h1>
          <p className="about-page-membership-p2">Unlike other memberships, insurance is something you pay for many years. Every dollar on your premium quickly adds up over time. If you prefer to talk to one of our agents, call today and find out how much you could be saving.</p>
          <button style={{backgroundColor: "#10a372", marginLeft: "20%" ,marginBottom: "5%" }}className="SEE-YOUR-PRICE-btn">(888) 845-9747</button>
        </div>
        <div className="col-md-6">
          <img className="about-page-image-img2"  src={Aboutimage1}/>
        </div>
      </div>
    </div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 about-page-lastcont">
          <hr style={{height: "5px", width: "10%", marginLeft: "45%", color:" blue"}}/>
          <h1>Get started now — it’s free!</h1>
          <h5>We do the leg work, you do the saving</h5>
          <button type="button" className="SEE-YOUR-PRICE-btn btn-primary">SEE YOUR PRICE</button>
          <p> <small> Risk free - Takes 3-5 minutes to complete </small></p>
          
        </div>
        
      </div>
      
    </div>      
        </div>
    )
}
export default about;
