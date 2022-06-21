import React from 'react'
import { Link } from 'react-router-dom'
function ownership(props) {
    const { setValue, value, updateProgress } = props;
    console.log("value",value);
    const Value = ["FINANCE", "OWN", "LEASE", "OTHER"]
    const sendValue = (event) => {
        let duplicate = { ...value }
        duplicate.vehicleownership = event;
        setValue(duplicate)
        if(value.addVehical === 'Yes'){
        }else{
        updateProgress((value) => {
            return value >= 100 ? 0 : value + 1;
        })
    }
    }
    return (

        <div>
               {value?.valued?.length>0 &&
            <div className="make-2nd-driver-add">
            <h2 >2nd Vehical</h2>
            </div>
             }
            <div className="ownership-header-div">
                <h1 className="pb-2 ownership-vehicle1"> Vehicle Ownership</h1>
                </div>
                <div>
                    <div className="ownership-card-main-div">
                        {Value.map((d, i) => (
                            <div className="ownership-btn_choose_sent3"
                                onClick={() => sendValue(d)} >
                                <Link to={"/insured"}>
                                    <div className="Text " key={i}>{d}</div>
                                </Link>
                            </div>
                        ))}
                    </div>
            </div>

        </div>
    )
}
export default ownership;