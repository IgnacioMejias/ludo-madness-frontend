import React from "react";
import './LandingPage.css';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../auth/AuthContext';

export default function LandingPage() {
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    logout();
  }, [logout]);
    return (
        <div className="LandingPage">
          <h1>LUDO-MADNESS</h1>
          <div>
            <Logo />
          </div>
          <h2 className="welcome-message">
            WELCOME TO LUDO-MADNESS. PRESS PLAY TO BEGIN.
          </h2>
        <Link className="play-button"  to="/auth"> Play </Link>
        </div>
      )
}