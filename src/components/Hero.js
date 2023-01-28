import React from 'react'
import "./HeroStyle.css"

function Hero(props) {
    return (
        <>
            <div className={props.cName}>
                <img src={props.heroImg} alt="Orla" className="hero__img" />
                <div className="hero__text">
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                    <a  type="button" href={props.url} className={props.btnClass}>
                      {props.btnText}
                    </a>
                </div>
            </div>
        </>

    )
}
export default Hero