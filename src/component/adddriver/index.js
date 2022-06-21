import React from 'react'
import { Link } from 'react-router-dom'
export default function adddriver(props) {
    const {setValue,value,updateProgress}=props;
    let Value=["YES","No"]
    console.log("allvalue",value);
    const sendValue=(event)=>{
        let duplicate={...value}
        duplicate.AddDriver=event;
        setValue(duplicate)
         value.valued.push(value)
    }
    const sendValueed=(event)=>{
        let duplicate={...value}
        duplicate.AddDriver=event;
        setValue(duplicate)
         value.valued.push(value)
        updateProgress((value) => {
            return value >= 100 ? 0 : value + 1;
    })
    }
    return (
        <div>
             <div className="ownership-header-div">
                    <h1 className="pb-2 ownership-vehicle1"> Add Another Driver? (Save Additional 20%)</h1>
                    </div>
                    <div>
                    <div className="insured-main-card">
                    <div className="ownership-btn_choose_sent3">
                        <Link to={"/gender"}>
                            <div className="Text " onClick={() => sendValue("Yes")} >Yes</div>

                        </Link>
                    </div>
                    <div className="ownership-btn_choose_sent3">
                        <Link to={"/current-address"}>
                            <div className="Text " onClick={() => sendValueed("No")}>No</div>
                        </Link>
                    </div>
                </div>
            </div>

                </div>
        
    )
}
