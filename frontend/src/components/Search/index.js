// import React from "react";
// import "./style.css";
import axios, { Axios } from "axios";
import React from "react";
// import axios, { Axios } from "axios";
// import "./style.css";
import { newContext } from "../../App";
import { useState, useContext, useEffect } from "react";
import {Link, useNavigate }from 'react-router-dom'




const Search=()=>{
const[user,setUser]=useState([]);
    const[firstName,setfirstName]=useState("");

    // const { token, isLoggedIn } = useContext(newContext);
      const [message, setMessage] = useState("");
      const getuserByfistName =  () => {
        axios.get(`http://localhost:5000/users/${firstName}`)
        .then((response)=>{
          console.log(response.data);
        //   setUser(response.data)
          
    
      setMessage(response.data.message);
         
        }).catch((err)=>{
          console.log(err);
          setMessage(err.response.data.message);
        })
      };

};
export default Search;
