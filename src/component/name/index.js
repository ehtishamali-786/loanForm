import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './style.css'
export default function Index(props) {
    const { data, setValue, value ,updateProgress,progress} = props
    const handlefirstName = (event) => {
        let duplicate = { ...value }
        duplicate.firstName = event;
        setValue(duplicate)
        
       
    }
    const handlelastName = (event) => {
        let duplicate = { ...value }
        duplicate.lastName = event;
        setValue(duplicate)
       
       
    }
    const linkto = (value.DUI === 'Yes' && value.Ticket === 'Yes' && value.Accident === 'Yes') ?
    "/dui-detail"
     : (value.DUI === 'Yes')?
     "/dui-detail"
     :(value.Ticket === 'Yes') ? 
     "/ticket-detail"
      : (value.Accident === 'Yes')?
      "/accident-detail"
      :"/name"
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
             {value?.valued?.length>0  &&
            <div className="make-2nd-driver-add">
            <h2 >2nd Driver</h2>
            </div>
             }
            <div className="main-text">
                <h1>Name</h1>
            </div>
            <div className="form-name-main-div">
                <div>
                    <div className="form-name-input-details">
                        <label>Legal First Name</label>
                        <input type="text" name='firstName'
                        onChange={(event)=>handlefirstName(event.target.value)}
                        />
                    </div>
                    <div className="form-name-input-details">
                        <label>legal Last Name</label>
                        <input name='lastName' type="text"  onChange={(event)=>handlelastName(event.target.value)}/>
                    </div>
                    <div className="form-name-button-style">
                        <Link to={linkto}>
                        <button onClick={()=>decreaseBar()}className="back-button-primary">back</button>
                        </Link>
                        <Link to={"/add-driver"}>
                            <button onClick={()=>addValue()} className="next-button-secondary">Next</button>
                        </Link>
                    </div>
                </div>



            </div>

        </div>
    )
}
