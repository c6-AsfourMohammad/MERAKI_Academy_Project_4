import React from "react";
import axios,{Axios} from "axios";
import "./style.css";
import { useState,useContext,useEffect } from "react";
import { newContext } from "../../App";
import { Routes, Route, Link } from "react-router-dom";

const homePage=()=>{
    const [article, setArticle] = useState("")
const [post, setPost] = useState("");
const [poster, setPoster] = useState("");
const [comment, setComment] = useState("");
const [message, setMessage] = useState("");
    const getAllArticle=()=>{
        axios.get("http://localhost:5000/articles/",
        { headers:{'Authorization': 'Bearer'  +token}})
        .then((response)=>{
            console.log(response.data);
            setArticle(response.data)
        }).catch((err)=>{
            console.log(err);

        })
    }
    useEffect(() => {
        getAllArticle();
      }, []);
    
return(
<div className="HomePage">

</div>)
};
export default homePage;
