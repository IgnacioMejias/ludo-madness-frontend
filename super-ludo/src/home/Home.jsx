import './Home.css'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Statistics from './Statistics'
import Description from './Description'
import backgroundImage from '/assets/background.jpg'
import { AuthContext } from '../auth/AuthContext'
import LogoutButton from '../profile/Logout';
export default function Home() {

    const { user } = useContext(AuthContext);
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const navigate = useNavigate();
    const { isLoggedIn } = useContext(AuthContext);

    useEffect(() => {
        if (user == null) {
          navigate('/login');
        }
      }, [isLoggedIn, navigate]);

    useEffect(() => {
    const img = new Image();
    img.src = backgroundImage;
    img.onload = () => setIsImageLoaded(true);
    }, []);

    if (!isImageLoaded) {
        return <div>Loading...</div>; // Aquí puedes retornar cualquier elemento que represente una pantalla de carga
      }
    return (
        <>
            <nav className='nav-home'>
                <a href='/instructions'> INSTRUCTIONS </a>
                <a href='/aboutus'> ABOUT US</a>
                <LogoutButton />
            </nav>
            <div>
                <img src={backgroundImage} className="background"></img>

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
                <h2>Welcome, {user ? user.name : 'Invitado'}</h2>
                <Description/>
                <br></br>
                <div className="buttons-container">
                    <div className="button">
                    <a href='/pregame'> PLAY </a>
                    </div>  
                </div>
                <Statistics/>
            </div>
        </>
    )
}