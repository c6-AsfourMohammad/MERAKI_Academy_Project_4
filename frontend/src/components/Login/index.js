import React, { useContext, useState,useEffect } from "react";

import "./style.css";
import axios from "axios";
import { newContext } from "../../App";

// import Popup from 'reactjs-popup';
import {GoogleLogin,GoogleLogout} from "react-google-login"
import {Link, useNavigate }from 'react-router-dom'
import { useGoogleLogin } from 'react-google-login'


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const { token, isLoggedIn } = useContext(newContext);
  // const { signIn, loaded } = useGoogleLogin({
  //   onSuccess,
  //   onAutoLoadFinished,
  //   clientId,
  //   cookiePolicy,
  //   loginHint,
  //   hostedDomain,
  //   autoLoad,
  //   isSignedIn,
  //   fetchBasicProfile,
  //   redirectUri,
  //   discoveryDocs,
  //   onFailure,
  //   uxMode,
  //   scope,
  //   accessType,
  //   responseType,
  //   jsSrc,
  //   onRequest,
  //   prompt
  // })
  // const [name, setName] = useState("");
  //const [email, setEmail] = useState("");
  // const [url, setUrl] = useState("");
  // const [loginStatus, setLoginStatus] = useState(false);

  // const responseGoogle = response => {
  //   console.log(response);
  //   setName(response.profileObj.name);
  //   setEmail(response.profileObj.email);
  //   setUrl(response.profileObj.imageUrl);
  //   setLoginStatus(true);
  // };
  // const logout = () => {
  //   console.log("logout");
  //   setLoginStatus(false);
  // };
  
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

useEffect(() => {
  if (isLoggedIn) {
    // useNavigate("/homePage");
  }
},[]);
const responseGoogle = (response) => {
  console.log(response);
}
// const Failure=(result)=>{
//   alert(result)
// }
  return <div className="Login"> 
  
    <div className="LoginName">Login</div>
    <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUyupe95d5oSN4BN-Ykga44hOxgqkVojz1Bgetfbw213GD1tRIULI7Ez6G2iKcFZV7f7w&usqp=CAU"} />
    {/* Email */}
    <div>
      {/* create login with Google */}
    </div>
    <GoogleLogin
    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
      buttonText="Login With Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
        />
      
    
    <input className="Email" onChange={(e)=>{
        setEmail(e.target.value)
    }} type="email" placeholder="Email"/>
{/* password */}
     <input  className="password" onChange={(e)=>{
        setPassword(e.target.value)
    }} type="password" placeholder="Password"/>
    {/* logButton */}
      <button className="LoginButton" onClick={loginUser}>Login</button>
     
      {/* <Popup className="popup" trigger={ <button className="LoginButton" onClick={loginUser}>Login</button>} position="right center">
    <div>welcome again</div>
  </Popup> */}
 
    </div>;
};
export default Login;
