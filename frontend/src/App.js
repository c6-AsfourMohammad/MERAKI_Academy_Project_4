import { useState,createContext,useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navigate from "./components/Navbar";
import Register from "./components/Register";
import Login from "./components/Login";

//import axios from 'axios';
import "./App.css";

function App() {
  return (
    <div className="App">
       <Navigate />
       <Routes>
       <Route path="/" element={<Login />} />
       <Route path="/Register" element={<Register/>} />
    

      {/* <h1>Hello world</h1> */}
      </Routes>
    </div>
  );
}

export default App;
