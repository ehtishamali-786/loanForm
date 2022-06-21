import React from 'react'
import './style.css';
import { Link, Redirect } from 'react-router-dom'
export default function Incident(props) {

    const { data, setValue, value, updateProgress, progress } = props
    const handleaccidentdata = (event) => {
        console.log(event);
        let duplicate = { ...value }
        duplicate.Accident = event;
        setValue(duplicate)

    }
    const handleticketdata = (event) => {
        console.log(event);
        let duplicate = { ...value }
        duplicate.Ticket = event;
        setValue(duplicate)

    }
    const handleduidata = (event) => {

        let duplicate = { ...value }
        duplicate.DUI = event;
        setValue(duplicate)

    }
    const linkto = (value.Accident === 'Yes' && value.Ticket === 'Yes' && value.DUI === 'Yes') ?
        "/accident-detail"
        : (value.Accident === 'Yes') ?
            "/accident-detail"
            : (value.Ticket === 'Yes') ?
                "/ticket-detail"
                : (value.DUI === 'Yes') ?
                    "/dui-detail"
                    : "/name"

    const addValue = () => {
        {
            value.AddDriver === 'Yes' ?
            updateProgress((value) => {
                return value;
            })
            :

            updateProgress((value) => {
                return value + 1;
            })
        }
    }
    const decreaseBar = () => {
        {
            value.AddDriver === 'Yes' ?
            updateProgress((value) => {
                return value;
            })
            :

            updateProgress((value) => {
                return value - 1;
            })
        }
    }
    return (
        <div>
            {value?.valued?.length > 0 &&
                <div className="make-2nd-driver-add">
                    <h2 >2nd Driver</h2>
                </div>
            }
            <div className="incident-header">
                <h1>
                    Incidents In The Past 3 Years
                </h1>
            </div>
            <div className="incident-main">
                <div className="form--wideForm--BXjP1">
                    <div className="class">
                        <div className="class-heading">Had an accident</div>
                    </div>

                    <div className="boxinput" >
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio1" value="Yes"
                                onClick={() => handleaccidentdata('Yes')} />
                            <label className="form-check-label" for="inlineRadio1">Yes</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio2" value="No"
                                onClick={() => handleaccidentdata('No')} />
                            <label className="form-check-label" for="inlineRadio2">No</label>
                        </div>
                    </div>
                </div>
                <div className="form--wideForm--BXjP1">
                    <div className="class">
                        <div className="class-heading">Received an Ticket</div>
                    </div>

                    <div className="boxinput" >
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio3" value="option1"
                                onClick={() => handleticketdata('Yes')} />
                            <label className="form-check-label" for="inlineRadio1">Yes</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio3" value="option2"
                                onClick={() => handleticketdata('No')} />
                            <label className="form-check-label" for="inlineRadio2">No</label>
                        </div>
                    </div>
                </div>
                <div className="form--wideForm--BXjP1">
                    <div className="class">
                        <div className="class-heading">Received a DUI </div>
                    </div>

                    <div className="boxinput" >
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions3" id="inlineRadio4" value="option1"
                                onClick={() => handleduidata('Yes')} />
                            <label className="form-check-label" for="inlineRadio1">Yes</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions3" id="inlineRadio4" value="option2"
                                onClick={() => handleduidata('No')} />
                            <label className="form-check-label" for="inlineRadio2">No</label>
                        </div>
                    </div>
                </div>
                <div className="form--wideForm--BXjP1">
                    <Link to={"/birth-year"}>
                        <button onClick={() => decreaseBar()} className="button-incident">back</button>
                    </Link>

                    <Link to={linkto}>
                        <button onClick={() => addValue()} className="button-incident">Next</button>
                    </Link>



                    {/* <button onClick={()=>linktoo} className="button-incident">Next</button> */}



                </div>
            </div>
        </div>


    )
}
