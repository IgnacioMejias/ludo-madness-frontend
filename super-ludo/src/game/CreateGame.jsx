import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './CreateGame.css';
import { AuthContext } from '../auth/AuthContext';
import axios from 'axios';
import VITE_BACKEND_URL from '../config';

export default function CreateGame() {
    const navigate = useNavigate();
    const { user, setGamecode } = useContext(AuthContext);
    const [error, setError] = useState(false);
    const [msg, setMsg] = useState('');

    const createPlayer = async (event) => {
      event.preventDefault();
  
      axios.post(`${VITE_BACKEND_URL}/players`, {
          user_name: user.name
        }).then((response) => {
          setError(false);
          setMsg("Jugador creado!");
          createGame();
  
        }).catch((error) => {
          console.error('An error occurred while trying to create the player:', error);
          setError(true);
          setMsg(`${error.response.data.error}`);
        })
      };
      
    const createGame = async () => {
        try {
          const gameCode = '1234';
          setGamecode(gameCode);
          await axios.post(`${VITE_BACKEND_URL}/games`, {
            game_code: gameCode,
            user_name: user.name,
          });
          setError(false);
          setMsg('Game created!');
          localStorage.setItem('gameCode', gameCode);
          console.log('Game created with id: ', gameCode);
          navigate('/gameboard');
        } catch (error) {
          console.error('An error occurred while trying to create a game:', error);
          setError(true);
          setMsg(`${error.response.data.error}`);
        }
      };

    

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

      <div className="container">
        <div className="row">
          <div className="content">Select number of players</div>
          <div className="option-block">
            <select>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="content">Select game difficulty</div>
          <div className="option-block">
            <select>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="content">Select playstyle</div>
          <div className="option-block">
            <select>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
        </div>

        <div className="buttons-container" style={{ marginTop: '20px' }}>
          <div className="button" onClick={createPlayer}>
            CREATE <br></br>GAME
          </div>
        </div>

      </div>
    </>
  );
}
