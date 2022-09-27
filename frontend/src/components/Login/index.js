import React, { useContext, useState,useEffect } from "react";
import "./style.css";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
const loginUser=()=>{
  axios.post("http://localhost:5000/login",
  {email:email,password:password}
  ).then((result)=>{
    window.localStorage.setItem("token",JSON.stringify(result.data.token))
    console.log(result.data.token);
  }).catch((err)=>{
    console.log(err.data.message);

  });
};




  return <div> 
    <div className="Login">Login</div>
    {/* Email */}
    <input className="Email" onChange={(e)=>{
        setEmail(e.target.value)
    }} type="email" placeholder="Email"/>
{/* password */}
     <input  className="password" onChange={(e)=>{
        setPassword(e.target.value)
    }} type="password" placeholder="Password"/>
    {/* logButton */}
      <button className="logButton" onClick={loginUser}>Login</button>
    </div>;
};
export default Login;
