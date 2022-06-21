import React from 'react'
import { Link ,withRouter} from 'react-router-dom'
function Years(props) {
    let { data, setValue, value, updateProgress, progress } = props;
    console.log("value",value);
    let years = [];
    data && data.length !== 0 && data.map(da => {
        if (da.Make == value.Make) {
            if (years.indexOf(da.Year) === -1) {
                years.push(da.Year)
            }
        }

    })
    const sendValue = (event) => {
        let duplicate = { ...value }
        duplicate.Year = event;
        setValue(duplicate)
        if(value.addVehical=== 'Yes'){

        }else{
        updateProgress((value) => {
            return value >= 100 ? 0 : value + 1;
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
                <h1>Year</h1>
            </div>
            <div>
                <div className=" main-inner-div">
                    {years.map((d, i) => (
                        <div className=" card"
                            onClick={() => sendValue(d)} >
                            <Link to={"/model"}>
                                <div className="cardText " key={i}>{d}</div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default withRouter(Years);