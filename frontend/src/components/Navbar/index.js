import React from "react";
import "./style.css";
import {Link, useNavigate }from 'react-router-dom'
const Navigate=()=>{
const Navigate=useNavigate();
return(
<div className="navbar">
    <div className="links">
    <Link to='/'>Login</Link>
    <Link to='/Register'>Register</Link>
   
   


    </div>
</div>
)
};
export default Navigate;
