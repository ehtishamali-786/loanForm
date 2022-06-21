import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../../css/custom.css';
const Make = (props) => {
    let make = [];
    const { data, setValue, value ,updateProgress,progress} = props
    console.log("value",value);
    data && data.length !== 0 && data.map(da => {
        if (make.indexOf(da.Make) === -1) {
            make.push(da.Make)
        }
    })
    const handletypedata = (event) => {
        let duplicate = { ...value }
        duplicate.Make = event;
        setValue(duplicate)
        {  value.addVehical==='Yes'?
        updateProgress((value) => {
            return value ;   
    }) 
           :
        
            updateProgress((value) => {
                return value + 1;   
        }) 
    }
   
   
    }
   
    return (
        <>
       {value?.valued?.length>0 &&
            <div className="make-2nd-driver-add">
            <h2 >2nd Vehical</h2>
            </div>
             }
            <div className="main-text">
            <div>
                <h1 >Make</h1>
                </div>
            </div>
            <div className="container-fluid main-dev">

                <div className=" main-inner-div ">
                    {make.map((d, i) => (
                        <div className=" card"
                            onClick={() => handletypedata(d)}  >
                            <Link to={"/years"}>
                                <div className="make-image">
                                    <img src={require("../../images/icons/" + d + ".svg").default} alt="car image" />
                                </div>
                                <div className="cardText make-image center" key={i}>{d}</div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
  
        </>
    )
}
export default Make;
