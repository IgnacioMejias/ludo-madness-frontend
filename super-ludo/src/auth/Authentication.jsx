import React from 'react';
import { Link } from 'react-router-dom';
import './Authentication.css';
function Authentication() {
  return (
    <div>
      <h1>Welcome! Please choose an option:</h1>
      <Link className="login" to="/login">Log In</Link>
      <Link className="signup" to="/signup">Sign Up</Link>
    </div>
  );
}

export default Authentication;
