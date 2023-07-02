import React from "react";
import './Tile.css'

export default function Tile({ i, j, image}) {

    if (i < 6) {
        if (j < 6) {
            return <div className="tile red-tile" key={`${i},${j}`}>
                <img src={image}/>
            </div>
        }
        else if (j > 8){
            return <div className="tile green-tile" key={`${i},${j}`}>
                <img src={image}/>
            </div>
        }

        else if (j === 7 && i > 0) {
            return <div className="tile green-tile" key={`${i},${j}`}>
                <img src={image}/>
            </div>
        }
        else if (i === 1 && j === 8) {
            return <div className="tile green-tile" key={`${i},${j}`}>
                <img src={image}/>
            </div>
        }
        else {
            return <div className="tile white-tile" key={`${i},${j}`}>
                <img src={image}/>
            </div>
        }
    }
    else if (i > 8){
        if (j < 6) {
            return <div className="tile blue-tile" key={`${i},${j}`}>
                <img src={image}/>
            </div>
        }
        else if (j > 8){
            return <div className="tile yellow-tile" key={`${i},${j}`}>
                <img src={image}/>
            </div>
        }
        else if (j === 7 && i < 14) {
            return <div className="tile blue-tile" key={`${i},${j}`}>
                <img src={image}/>
            </div>
        }
        else if (i === 13 && j === 6) {
            return <div className="tile blue-tile" key={`${i},${j}`}>
                <img src={image}/>
            </div>
        }
        else {
            return <div className="tile white-tile" key={`${i},${j}`}>
                <img src={image}/>
            </div>
        }
    }
    else if (i === 7) {
        if (j > 0 && j < 7) {
            return <div className="tile red-tile" key={`${i},${j}`}>
                <img src={image}/>
            </div>
        }
        else if (j > 7 && j < 14) {
            return <div className="tile yellow-tile" key={`${i},${j}`}>
                <img src={image}/>
            </div>
        }
        else {
            return <div className="tile white-tile" key={`${i},${j}`}>
                <img src={image}/>
            </div>
        }
    }
    else if (i === 6) {
        if (j === 7) {
            return <div className="tile green-tile" key={`${i},${j}`}>
                <img src={image}/>
            </div>
        }
        else if (j === 1) {
            return <div className="tile red-tile" key={`${i},${j}`}>
                <img src={image}/>
            </div>
        }
        else {
            return <div className="tile white-tile" key={`${i},${j}`}> 
                <img src={image}/>
            </div>
        }
    }
    else if (i === 8) {
        if (j === 7) {
            return <div className="tile blue-tile" key={`${i},${j}`}>
                <img src={image}/>
            </div>
        }
        else if (j === 13) {
            return <div className="tile yellow-tile" key={`${i},${j}`}>
                <img src={image}/>
            </div>
        }
        else {
            return <div className="tile white-tile" key={`${i},${j}`}>
                <img src={image}/>
            </div>
        }
    }
    else {
        return <div className="tile white-tile" key={`${i},${j}`}>
            <img src={image}/>
        </div>
    }
}
