import React from 'react'
import { Link } from 'react-router-dom'
export default function currentlyinsured(props) {
    const { setValue, value, updateProgress } = props;
    const sendValue = (event) => {
        let duplicate = { ...value }
        duplicate.currentlyinsured = event;
        setValue(duplicate)
        updateProgress((value) => {
            return value >= 100 ? 0 : value + 1;
        })
    }
    return (
        <div>
            <div className="ownership-header-div">
                <h1 className="pb-2 ownership-vehicle1"> Are You Currently Insured?</h1>
            </div>
            <div>
                <div className="insured-main-card">
                    <div className="ownership-btn_choose_sent3">
                        <Link to={"/insurance-company"}>
                            <div className="Text " onClick={() => sendValue("Yes")} >Yes</div>

                        </Link>

                    </div>
                    <div className="ownership-btn_choose_sent3">
                        <Link to={"/gender"}>
                            <div className="Text " onClick={() => sendValue("No")}>No</div>
                        </Link>
                    </div>
                </div>
            </div>

        </div>

    )
}
