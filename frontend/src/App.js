import { useState,createContext,useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navigate from "./components/Navbar";
import Register from "./components/Register";
import Login from "./components/Login";

//import axios from 'axios';
import "./App.css";
export const newContext = createContext();

function App() {
  const a= JSON.parse(localStorage.getItem("token"))||""
const [token,setToken]=useState(a)
const [isLoggedIn ,setIsLoggedIn ]=useState(false)
  return (
    <newContext.Provider value={{token:token,
      setToken:setToken,
      isLoggedIn:isLoggedIn,
      setIsLoggedIn:setIsLoggedIn,
     
      }}>
    <div className="App">
       <Navigate />
       <Routes>
       <Route path="/" element={<Login />} />
       <Route path="/Register" element={<Register/>} />
    

      {/* <h1>Hello world</h1> */}
      </Routes>
    </div>
    </newContext.Provider >
  );
}

export default App;
