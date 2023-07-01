import React from "react";
import './JoinGame.css'


export default function CreateGame() {
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

        <div class="container">
            <div class="row">
                <div class="content">Enter the code of a current game</div>
                <input></input>
            </div>
        </div>

        <div className="join-btn">
            <a href='/join'> JOIN</a>
        </div>  
        

        


        </>
    )
}
