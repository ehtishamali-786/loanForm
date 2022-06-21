import React, { useEffect, useState } from "react"
import { Switch, useLocation } from "react-router-dom"
import ProgressBar from "@ramonak/react-progress-bar";
import './style.css'

const Progressbar = (props) => {
    let { progress, updateProgress, children,value} = props
    console.log("length",value);
     let maxLength =22;
    let progressPerc = (progress/maxLength)*100;
 

    return (

        <>
         <div className="form-header">
           

            
           </div>
            <ProgressBar
                completed={progress}
                labelColor="#e80909"
                maxCompleted={maxLength}
                customLabel={progressPerc.toFixed(0)+"%"}
                height="2px"
                labelColor="green"
                 baseBgColor=" #dee2e6"
                 bgColor="green"
                 labelClassName="labelbar"
            />
            <Switch>{children}</Switch>

        </>
    )
}
export default Progressbar;
