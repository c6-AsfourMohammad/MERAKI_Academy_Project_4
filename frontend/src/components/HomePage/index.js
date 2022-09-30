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
  const [comment, setComment] = useState([]);
  const [commenter, setCommenter] = useState("");
  const [updateInput, setUpdateInput] = useState(false);
  const [message, setMessage] = useState("");
  const { token, isLoggedIn } = useContext(newContext);
  const [userId, setUserId] = useState("");
 const [updateArticles, setUpdateArticles] = useState(false);
   const [articleId, setArticleId] = useState(false);
   const[newComment,setnewComment]=useState([]);
  const [Newpost, setNewpost] = useState("");
  const [likes, setLikes] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

//creat function getAllArticle
  const getAllArticle = () => {
    console.log("token : " + token);
    axios.get("http://localhost:5000/articles/", {
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
  //create function handleUpdate 
  const handleUpdate = (articles) => {
    setUpdateInput(!updateInput);
    setArticleId(articles._id);

    setPost(articles.post);
    if (updateInput) updateArticle(articles._id);
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
// const deleteArticle=(id)=>{
//     try {
//          axios.delete(`http://localhost:5000/articles/${id}`);
//          getAllArticle();
//       } catch (error) {
//         console.log(error);
//       }
// };
  useEffect(() => {
    getAllArticle();
  }, []);
//   const createNewComment =  (id) => {
//     try {
//        axios.post(`http://localhost:5000/articles/${id}/comments`,{comment:comment},
//         {headers: { Authorization: `Bearer ${token}`}
//         });
//       getAllArticle();
//     } catch (error) {
//       console.log(error.response);
//     }
//   };

 //create like counter

  const handleClick = () => {
    if (isClicked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsClicked(!isClicked);
  };
  return (
    <div className="HomePage">
      {/* <h1>HomePage</h1> */}
      {articles &&
        articles.map((elem, i) => {
          return (
            <div key={i} className="postPage">
               
              <p className="post">{elem.post}</p>
              <div className="buttonHome">
              <button className={ `like-button ${isClicked && 'liked'}` } onClick={ handleClick }>
      <span className="likes-counter">{ `Like | ${likes}` }</span>.
    </button>
              <button className="DeletePost" id={elem._id} onClick={(e)=>{
            axios.delete(`http://localhost:5000/articles/${e.target.id}`).then((res)=>{
                console.log("delete");
            }).catch((err)=>{
                console.log(err);
            })
        }}>Delete</button>

                <div className="UpdateMain">
                <input className="postInput"onChange={(e) => {
                  setNewpost(e.target.value);
                }}
                type="post"
                placeholder="post"
              />
        <button className="UpdateButton" id={elem._id} onClick={(e)=>{
           
            axios.put(`http://localhost:5000/articles/${e.target.id}`,{post:Newpost})
            .then((response)=>{
                
                console.log(response);
                console.log("Update Done");
            }).catch((err)=>{
                console.log(err);
            });
        }}>Update</button>
         </div>
              </div>
              <p className="comment">{elem.comment}</p>
              
              <div className="commentMain">
               
              <input className="commentInput"onChange={(e) => {
                  setnewComment(e.target.value);
                }}
                type="comment"
                placeholder="comment"
              />
                <button id={elem._id} onClick={(e)=>{
            axios.post(`http://localhost:5000/articles/${e.target.id}/comments/`,
            {Comment:[newComment]})
            .then((response)=>{
                console.log("done");
                console.log(response.data);
            }).catch((err)=>{
                console.log(err);
        
            })
            
        }}>Add comment</button>
               
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default HomePage;
