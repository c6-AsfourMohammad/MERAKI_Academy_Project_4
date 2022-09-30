import React, { useContext, useState,useEffect } from "react";
import "./style.css";
import axios from "axios";
import Popup from 'reactjs-popup';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

const loginUser=()=>{
  axios.post("http://localhost:5000/login",
  {email:email,password:password}
  ).then((result)=>{
    window.localStorage.setItem("token",JSON.stringify(result.data.token))
    console.log(result.data.token);
    // setMessage()
  }).catch((err)=>{
    console.log(err.data.message);
setMessage(" please try again")
  });
};




  return <div className="Login"> 
    <div className="LoginName">Login</div>
    <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUyupe95d5oSN4BN-Ykga44hOxgqkVojz1Bgetfbw213GD1tRIULI7Ez6G2iKcFZV7f7w&usqp=CAU"} />
    {/* Email */}
    <input className="Email" onChange={(e)=>{
        setEmail(e.target.value)
    }} type="email" placeholder="Email"/>
{/* password */}
     <input  className="password" onChange={(e)=>{
        setPassword(e.target.value)
    }} type="password" placeholder="Password"/>
    {/* logButton */}
      {/* <button className="LoginButton" onClick={loginUser}>Login</button> */}
     
      <Popup className="popup" trigger={ <button className="LoginButton" onClick={loginUser}>Login</button>} position="right center">
    <div>welcome again</div>
  </Popup>
    </div>;
};
export default Login;
