import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import axios from "axios";
import { newContext } from "../../App";
const AddArticle=()=>{
const [post, setPost] = useState("");
const [poster, setPoster] = useState("6330b552f198916cada996eb");
const [comment, setComment] = useState("");

const token =useContext(newContext);
console.log(token)

const newArticle=()=>{
    axios.post("http://localhost:5000/articles/",{post:post},
    { headers:{'Authorization': 'Bearer '+token.token}})
    .then((response)=>{
       console.log(response.data);
      
     }).catch((err)=>{
       console.log(err.response.data);
     })
  }
  return( <div >
     <input type="text" 
     placeholder="post" onChange={(e)=>{setPost(e.target.value)}}/>
      <button className="newartical" onClick={newArticle}>Create New Post</button>
      </div>
  )
};







export default AddArticle;
