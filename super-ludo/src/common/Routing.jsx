import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Home from '../home/Home'
import Instructions from '../game/Instructions'
import AboutUs from './AboutUs/AboutUs'
import PreGame from '../game/PreGame'
import CreateGame from '../game/CreateGame'
import JoinGame from '../game/JoinGame'
import Login from '../profile/Login'
import Signup from '../profile/Signup'
import UserCheck from '../protected/UserCheck'
import LogoutButton from '../profile/Logout'
import Authentication from '../auth/Authentication'

function Routing(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path={"/"} element={<App/>}/>
        <Route path={"/instructions"} element={<Instructions />}/>
        <Route path={"/pregame"} element={<PreGame />}/>
        <Route path={"/aboutus"} element={<AboutUs />}/>
        <Route path={"/create"} element={<CreateGame />}/>
        <Route path={"/join"} element={<JoinGame />}/>
        <Route path={"/auth"} element={<Authentication />}/>
        <Route path={"/login"} element={<Login />}/>
        <Route path={"/logout"} element={<LogoutButton />}/>
        <Route path={"/signup"} element={<Signup />}/>
        <Route path={"/usercheck"} element={<UserCheck />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Routing;