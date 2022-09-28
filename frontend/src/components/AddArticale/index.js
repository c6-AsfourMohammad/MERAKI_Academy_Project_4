import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import axios from "axios";
import { newContext } from "../../App";
const AddArticle=()=>{
const [post, setPost] = useState("");
const [poster, setPoster] = useState("");
const [comment, setComment] = useState("");
const [message, setMessage] = useState("");
const{ token,isLoggedIn}  =useContext(newContext);
//console.log(token)

const newArticle = async (e) => {
    console.log(token);
    e.preventDefault();
    try {
      const article = {
        post,
        poster,
      };
      const result = await axios.post(
        "http://localhost:5000/articles",
        article,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (result.data.success) {
       
        setMessage("The article has been created successfully");
      }
    } catch (error) {
      if (!error.response.data.success) {
      
        setMessage(error.response.data.message);
      }
    }
  };

// const newArticle=()=>{
//     axios.post("http://localhost:5000/articles/",{post:post,poster:isLoggedIn},
//     { headers:{'Authorization': 'Bearer '+token}})
//     .then((response)=>{
//        console.log(response.data);
      
//      }).catch((err)=>{
//        console.log(err);
//      })
//   }
  return( <div className="Article">
     <input className="post" type="text" 
     placeholder="post" onChange={(e)=>{setPost(e.target.value)}}/>
      <button className="articalButton" onClick={newArticle}>Create New Post</button>
      </div>
  )
};







export default AddArticle;
