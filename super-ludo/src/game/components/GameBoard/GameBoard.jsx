import React, { useState } from "react";
import './GameBoard.css'
import Tile from '../Tile/Tile'

const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o"]
const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"]
const boxes = [{number: 1, x: 6, y: 2}, {number: 2, x: 6, y: 3}, {number: 3, x: 6, y: 4}, {number: 4, x: 6, y: 5},
               {number: 5, x: 6, y: 6}, {number: 6, x: 5, y: 6}, {number: 7, x: 4, y: 6}, {number: 8, x: 3, y: 6},
               {number: 9, x: 2, y: 6}, {number: 10, x: 1, y: 6}, {number: 11, x: 0, y: 6}, {number: 12, x: 0, y: 7},
               {number: 13, x: 0, y: 8}, {number: 14, x: 1, y: 8}, {number: 15, x: 2, y: 8}, {number: 16, x: 3, y: 8},
               {number: 17, x: 4, y: 8}, {number: 18, x: 5, y: 8}, {number: 19, x: 6, y: 8}, {number: 20, x: 6, y: 9},
               {number: 21, x: 6, y: 10}, {number: 22, x: 6, y: 11}, {number: 23, x: 6, y: 12},{number: 24, x: 6, y: 13},
               {number: 25, x: 6, y: 14}, {number: 26, x: 7, y: 14}, {number: 27, x: 8, y: 14}, {number: 28, x: 8, y: 13},
               {number: 29, x: 8, y: 12}, {number: 30, x: 8, y: 11}, {number: 31, x: 8, y: 10}, {number: 32, x: 8, y: 9},
               {number: 33, x: 8, y: 8}, {number: 34, x: 9, y: 8}, {number: 35, x: 10, y: 8}, {number: 36, x: 11, y: 8},
               {number: 37, x: 12, y: 8}, {number: 38, x: 13, y: 8}, {number: 39, x: 14, y: 8}, {number: 40, x: 14, y: 7},
               {number: 41, x: 14, y: 6}, {number: 42, x: 13, y: 6}, {number: 43, x: 12, y: 6}, {number: 44, x: 11, y: 6},
               {number: 45, x: 10, y: 6}, {number: 46, x: 9, y: 6}, {number: 47, x: 8, y: 6}, {number: 48, x: 8, y: 5},
               {number: 49, x: 8, y: 4}, {number: 50, x: 8, y: 3}, {number: 51, x: 8, y: 2}, {number: 52, x: 8, y: 1},
               {number: 53, x: 8, y: 0}, {number: 54, x: 7, y: 0}, {number: 55, x: 6, y: 0}, {number: 56, x: 6, y: 1}
            ]

let startReds = [
    { image: '/assets/logos/html.svg', x: 3, y: 3 },
    { image: '/assets/logos/html.svg', x: 2, y: 2 },
    { image: '/assets/logos/html.svg', x: 2, y: 3 },
    { image: '/assets/logos/html.svg', x: 3, y: 2 }
];
let startGreens = [
    { image: '../src/assets/logos/node.svg', x: 2, y: 11 },
    { image: '../src/assets/logos/node.svg', x: 3, y: 12 },
    { image: '../src/assets/logos/node.svg', x: 2, y: 12 },
    { image: '../src/assets/logos/node.svg', x: 3, y: 11 }
];
let startYellows = [
    { image: '../src/assets/logos/js.svg', x: 11, y: 11 },
    { image: '../src/assets/logos/js.svg', x: 11, y: 12 },
    { image: '../src/assets/logos/js.svg', x: 12, y: 11 },
    { image: '../src/assets/logos/js.svg', x: 12, y: 12 }
];
let startBlues = [
    { image: '../src/assets/logos/react.svg', x: 11, y: 3 },
    { image: '../src/assets/logos/react.svg', x: 12, y: 3 },
    { image: '../src/assets/logos/react.svg', x: 11, y: 2 },
    { image: '../src/assets/logos/react.svg', x: 12, y: 2 }
];

