import { getByDisplayValue } from '@testing-library/react';
import React from 'react'
import {Link} from 'react-router-dom'

export default function index(props) {
    const { data, setValue, value, updateProgress, progress } = props
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const getValue = (event) => {
    console.log(event);
    let duplicate = { ...value }
    duplicate.DuiDetails = event;
    setValue(duplicate)
   
}
const linkto = (value.Ticket === 'Yes' && value.Accident === 'Yes') ?
  "/ticket-detail"
   :(value.Ticket === 'Yes') ? 
   "/ticket-detail"
    : (value.Accident === 'Yes')?
    "/accident-detail"
    :"/incident"
    const addValue=()=>{
        {  value.AddDriver==='Yes'?
        updateProgress((value) => {
            return value ;   
    }) 
           :
        
            updateProgress((value) => {
                return value + 1;   
        })
       }
    }
       const decreaseBar=()=>{
        {  value.AddDriver==='Yes'?
        updateProgress((value) => {
            return value ;   
    }) 
           :
        
            updateProgress((value) => {
                return value - 1;   
        })
       }
    }
    return (
        <div>
              {value?.valued?.length>0 &&
            <div className="make-2nd-driver-add">
            <h2 >2nd Driver</h2>
            </div>
             }
            <div className="main-text">
                <h1>DUI Details</h1>
            </div>
            <div className="form-name-main-div">
                <div>
                <div className="form-name-input-zip-state-details">
                        <div className="form-name-inner-zipstate-div">
                        <label>Month</label>
                        <select onChange={(event)=>getValue(event.target.value)}>
                        <option></option>
                            {monthNames.map(month =>(
                                <option value={month}>{month}</option>
                            ))}
                        </select>
                        </div>
                        <div className="form-name-inner-zipstate-div">
                        <label>Year</label>
                        <select onChange={(event)=>getValue(event.target.value)}>
                        <option></option>
                        <option value={2021}>2021</option>
                            <option value={2020}>2020</option>
                            <option value={2019}>2019</option>
                            <option value={2018}>2018</option>
                        </select>
                        </div>
                    </div>
                    <div className="form-name-input-details">
                        <label>DUI Description</label>
                        <select onChange={(event)=>getValue(event.target.value)}>
                        <option></option>
                        <option value={'Other Vehicle Hit Yours'}>Other Vehicle Hit Yours</option>
                            <option value={'Vehicle Hit Vehicle'}>Vehicle Hit Vehicle</option>
                            <option value={'Vehicle Hit Property'}>Vehicle Hit Property</option>
                            <option value={'Vehicle Damaged Avoiding Accident'}>Vehicle Damaged Avoiding Accident</option>
                            <option value={'Vehicle Hit Pedestrian'}>Vehicle Hit Pedestrian</option>
                            <option value={'other'}>other</option>
                        </select>
                    </div>
                 
                    <div className="form-name-button-style">
                        <Link to={linkto}>
                        <button onClick={()=>decreaseBar()} className="back-button-primary">back</button>
                        </Link>
<Link to={"/name"}>
                        <button  onClick={()=>addValue()} className="next-button-secondary">Next</button>
                        </Link>
                    </div>
                </div>



            </div>

        </div>
    )
}
