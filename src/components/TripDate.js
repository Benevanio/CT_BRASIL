import "./Trip.css";
import React from 'react';

const TripDate = (props) => {
    return (
        <div className="t-card">
            <div className="t-image">
                <img src={props.img} alt="Trip" />
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
            <small>Fonte: Wikipédia
            </small>
        </div>
    );
}

export default TripDate;
