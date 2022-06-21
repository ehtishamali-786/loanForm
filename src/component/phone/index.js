import React from 'react'
import { Link } from 'react-router-dom'
// import './style.css'
export default function index(props) {
    const { data, setValue, value ,updateProgress,progress} = props
    const handlePhone = (event) => {
        let duplicate = { ...value }
        duplicate.Phone = event;
        setValue(duplicate)
      
       
    }
    const addValue=()=>{
        console.log("all value",value);
        // updateProgress((value) => {
        //     return value + 1;
        // })
       }
       const decreaseBar=()=>{
           updateProgress((value)=>{
               return value - 1;
           })
       }
    return (
        <div>
            <div className="main-text">
                <h1>Last Step, Get Your Quotes</h1>
            </div>
            <div className="form-name-main-div">
                <div>
                    <div className="form-name-input-details">
                        <label>Phone</label>
                        <input type="number" onChange={(event)=>handlePhone(event.target.value)}/>
                    </div>
                    <div className="form-name-button-style">
                        <Link to={"/email"}>
                        <button onClick={()=>decreaseBar()} className="back-button-primary">back</button>
                        </Link>
                        <Link to={"##"}>
                            <button onClick={()=>addValue()} className="next-button-secondary">Next</button>
                        </Link>
                    </div>
                </div>



            </div>

        </div>
    )
}
