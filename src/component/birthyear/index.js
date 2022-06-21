import React from 'react'
import { Link } from 'react-router-dom'
export default function index(props) {
  let { data, setValue, value, updateProgress, progress } = props;
    let years = [];
  for (var i = 2007; i >= 1921; i--) {
    years.push(i);
  }
  const sendValue = (event) => {
    let duplicate = { ...value }
    duplicate.BirthYear = event;
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
                <h1>Birth year</h1>
            </div>
            <div>
                <div className=" main-inner-div">
                    {years.map((d, i) => (
                        <div className=" card"
                            onClick={() => sendValue(d)} >
                            <Link to={"/incident"}>
                                <div className="cardText " key={i}>{d}</div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
                
        </div>
    )
}
