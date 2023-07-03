import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
  const [gamecode, setGamecode] = useState(localStorage.getItem('gamecode') || null);
  
  function logout() {
    setToken(null);
    setUser(null); // Borra también la información del usuario al cerrar sesión
    localStorage.removeItem('token');
  }

  useEffect(() => {
    setIsLoggedIn(!!token); // Actualiza el estado isLoggedIn según si hay un token o no
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('isLoggedIn', isLoggedIn);
    localStorage.setItem('gamecode', gamecode);
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, setToken, logout, setIsLoggedIn, user, setUser, gamecode, setGamecode }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
