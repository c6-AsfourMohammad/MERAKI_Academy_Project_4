import React, { useContext, useState,useEffect } from "react";
import "./style.css";
import axios from "axios";




const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [bio, setBio] = useState("");
  const [imgProfile, setImgProfile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role,setRole]=useState("6330b552f198916cada996eb");
  const [message, setMessage] = useState("");
  //creat function AddNewUser
const AddNewUser=()=>{axios.post("http://localhost:5000/users/",
{
    firstName:firstName,
    lastName:lastName,
    age:age,
    country:country,
    bio:bio,
    imgProfile:imgProfile,
    email:email,
    password:password,
    role:role
  })
  .then((result)=>{
console.log(result.data.message);
  }).catch((err)=>{
    console.log(err.data.message);

  });
};




  return( <div className="Register">
    <div className="NameRegister">Register</div>
    {/* firstName */}
    <input className="firstName"
     onChange={(e)=>{setFirstName(e.target.value);}}
        type="text" placeholder="First Name"/>
    {/* lastName */}
    <input  className="lastName" 
     onChange={(e)=>{setLastName(e.target.value);}}
     type="text" placeholder="Last Name"/>
    {/* age */}
    <input  className="age" 
     onChange={(e)=>{setAge(e.target.value);}}
        type="number" placeholder="Age"/>
    {/* country */}
    <input  className="country"
    onChange={(e)=>{setCountry(e.target.value);}}
    type="text" placeholder="Country"/>
    {/* bio */}
    <input  className="bio"
     onChange={(e)=>{setBio(e.target.value);}}
     type="text" placeholder="Bio"/>
    {/* imgProfile */}
    {/* <input  className="imgProfile"
     onChange={(e)=>{setImgProfile(e.target.value);}}
     type="text" placeholder="imgProfile"/> */}
    {/* email */}
    <input  className="email"
     onChange={(e)=>{setEmail(e.target.value);}} 
     type="email" placeholder="Email"/>
    {/* password */}
    <input  className="password"
     onChange={(e)=>{setPassword(e.target.value);}} 
  type="password" placeholder="Password"/>
    
    <button className="RegisterButton" onClick={AddNewUser}>Register</button>
   
  </div>) ;
};
export default Register;
