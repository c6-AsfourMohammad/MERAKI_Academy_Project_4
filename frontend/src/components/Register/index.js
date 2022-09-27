import React, { useContext, useState,useEffect } from "react";
import "./style.css";
import axios from "axios";




const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [bio, setBIo] = useState("");
  const [imgProfile, setiImgProfile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role,setRole]=useState("6330b552f198916cada996eb");
  return <div>Register</div>;
};
export default Register;
