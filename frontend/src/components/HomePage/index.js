import React from "react";
import axios, { Axios } from "axios";
import "./style.css";
import { newContext } from "../../App";
import { useState, useContext, useEffect } from "react";
//import { newContext } from "../../App";
//import { Routes, Route, Link } from "react-router-dom";

const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const [post, setPost] = useState("");
  const [poster, setPoster] = useState("");
  const [comment, setComment] = useState("");
  const [message, setMessage] = useState("");
  const { token, isLoggedIn } = useContext(newContext);
  const [userId, setUserId] = useState("");
 const [updateArticles, setUpdateArticles] = useState(false);
   const [articleId, setArticleId] = useState(false);
//creat function getAllArticle
  const getAllArticle = () => {
    console.log("token : " + token);
    axios
      .get("http://localhost:5000/articles/", {
        headers: { Authorization: "Bearer " + token },
      })
      .then((response) => {
        console.log(response.data.articles);
        setArticles([...response.data.articles]);
        console.log(articles);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  
  //create function updateArticle
   const updateArticle =  (id) => {
    try {
       axios.put(`http://localhost:5000/articles/${id}`, {
        post:post,
        poster:poster
      });
      getAllArticle();
    } catch (error) {
      console.log(error);
    }
  };
  //Create function deleteArticle
const deleteArticle=(id)=>{
    try {
         axios.delete(`http://localhost:5000/articles/${id}`);
         getAllArticle();
      } catch (error) {
        console.log(error);
      }
};
  useEffect(() => {
    getAllArticle();
  }, []);
  

  return (
    <div className="HomePage">
      <h1>HomePage</h1>
      {articles &&
        articles.map((elem, i) => {
          return (
            <div key={i} className="postPage">
               
              <p className="post">{elem.post}</p>
              <button className="DeletePost"  onClick={()=>deleteArticle}>Delete Post</button>

              <button className="UpdateButton" onClick={()=>updateArticle}>Update Post</button>
              <p className="comment">{elem.comment}</p>
              <div className="commentMain">
               
              <input
                className="comment"
                onChange={(e) => {
                  setComment(e.target.value);
                }}
                type="comment"
                placeholder="comment"
              />
               <button className="buttonComment">AddComment</button>
               
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default HomePage;
