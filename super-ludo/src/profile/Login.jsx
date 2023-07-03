import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { AuthContext } from '../auth/AuthContext';
import axios from 'axios';
import VITE_BACKEND_URL from '../config'

function Login(){ 
    const navigate = useNavigate();
    const { token, setToken, setIsLoggedIn, setUser} = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [msg, setMsg] = useState(""); // Añade estado para el usuario
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        
        axios.post(`${VITE_BACKEND_URL}/login`, {
            email: email,
            password: password
          }).then((response) => {
            setError(false);
            setMsg("Login exitoso!");
            // Recibimos el token y lo procesamos
            const access_token = response.data.access_token;
            localStorage.setItem('token', access_token);
            setToken(access_token);
            console.log("Se seteo el token: ", token);
            setUser({ name: response.data.name});// Guardamos la información del usuario
            setIsLoggedIn(true);
            navigate('/home');

          }).catch((error) => {
            console.error('An error occurred while trying to login:', error);
            setError(true);
            setMsg(`${error.response.data.error}`);
          })
    }

    return (
        <div className="Login">
          <h1> Log In </h1>
          {msg.length > 0 && !error && <div className="successMsg"> {msg} </div>}
          {error && <div className="error">{msg}</div>}
    
          <form onSubmit={handleSubmit}>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            <label>
              <input type="submit" value="Enviar" />
            </label>
          </form>
          <p className='signup-option'>Don't have an account? <Link to="/signup">Sign Up!</Link></p>
        </div>
      );
    }

export default Login;