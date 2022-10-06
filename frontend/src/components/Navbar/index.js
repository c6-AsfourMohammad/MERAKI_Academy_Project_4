import React from "react";
import "./style.css";
import {Link, useNavigate }from 'react-router-dom'
import  { useState } from 'react';
import { FaBeer } from 'react-icons/fa';
const Navigate=()=>{
const Navigate=useNavigate();
const [theme, setTheme] = useState('light');
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
        <input  className="search"type="text" placeholder="search" onClick={(e)=>{

        }}/></div>
          <Link  className="li" to='/homePage'>homePage</Link>
    <Link  className="li" to='/AddArticale'>Profile</Link>
    <button className="Mode" onClick={(e)=>{
        <div className={`App ${theme}`}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <h1>Hello, world!</h1>
    </div>
    }}>Mode</button>
   
   
   
    

    

 

    

   
   


    </div>
</div>
)
};
export default Navigate;
