import React from 'react'
import { Link } from 'react-router-dom'
// import './style.css'
export default function index(props) {
    const { data, setValue, value ,updateProgress,progress} = props
    const handleEmail = (event) => {
        let duplicate = { ...value }
        duplicate.Email = event;
        setValue(duplicate)
       
    }
    const addValue=()=>{
        updateProgress((value) => {
            return value + 1;
        })
       }
       const decreaseBar=()=>{
           updateProgress((value)=>{
               return value - 1;
           })
       }
    return (
        <div>
            <div className="main-text">
                <h1>Email Address</h1>
            </div>
            <div className="form-name-main-div">
                <div>
                    <div className="form-name-input-details">
                        <label>Email</label>
                        <input type="email" onChange={(event)=>handleEmail(event.target.value)}/>
                    </div>
                    <div className="form-name-button-style">
                        <Link to={"/home-ownership"}>
                        <button onClick={()=>decreaseBar()} className="back-button-primary">back</button>
                        </Link>
                        <Link to={"/phone"}>
                            <button onClick={()=>addValue()} className="next-button-secondary">Next</button>
                        </Link>
                    </div>
                </div>



            </div>

        </div>
    )
}
