import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './JoinGame.css'
import { AuthContext } from '../auth/AuthContext'
import axios from 'axios';
import VITE_BACKEND_URL from '../config';

export default function JoinGame() {
    const { user, gamecode } = useContext(AuthContext);
    const [inputGameCode, setInputGameCode] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    console.log('gamecode', gamecode);

    const handleChange = (event) => {
        setInputGameCode(event.target.value);
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();

        const correctGameCode = gamecode;

        axios.post(`${VITE_BACKEND_URL}/players`, {
            user_name: user.name
        })
        .then((response) => {
            // El jugador ha sido creado con éxito. Ahora lo añadimos al juego.
            const playerId = response.data.id; // Extraer el ID del jugador de la respuesta
            return axios.post(`${VITE_BACKEND_URL}/games/${'1234'}/participants`, {
                playerId
            });
        })
        .then(() => {
            // Ambas solicitudes han tenido éxito. Redirigimos al usuario al tablero del juego.
            navigate('/gameboard');
        })
        .catch((error) => {
            console.error('An error occurred:', error);
            setErrorMessage('Ocurrió un error al tratar de unirte al juego.');
        });
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
                    <div className="content">Enter the code of a current game</div>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Game Code:
                            <input type="text" value={inputGameCode} onChange={handleChange} required/>
                        </label>
                        <input type="submit" value="JOIN" />
                    </form>
                    {errorMessage && <p>{errorMessage}</p>} {/* Muestra el mensaje de error si existe */}
                </div>
            </div>

        <div className="join-btn">
            <a href='/join'> JOIN</a>
        </div>  
        

        </>
    )
}
