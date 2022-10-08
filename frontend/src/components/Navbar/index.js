import React from "react";
import "./style.css";
import axios, { Axios } from "axios";

import {Link, useNavigate }from 'react-router-dom'

import { FaBeer } from 'react-icons/fa';
import { useState, useContext, useEffect } from "react";

const Navigate=()=>{
const history=useNavigate();
const [theme, setTheme] = useState('light');
const[firstName,setfirstName]=useState("")
// const { token, isLoggedIn } = useContext(newContext);
  const [message, setMessage] = useState("");




const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
return(
<div className="navbar">
    
    <div className="links">
<p className="Tiwtter"> Tiwtter</p>

    <Link className="li" to='/'>Login</Link>
    <Link  className="li" to='/Register'>Register</Link>
  
    <div className="search">
        <input  className="search"type="text" placeholder="search"onClick={(e)=>{setfirstName(e.target.value)}} />
       </div>
          <Link  className="li" to='/homePage'>homePage</Link>
    <Link  className="li" to='/AddArticale'>Profile</Link>
    <button className="Mode" onClick={(e)=>{
        <div className={`App ${theme}`}>
      <button onClick={toggleTheme}>Toggle Theme</button>
     
    </div>
    }}>Mode</button>
   
   
   
    

    

 

    

   
   


    </div>
</div>
)
};
export default Navigate;
