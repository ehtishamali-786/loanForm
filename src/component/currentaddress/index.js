import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
export default function index(props) {
    const { data, setValue, value, updateProgress, progress } = props
    const getAddress = (event) => {
        console.log(event);
        let duplicate = { ...value }
        duplicate.Address= event;
        setValue(duplicate)
      
    }
    const getZip = (event) => {
        console.log(event);
        let duplicate = { ...value }
        duplicate.ZipCode = event;
        setValue(duplicate)
      
    }
    const getState = (event) => {

        let duplicate = { ...value }
        duplicate.State = event;
        setValue(duplicate)
       
    }
    const getCity = (event) => {

        let duplicate = { ...value }
        duplicate.City = event;
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
                <h1>Current Address</h1>
            </div>
            <div className="form-name-main-div">
                <div>
                    <div className="form-name-input-details">
                        <label>Street Address</label>
                        <input onChange={(event)=>getAddress(event.target.value)}/>
                    </div>
                    <div className="form-name-input-zip-state-details">
                        <div className="form-name-inner-zipstate-div">
                            <label>Zip Cpde</label>
                            <input onChange={(event)=>getZip(event.target.value)}/>
                        </div>
                        <div className="form-name-inner-zipstate-div">
                            <label>State</label>
                            <input onChange={(event)=>getState(event.target.value)} />
                        </div>
                    </div>
                    <div className="form-name-input-details">
                        <label>City</label>
                        <input onChange={(event)=>getCity(event.target.value)}/>
                    </div>
                    <div className="form-name-button-style">
                    <Link to={"/add-driver"}>
                        <button onClick={()=>decreaseBar()} className="back-button-primary">back</button>
                        </Link>
                        <Link to={"/home-ownership"}>
                            <button onClick={()=>addValue()} className="next-button-secondary">Next</button>
                        </Link>
                    </div>
                </div>



            </div>

        </div>
    )
}
