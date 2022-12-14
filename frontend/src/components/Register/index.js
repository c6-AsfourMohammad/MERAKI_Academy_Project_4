import React, { useContext, useState,useEffect } from "react";
import "./style.css";
import axios from "axios";
import {Link, useNavigate }from 'react-router-dom'





const Register = () => {
  const history = useNavigate();

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
    setMessage("The user has been created successfully");
history("/HomePage")
console.log(result.data.message);

  }).catch((err)=>{
    console.log(err.data.message);
    setMessage("Error happened while register, please try again");
  });
};




  return( 
  <div className="Register">
   
    <div className="IMG">
      <img className="ii" src={"./Sign up-rafiki (1).png" }/>
    </div>
     
   
    {/* <img className="imgR" src={"https://static.vecteezy.com/system/resources/previews/003/689/224/non_2x/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg"} /> */}

    {/* firstName */}
    <div className="hi">
    <div class="waviy">
   <span >R</span>
   <span >e</span>
   <span >g</span>
   <span >i</span>
   <span >s</span>
   <span >t</span>
   <span >e</span>
   <span >r</span>
  </div>
    <div className="name">
     
    <input className="firstNameR"
     onChange={(e)=>{setFirstName(e.target.value);}}
        type="text" placeholder="First Name"/>
          {/* <label>First Name</label> */}
       
    {/* lastName */}
    <input  className="lastNameR" 
     onChange={(e)=>{setLastName(e.target.value);}}
     type="text" placeholder="Last Name"/>
     </div>
    {/* age */}
    <input  className="ageR" 
     onChange={(e)=>{setAge(e.target.value);}}
        type="number" placeholder="Age"/>
    {/* country */}
    <input  className="countryR"
    onChange={(e)=>{setCountry(e.target.value);}}
    type="text" placeholder="Country"/>
    {/* bio */}
    <input  className="bioR"
     onChange={(e)=>{setBio(e.target.value);}}
     type="text" placeholder="Bio"/>
    {/* imgProfile */}
    {/* <input  className="imgProfile"
     onChange={(e)=>{setImgProfile(e.target.value);}}
     type="text" placeholder="imgProfile"/> */}
    {/* email */}
    <input  className="emailR"
     onChange={(e)=>{setEmail(e.target.value);}} 
     type="email" placeholder="Email"/>
    {/* password */}
    <input  className="passwordR"
     onChange={(e)=>{setPassword(e.target.value);}} 
  type="password" placeholder="Password"/>
    
    <div class="footer">
  <p className="footerName">Done by Mohamed Asfour</p>
</div>
  

    {/* RegisterButton */}

    <button className="RegisterButton" onClick={AddNewUser}>Register</button>
    </div>
  
  </div>
  
  ) ;
};
export default Register;
