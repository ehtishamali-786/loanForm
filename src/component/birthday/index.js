import React from 'react'
import { Link } from 'react-router-dom'
export default function index(props) {
  let { data, setValue, value, updateProgress, progress } = props;
    let days = [];
  for (var i = 1; i <= 31; i++) {
days.push(i);
  }
  
  const sendValue = (event) => {
    let duplicate = { ...value }
    duplicate.BirthDay = event;
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
        <div>
         {value?.valued?.length>0  &&
            <div className="make-2nd-driver-add">
            <h2 >2nd Driver</h2>
            </div>
             }
        <div className="main-text">
                <h1>Birth Day</h1>
            </div>
            <div>
                <div className=" main-inner-div">
                    {days.map((d, i) => (
                        <div className=" card"
                            onClick={() => sendValue(d)} >
                            <Link to={"/birth-year"}>
                                <div className="cardText " key={i}>{d}</div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
                
        </div>
    )
}