export default function GameBoard() { 
    const [rolledNumber, setRolledNumber] = useState("⚀");
    const [currentPlayer, setCurrentPlayer] = useState(1);
    const [playerInTurn, setPlayerInTurn] = useState(1);
    const [reds, setReds] = useState([
        { image: '/assets/logos/html.svg', x: 3, y: 3 },
        { image: '/assets/logos/html.svg', x: 2, y: 2 },
        { image: 'assets/logos/html.svg', x: 2, y: 3 },
        { image: '/assets/logos/html.svg', x: 3, y: 2 }
    ]);
    const [greens, setGreens] = useState([
        { image: '../src/assets/logos/node.svg', x: 2, y: 11 },
        { image: '../src/assets/logos/node.svg', x: 3, y: 12 },
        { image: '../src/assets/logos/node.svg', x: 2, y: 12 },
        { image: '../src/assets/logos/node.svg', x: 3, y: 11 }
    ]);
    const [yellows, setYellows] = useState([
        { image: '../src/assets/logos/js.svg', x: 11, y: 11 },
        { image: '../src/assets/logos/js.svg', x: 11, y: 12 },
        { image: '../src/assets/logos/js.svg', x: 12, y: 11 },
        { image: '../src/assets/logos/js.svg', x: 12, y: 12 }
    ]);
    const [blues, setBlues] = useState([
        { image: '../src/assets/logos/react.svg', x: 11, y: 3 },
        { image: '../src/assets/logos/react.svg', x: 12, y: 3 },
        { image: '../src/assets/logos/react.svg', x: 11, y: 2 },
        { image: '../src/assets/logos/react.svg', x: 12, y: 2 }
    ]);


    const rollDie = () => {
        if (currentPlayer === playerInTurn) {
            const dice = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
            const index = Math.floor(Math.random() * dice.length);
            const rolledValue = index + 1; // Add 1 to get the rolled value

            // Update the rolled number
            setRolledNumber(dice[index]);

            // Update the current player
            if (currentPlayer == 4) {
                setCurrentPlayer(1);
                setPlayerInTurn(1);

            }
            else {
                setCurrentPlayer(currentPlayer + 1);
                setPlayerInTurn(playerInTurn + 1);
            }

            if (currentPlayer === 1) {
                // Move one of the red pieces
                const updatedReds = [...reds];
                const randomRedIndex = Math.floor(Math.random() * updatedReds.length);
                const redPiece = updatedReds[randomRedIndex];
                let inStart = false;
                startReds.forEach(r => {
                    if (r.x === redPiece.x && r.y === redPiece.y) {
                        inStart = true
                    }
                });
                if (inStart) {
                    redPiece.x = 6;
                    redPiece.y = 2;
                }
                else {
                    let positionNumber = [redPiece.x, redPiece.y]
                    boxes.forEach(b => {
                        if (redPiece.x === b.x && redPiece.y === b.y) {
                            positionNumber = b.number;
                        }
                    });
                    boxes.forEach(b => {
                        if (positionNumber + rolledValue === b.number) {
                            redPiece.x = b.x;
                            redPiece.y = b.y;
                        }
                    });
                }
                setReds(updatedReds); // Update the state with the new positions of red pieces
            } else if (currentPlayer === 2) {
                // Move one of the green pieces
                const updatedGreens = [...greens];
                const randomGreenIndex = Math.floor(Math.random() * updatedGreens.length);
                const greenPiece = updatedGreens[randomGreenIndex];
                let inStart = false;
                startGreens.forEach(r => {
                    if (r.x === greenPiece.x && r.y === greenPiece.y) {
                        inStart = true
                    }
                });
                if (inStart) {
                    greenPiece.x = 2;
                    greenPiece.y = 8;
                }
                else {
                    let positionNumber = [greenPiece.x, greenPiece.y]
                    boxes.forEach(b => {
                        if (greenPiece.x === b.x && greenPiece.y === b.y) {
                            positionNumber = b.number;
                        }
                    });
                    boxes.forEach(b => {
                        if (positionNumber + rolledValue === b.number) {
                            greenPiece.x = b.x;
                            greenPiece.y = b.y;
                        }
                    });
                }
                setGreens(updatedGreens); // Update the state with the new positions of green pieces
            } else if (currentPlayer === 3) {
                // Move one of the yellow pieces
                const updatedYellows = [...yellows];
                const randomYellowIndex = Math.floor(Math.random() * updatedYellows.length);
                const yellowPiece = updatedYellows[randomYellowIndex];
                let inStart = false;
                startYellows.forEach(r => {
                    if (r.x === yellowPiece.x && r.y === yellowPiece.y) {
                        inStart = true
                    }
                });
                if (inStart) {
                    yellowPiece.x = 8;
                    yellowPiece.y = 12;
                }
                else {
                    let positionNumber = [yellowPiece.x, yellowPiece.y]
                    boxes.forEach(b => {
                        if (yellowPiece.x === b.x && yellowPiece.y === b.y) {
                            positionNumber = b.number;
                        }
                    });
                    boxes.forEach(b => {
                        if (positionNumber + rolledValue === b.number) {
                            yellowPiece.x = b.x;
                            yellowPiece.y = b.y;
                        }
                    });
                }
                setYellows(updatedYellows); // Update the state with the new positions of yellow pieces
            } else if (currentPlayer === 4) {
                // Move one of the blue pieces
                const updatedBlues = [...blues];
                const randomBlueIndex = Math.floor(Math.random() * updatedBlues.length);
                const bluePiece = updatedBlues[randomBlueIndex];
                let inStart = false;
                startBlues.forEach(r => {
                    if (r.x === bluePiece.x && r.y === bluePiece.y) {
                        inStart = true
                    }
                });
                if (inStart) {
                    bluePiece.x = 12;
                    bluePiece.y = 6;
                }
                else {
                    let positionNumber = [bluePiece.x, bluePiece.y]
                    boxes.forEach(b => {
                        if (bluePiece.x === b.x && bluePiece.y === b.y) {
                            positionNumber = b.number;
                        }
                    });
                    boxes.forEach(b => {
                        if (positionNumber + rolledValue === b.number) {
                            bluePiece.x = b.x;
                            bluePiece.y = b.y;
                        }
                    });
                }
                setBlues(updatedBlues); // Update the state with the new positions of blue pieces
            }
        }
    };

    let board = []
    for (let j = verticalAxis.length - 1; j >= 0; j--) {
        for (let i = 0; i < horizontalAxis.length; i++){
            let image = null;
            reds.forEach(p => {
                if (p.x === i && p.y === j) {
                    image = p.image;
                }
            });
            greens.forEach(p => {
                if (p.x === i && p.y === j) {
                    image = p.image;
                }
            });
            yellows.forEach(p => {
                if (p.x === i && p.y === j) {
                    image = p.image;
                }
            });
            blues.forEach(p => {
                if (p.x === i && p.y === j) {
                    image = p.image;
                }
            });
            board.push(<Tile key={`${i},${j}`} i={i} j={j} image={image}/>);
        }
    }
    
    return (
        <>
        <div className="gameboard-container">
            <div className="dice-container">
                <h3>Player {playerInTurn} Roll the die!</h3>
                <div id="dice">{rolledNumber}</div>
                <button onClick={rollDie} disabled={currentPlayer !== playerInTurn}>Roll</button>
            </div>
            <div id="gameboard">
                {board}
            </div>
        </div>
        </>
    );
}
