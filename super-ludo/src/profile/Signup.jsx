import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';
import { AuthContext } from '../auth/AuthContext';
import axios from 'axios';
import VITE_BACKEND_URL from '../config'

function Signup(){ 
    const navigate = useNavigate();
    const { token, setToken, setIsLoggedIn, setUser } = useContext(AuthContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [msg, setMsg] = useState("");
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        
        axios.post(`${VITE_BACKEND_URL}/signup`, {
            name: name,
            email: email,
            password: password
          }).then((response) => {
            setError(false);
            console.log('sign up successful');
            setMsg("Sign up exitoso!");
            // Recibimos el token y lo procesamos
            const access_token = response.data.access_token;
            localStorage.setItem('token', access_token);
            setToken(access_token);
            console.log("Se seteo el token: ", token);
            setUser({ name: response.data.name});
            setIsLoggedIn(true);
            navigate('/home');

          }).catch((error) => {
            console.error('An error occurred while trying to sign up:', error);
            setError(true);
            setMsg(`${error.response.data.error}`);
          })
    }

    return (
        <div className="Signup">
          <h1> Sign Up </h1>
          {msg.length > 0 && !error && <div className="successMsg"> {msg} </div>}
          {error && <div className="error">{msg}</div>}
    
          <form onSubmit={handleSubmit}>
            <label>
            Name:
            <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            </label>
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

        </div>
      );
    }

export default Signup;