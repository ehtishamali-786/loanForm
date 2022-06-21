import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
function gender(props) {
    const { setValue, value, updateProgress } = props;
    const Value = ["Married","Single","Divorced","Domestic Partner","Separated","Widowed","Unknown"]
    const sendValue = (event) => {
        let duplicate = { ...value }
        duplicate.MaritalStatus= event;
        setValue(duplicate)
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
    return (
        <>
            <div className="ownership-header-div">
            {value?.valued?.length>0 &&
            <div className="make-2nd-driver-add">
            <h2 >2nd Driver</h2>
            </div>
             }
                <h1 className="pb-2 ownership-vehicle1">Marital Status</h1>
                </div>
                <div className="container-fluid">
                    <div className="main-inner-div">
                        {Value.map((d, i) => (
                            <div className="marital-card"
                                onClick={() => sendValue(d)} >
                                <Link to={"birth-month"}>
                                    <div className="Text " key={i}>{d}</div>
                                </Link>
                            </div>
                        ))}
                    </div>
                    </div>

        </>
    )
}
export default gender;
