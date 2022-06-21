import React,{useState,useEffect} from "react";
import {Route,Switch} from 'react-router-dom'
import Home from './component/home/index'
import Make from './component/make/index'
import Years from './component/year/index'
import Model from './component/modal/index'
import Progressbar from './component/progressbar/index'
import Contact from './component/contect/index'
import About from './component/about/index'
import Ownership from './component/ownership/index'
import Insured from './component/insured/index'
import Currentlyinsured from './component/currentlyinsured/index'
import Gender from './component/gender/index'
import Maritalstatus from './component/maritalstatus/index'
import Month from './component/birthmonth/index'
import Day from './component/birthday/index'
import Year from './component/birthyear/index'
import Incident from './component/incident/incident'
import Name from './component/name/index'
import Adddriver from './component/adddriver/index'
import Currentaddress from './component/currentaddress/index'
import Homeownership from './component/homeownership/index'
import Email from './component/email/index'
import Phone from './component/phone/index'
import Insurancecompany from './component/insurancecompany/index'
import Accidentdetail from './component/accidentdetail/index'
import Ticketdetail from './component/ticketdetail/index'
import DUIdetail from './component/Duidetails/index'
 function Router(props) {
     const {data, setValue,value,progress,updateProgress}=props
     
      
     
    return (
        <div>
          
            <Switch>
           
            <Route path="/" exact={true} component={Home}/>
            <Route path="/contact"  component={Contact}/>
            <Route path="/about"  component={About}/>
            <Progressbar progress={progress}updateProgress={updateProgress}>
            <Route  path="/make" ><Make  data={data} setValue={setValue} value={value} progress={progress} updateProgress={updateProgress}/></Route>
            <Route path="/years" ><Years  data={data} setValue={setValue} value={value}progress={progress} updateProgress={updateProgress}/></Route> 
            <Route path="/model" ><Model  data={data} setValue={setValue} value={value}progress={progress} updateProgress={updateProgress}/></Route>
            <Route  path="/ownership" ><Ownership data={data} setValue={setValue} value={value} progress={progress} updateProgress={updateProgress}/></Route>
            <Route  path="/insured" ><Insured  data={data} setValue={setValue} value={value} progress={progress} updateProgress={updateProgress}/></Route>
            <Route  path="/currently-insured" ><Currentlyinsured  data={data} setValue={setValue} value={value} progress={progress} updateProgress={updateProgress}/></Route>
            <Route  path="/gender" ><Gender data={data} setValue={setValue} value={value} progress={progress} updateProgress={updateProgress}/></Route>
            <Route  path="/marital-status" ><Maritalstatus data={data} setValue={setValue} value={value} progress={progress} updateProgress={updateProgress}/></Route>
            <Route  path="/birth-month" ><Month data={data} setValue={setValue} value={value} progress={progress} updateProgress={updateProgress}/></Route>
            <Route  path="/birth-day" ><Day data={data} setValue={setValue} value={value} progress={progress} updateProgress={updateProgress}/></Route>
            <Route  path="/birth-year" ><Year data={data} setValue={setValue} value={value} progress={progress} updateProgress={updateProgress}/></Route>
            <Route  path="/incident" ><Incident data={data} setValue={setValue} value={value} progress={progress} updateProgress={updateProgress}/></Route>
            <Route  path="/name" ><Name data={data} setValue={setValue} value={value} progress={progress} updateProgress={updateProgress}/></Route>
            <Route  path="/add-driver" ><Adddriver data={data} setValue={setValue} value={value} progress={progress} updateProgress={updateProgress}/></Route>
            <Route  path="/current-address" ><Currentaddress data={data} setValue={setValue} value={value} progress={progress} updateProgress={updateProgress}/></Route>
            <Route  path="/home-ownership" ><Homeownership data={data} setValue={setValue} value={value} progress={progress} updateProgress={updateProgress}/></Route>
            <Route  path="/email" ><Email data={data} setValue={setValue} value={value} progress={progress} updateProgress={updateProgress}/></Route>
            <Route  path="/phone" ><Phone data={data} setValue={setValue} value={value} progress={progress} updateProgress={updateProgress}/></Route>
            <Route  path="/insurance-company" ><Insurancecompany data={data} setValue={setValue} value={value} progress={progress} updateProgress={updateProgress}/></Route>
            <Route  path="/accident-detail" ><Accidentdetail data={data} setValue={setValue} value={value} progress={progress} updateProgress={updateProgress}/></Route>
            <Route  path="/ticket-detail" ><Ticketdetail data={data} setValue={setValue} value={value} progress={progress} updateProgress={updateProgress}/></Route>
            <Route  path="/dui-detail" ><DUIdetail data={data} setValue={setValue} value={value} progress={progress} updateProgress={updateProgress}/></Route>

            </Progressbar>
            </Switch>
        </div>
    )
}
export default Router;