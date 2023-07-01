import React from "react";
import './CreateGame.css'


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
                <div class="content">Select number of players</div>
                <div class="option-block">
                <select>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                </div>
            </div>
            
            <div class="row">
                <div class="content">Select game difficulty</div>
                <div class="option-block">
                <select>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
                </div>
            </div>
            
            <div class="row">
                <div class="content">Select playstyle</div>
                <div class="option-block">
                <select>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
                </div>
            </div>
            </div>


        </>
    )
}
