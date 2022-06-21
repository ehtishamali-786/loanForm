import React from 'react'
import { Link } from 'react-router-dom'
function ownership(props) {
    const { setValue, value, updateProgress } = props;
    const Value = ["OWN", "RENT", "OTHER"]
    const sendValue = (event) => {
        let duplicate = { ...value }
        duplicate.homeownership = event;
        setValue(duplicate)
        updateProgress((value) => {
            return value >= 100 ? 0 : value + 1;
        })
    }
    return (
        <div>
            <div className="ownership-header-div">
                <h1 className="pb-2 ownership-vehicle1"> Home Ownership</h1>
                </div>
                <div>
                    <div className="ownership-card-main-div">
                        {Value.map((d, i) => (
                            <div className="ownership-btn_choose_sent3"
                                onClick={() => sendValue(d)} >
                                <Link to={"/email"}>
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