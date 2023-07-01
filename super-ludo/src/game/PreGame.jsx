import React from "react";
import './PreGame.css'


export default function preGame() {
    return (
        <>

        <h1 className="colorful-title">
            <span className="green">L</span>
            <span className="red">U</span>
            <span className="blue">D</span>
            <span className="yellow">O</span>
            <span className="green">-</span>
            <span className="red">M</span>
            <span className="blue">A</span>
            <span className="yellow">D</span>
            <span className="green">N</span>
            <span className="red">E</span>
            <span className="blue">S</span>
            <span className="yellow">S</span>
        </h1>


        <div className="buttons-container">
            <div className="button">
                <a href='/create'> CREATE <br></br>GAME </a>
            </div>  

            <div className="button">
                <a href='/join'> JOIN<br></br>GAME </a>
            </div>  
        </div>

        </>
    )
}
