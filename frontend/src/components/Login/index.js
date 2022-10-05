import React, { useContext, useState,useEffect } from "react";
import "./style.css";
import axios from "axios";
import { newContext } from "../../App";
 import Popup from 'reactjs-popup';
import {GoogleLogin} from "react-google-login"
import {Link, useNavigate }from 'react-router-dom'
import { GoogleLogout } from 'react-google-login';



import ReactDOM from 'react-dom';


const Login = () => {
  
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const { token, isLoggedIn } = useContext(newContext);
  // const [name, setName] = useState("");
  //const [email, setEmail] = useState("");
  // const [url, setUrl] = useState("");
  // const [loginStatus, setLoginStatus] = useState(false);
  const[IsLoggedIn,setIsLoggedIn]=useState(true);
  const [Token, setToken] = useState("");
  const [ profile, setProfile ] = useState([]);
  const [isSignedIn, setIsSignedIn] = useState(false);
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
history("/HomePage")
   
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
    history("/HomePage")
}
const logoutHandler = () => {
  console.log('successfully logged out!');
  setProfile(null);
  console.log(profile);
  // setIsSignedIn(false);
  // console.log(GoogleLogout);

}
// const logout= (response)=> {
//   console.log(response);
//   setIsLoggedIn(false)
//     setToken("")
//     window.sessionStorage.removeItem("access_token");
//     localStorage.clear();
// }
// const handleLogoutFailure= (response)=> {
//   alert('Failed to log out')
//   console.log(response);
// }

  return <div className="Login"> 
  
    <div className="LoginName">Login</div>
    <img className="imglogin" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUyupe95d5oSN4BN-Ykga44hOxgqkVojz1Bgetfbw213GD1tRIULI7Ez6G2iKcFZV7f7w&usqp=CAU"} />
    {/* Email */}
    <div>
      {/* create login with Google */}
    </div>
    <GoogleLogin
    className="Google"
    clientId="994328639474-ub85dkgodp4vrm5nvfaemiklfko5jpt9.apps.googleusercontent.com"
     //clientSecret="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"
      buttonText="Login With Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
       />
        
        {/* <GoogleLogout
      clientId="994328639474-ub85dkgodp4vrm5nvfaemiklfko5jpt9.apps.googleusercontent.com"
      buttonText="Logout"
       onLogoutSuccess={logoutHandler}
    >
    </GoogleLogout> */}
    <div className="formE">
    <input className="Email" onChange={(e)=>{
        setEmail(e.target.value)
    }} type="email"  autocomplete="off" required/>
     <label for="Email" class="label-name">
    <span class="content-name">
    Email
    </span>
  </label>
  </div>
{/* password */}
<div className="formP">
     <input  className="password" onChange={(e)=>{
        setPassword(e.target.value)
    }} type="password" autocomplete="off" required/>
     <label for="password" class="label-name">
    <span class="content-name">
    password
    </span>
  </label>
    </div>
    {/* logButton */}
      <button className="LoginButton" onClick={loginUser}>Login </button>
     
       {/* <Popup className="popup" trigger={ <button className="LoginButton" onClick={loginUser}>Login</button>} position="right center">
    <div>welcome again</div>
  </Popup>  */}
  <div class="footer">
  <p className="footerName">Done by Mohamed Asfour</p>
</div>
    </div>;
};
export default Login;
