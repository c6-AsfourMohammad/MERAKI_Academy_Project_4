import React from "react";
import "./style.css";
import {Link, useNavigate }from 'react-router-dom'
const Navigate=()=>{
const Navigate=useNavigate();
return(
<div className="navbar">
    
    <div className="links">
<p className="Tiwtter"> Tiwtter</p>

    <Link className="li" to='/'>Login</Link>
    <Link  className="li" to='/Register'>Register</Link>
    <Link  className="li" to='/AddArticale'>Profile</Link>
    <Link  className="li" to='/homePage'><div className="search">
        <input type="text" placeholder="search" onClick={(e)=>{

        }}/></div></Link>
   
    <Link  className="li" to='/homePage'>homePage</Link>
    

 

    

   
   


    </div>
</div>
)
};
export default Navigate;
