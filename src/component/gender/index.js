import React from 'react'
import { Link } from 'react-router-dom'
function gender(props) {
    const { setValue, value, updateProgress } = props;
    console.log("value",value);
    const Value = ["MALE", "FEMALE","NOT SPECIFIED"]
    const sendValue = (event) => {
        let duplicate = { ...value }
        duplicate.Gender = event;
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
           
        <div>
            <div className="ownership-header-div">
            {value?.valued?.length>0 &&
            <div className="make-2nd-driver-add">
            <h2 >2nd Driver</h2>
            </div>
             }
                <h1 className="pb-2 ownership-vehicle1">Gender</h1>
                </div>
                <div>
                    <div className="ownership-card-main-div">
                        {Value.map((d, i) => (
                            <div className="ownership-btn_choose_sent3"
                                onClick={() => sendValue(d)} >
                                <Link to={"/marital-status"}>
                                    <div className="Text " key={i}>{d}</div>
                                </Link>
                            </div>
                        ))}
                    </div>
            </div>

        </div>
        </>
    )
}
export default gender;
