
import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
export default function InsuranceCompany(props) {
    const { setValue, value, updateProgress } = props;

    const InsuranceCompanies = ['Aaa Insurance Co', 'Allstate Insurance', 'Farm Bureau/farm Family/rural', 'Farmers Insurance', 'Geico','Aaa Insurance Co', 'Allstate Insurance', 'Farm Bureau/farm Family/rural', 'Farmers Insurance', 'Geico']
    const sendValue = (event) => {
        let duplicate = { ...value }
        duplicate.InsuranceCompanies = event;
        setValue(duplicate)
        updateProgress((value) => {
            return value >= 100 ? 0 : value + 1;
        })
    }
   
   
    return (
        <div>
            <div className="ownership-header-div">
                <h2>Current Insurance Company</h2>
            </div>
            <div className="container-fluid">
                    <div className="main-inner-div">
                        {InsuranceCompanies.map((d, i) => (
                            <div className="marital-card"
                                onClick={() => sendValue(d)} >
                                <Link to={"/gender"}>
                                    <div className="Text " key={i}>{d}</div>
                                </Link>
                            </div>
                        ))}
                    </div>
                    </div>
        </div>
    )
}