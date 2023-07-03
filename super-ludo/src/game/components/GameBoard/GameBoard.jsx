import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import './GameBoard.css'
import Tile from '../Tile/Tile'
import { AuthContext } from '../../../auth/AuthContext'

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


export default function GameBoard() { 

    const { user } = useContext(AuthContext);
    const [players, setPlayers] = useState([]);
    const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
    const [selectedPiece, setSelectedPiece] = useState(null);
    const [rolledNumber, setRolledNumber] = useState("⚀");
    const [rolledValue, setRolledValue] = useState(null);
    const [playerInTurn, setPlayerInTurn] = useState(null);
    const [gameCode, setGameCode] = useState(null);
    const [gameData, setGameData] = useState(null);
    const [error, setError] = useState(false);
    const [msg, setMsg] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [reds, setReds] = useState([
        { image: '/assets/logos/html.svg', x: 3, y: 3, pieceNumber: 1 },
        { image: '/assets/logos/html.svg', x: 2, y: 2, pieceNumber: 2 },
        { image: '/assets/logos/html.svg', x: 2, y: 3, pieceNumber: 3 },
        { image: '/assets/logos/html.svg', x: 3, y: 2, pieceNumber: 4 }
    ]);
    const [greens, setGreens] = useState([
        { image: '/assets/logos/node.svg', x: 2, y: 11, pieceNumber: 1 },
        { image: '/assets/logos/node.svg', x: 3, y: 12, pieceNumber: 2 },
        { image: '/assets/logos/node.svg', x: 2, y: 12, pieceNumber: 3 },
        { image: '/assets/logos/node.svg', x: 3, y: 11, pieceNumber: 4 }
    ]);
    const [yellows, setYellows] = useState([
        { image: '/assets/logos/js.svg', x: 11, y: 11, pieceNumber: 1 },
        { image: '/assets/logos/js.svg', x: 11, y: 12, pieceNumber: 2 },
        { image: '/assets/logos/js.svg', x: 12, y: 11, pieceNumber: 3 },
        { image: '/assets/logos/js.svg', x: 12, y: 12, pieceNumber: 4 }
    ]);
    const [blues, setBlues] = useState([
        { image: '/assets/logos/react.svg', x: 11, y: 3, pieceNumber: 1  },
        { image: '/assets/logos/react.svg', x: 12, y: 3, pieceNumber: 2  },
        { image: '/assets/logos/react.svg', x: 11, y: 2, pieceNumber: 3  },
        { image: '/assets/logos/react.svg', x: 12, y: 2, pieceNumber: 4  }
    ]);
    
    useEffect(() => {
        const fetchGameId = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/games/${user.name}`);
            setGameCode(response.data.gameCode);
        } catch (error) {
            console.error('An error occurred while retrieving the game ID:', error);
        }
    };
        fetchGameId();
    }, [user.name]);

    useEffect(() => {
        const fetchGameData = async () => {
            try {
                if (gameCode) {
                    const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/games/all/${gameCode}`);
                    setGameData(response.data);
                }
                setIsLoading(false); // Set isLoading to false when gameData is set
            } catch (error) {
                console.error('An error occurred while retrieving the game data:', error);
            }
        };

        fetchGameData();
    }, [user.name, rolledValue]);
      
    

    // Function to add a player to the list
    const addPlayer = (player) => {
        setPlayers((players) => {
        // Check if the player already exists in the list
        if (players.some((p) => p.id === player.id)) {
            return players; // Player already exists, return the current list
        } else {
            return [...players, player]; // Player doesn't exist, add it to the list
        }
        });
    };
    const currentPlayer = user.name;
    
    useEffect(() => {
        addPlayer(user.name);
      }, []);
      
    useEffect(() => {
        if (players.length > 0) {
          setPlayerInTurn(players[currentPlayerIndex]);
        }
      }, [players, currentPlayerIndex]);
      
    const handleNextTurn = () => {
        setCurrentPlayerIndex((prevIndex) => (prevIndex + 1) % players.length);
    };
    
    useEffect(() => {
        if (rolledValue !== null) {
          makeMove();
        }
      }, [rolledValue]);

    const makeMove = async () => {
        try {
            if (gameCode) {
                await axios.post(`${import.meta.env.VITE_BACKEND_URL}/games/${gameCode}/moves`, {
                    userName: user.name,
                    pieceNumber: selectedPiece,
                    diceValue: rolledValue
                });
                setError(false);
                setMsg('Piece moved!');

            }
            
        } catch (error) {
            console.error('An error occurred while trying to move a piece:', error);
            setError(true);
            setMsg(`${error.response.data.error}`);
        }
        };
    
    
    const handlePieceClick = (pieceNumber) => {
        console.log(pieceNumber);
        setSelectedPiece(pieceNumber);

        };
        
          
    

    const rollDie = () => {
        if (currentPlayer === playerInTurn) {
            const dice = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
            const index = Math.floor(Math.random() * dice.length);
            setRolledValue(index + 1);
            // Update the rolled number
            setRolledNumber(dice[index]);
        }
        };
          
        

    const reDraw = () => {
        if (gameData.state && gameData.state.player1) {
          const player1Data = gameData.state.player1;
          setReds(prevReds => {
            return prevReds.map((redPiece, i) => {
              const position = player1Data[`piece${i + 1}`].piece.position;
              const box = boxes.find(box => box.number === position);
              if (box) {
                return { ...redPiece, x: box.x, y: box.y };
              }
              return redPiece;
            });
          });
        }
        if (gameData.state && gameData.state.player2) {
            const player2Data = gameData.state.player2;
            setGreens(prevGreens => {
              return prevGreens.map((greenPiece, i) => {
                const position = player2Data[`piece${i + 1}`].piece.position;
                const box = boxes.find(box => box.number === position);
                if (box) {
                  return { ...greenPiece, x: box.x, y: box.y };
                }
                return greenPiece;
              });
            });
          }
          if (gameData.state && gameData.state.player3) {
            const player3Data = gameData.state.player3;
            setYellows(prevYellows => {
              return prevYellows.map((yellowPiece, i) => {
                const position = player3Data[`piece${i + 1}`].piece.position;
                const box = boxes.find(box => box.number === position);
                if (box) {
                  return { ...yellowPiece, x: box.x, y: box.y };
                }
                return yellowPiece;
              });
            });
          }
          if (gameData.state && gameData.state.player4) {
            const player4Data = gameData.state.player4;
            setBlues(prevBlues => {
              return prevBlues.map((bluePiece, i) => {
                const position = player4Data[`piece${i + 1}`].piece.position;
                const box = boxes.find(box => box.number === position);
                if (box) {
                  return { ...bluePiece, x: box.x, y: box.y };
                }
                return bluePiece;
              });
            });
          }
        
        handleNextTurn();
        };
    
    useEffect(() => {
        if (gameData) {
            reDraw();
        }
    }, [gameData]);

    const draw = () => {
        let newBoard = [];
        for (let j = verticalAxis.length - 1; j >= 0; j--) {
            for (let i = 0; i < horizontalAxis.length; i++){
                let image = null;
                let piece = null;
                let color = null;
                reds.forEach(p => {
                    if (p.x === i && p.y === j) {
                        image = p.image;
                        piece = p.pieceNumber;
                        color = 'red';
                    }
                });
                greens.forEach(p => {
                    if (p.x === i && p.y === j) {
                        image = p.image;
                        piece = p.pieceNumber;
                        color = 'green';
                    }
                });
                yellows.forEach(p => {
                    if (p.x === i && p.y === j) {
                        image = p.image;
                        piece = p.pieceNumber;
                        color = 'yellow';
                    }
                });
                blues.forEach(p => {
                    if (p.x === i && p.y === j) {
                        image = p.image;
                        piece = p.pieceNumber;
                        color = 'blue';
                    }
                });
                newBoard.push(<Tile key={`${i},${j}`} i={i} j={j} image={image} pieceNumber={piece} onClick={() => handlePieceClick(piece)}/>);
            }
        }
        return newBoard; // Return the new board array
    }


    if (isLoading) {
        return <div>Loading...</div>;
    }
    

    return (
        <>
        <div className="gameboard-container">
            <div className="dice-container">
                <h3> {playerInTurn} Roll the die!</h3>
                <div id="dice">{rolledNumber}</div>
                <br />
                <div>
                    {gameCode ? (
                        <p>The game ID for participant {user.name} is {gameCode}</p>
                    ) : (
                        <p>Loading game ID...</p>
                    )}
                </div>
                <div className='info-container'>{players.length < 1 && <div>Waiting for players...</div>}</div>
                <button onClick={rollDie} disabled={currentPlayer !== playerInTurn || players.length < 1 || selectedPiece === null }>Roll</button>
            </div>
            <div id="gameboard">
                {draw()}
            </div>
        </div>
        </>
    );
}
