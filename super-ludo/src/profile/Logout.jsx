import React, {useContext, useState} from 'react';
import './Logout.css';
import { AuthContext } from '../auth/AuthContext';
import { useNavigate } from 'react-router-dom';

function LogoutButton(){
  const {logout} = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate('/');
  }

  return (
    <>
        <a onClick={handleLogout} className="logout-button">
        LOG OUT
      </a>
    </>
  );
}

export default LogoutButton;