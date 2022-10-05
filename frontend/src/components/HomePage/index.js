import React from "react";
import axios, { Axios } from "axios";
import "./style.css";
import { newContext } from "../../App";
import { useState, useContext, useEffect } from "react";
import {Link, useNavigate }from 'react-router-dom'
import {Image, Video, Transformation} from 'cloudinary-react';
import { GoogleLogout } from 'react-google-login';

//import { newContext } from "../../App";
//import { Routes, Route, Link } from "react-router-dom";

const HomePage = () => {
  
  const history = useNavigate();
  const [articles, setArticles] = useState([]);
  const [post, setPost] = useState("");
  const [poster, setPoster] = useState("");
   const [comment, setComment] = useState([]);
   const [commenter, setCommenter] = useState("");
  const [updateInput, setUpdateInput] = useState(false);
  // const [message, setMessage] = useState("");
  const { token, isLoggedIn } = useContext(newContext);
//   const [userId, setUserId] = useState("");
//  const [updateArticles, setUpdateArticles] = useState(false);
   const [articleId, setArticleId] = useState(false);
   const[newComment,setnewComment]=useState([]);
  const [Newpost, setNewpost] = useState("");
  const [likes, setLikes] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
	// const [selectedFile, setSelectedFile] = useState();
	// const [isFilePicked, setIsFilePicked] = useState(false);
   const [user, setUser] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [search, setSearch] = useState('');
  const[IsLoggedIn,setIsLoggedIn]=useState(true);
  const [Token, setToken] = useState("");
const [images, setImages] = useState(null);
const [ profile, setProfile ] = useState([]);

//creat function getAllArticle

const getAllArticle = () => {
  console.log("token : " + token);
  axios.get("http://localhost:5000/articles/ALL", {
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
//creat function getArticle
  // const getArticle = () => {
  //   console.log("token : " + token);
  //   axios.get("http://localhost:5000/articles/", {
  //       headers: { Authorization: "Bearer " + token },
  //     })
  //     .then((response) => {
  //       console.log(response.data.articles);
  //       setArticles([...response.data.articles]);
  //       console.log(articles);
  //     })
  //     .catch((err) => {
  //       console.log(err.response.data);
  //     });
  // };
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
      //setUserId(user._id);
    } else {
      setLikes(likes + 1);
    
    }
    setIsClicked(!isClicked);
   

  };
  const NewComment=()=>{
    axios.post(`http://localhost:5000/articles/comments/`,{comment:comment,commenter:commenter},
    { headers:{'Authorization': 'Bearer '+token}})
    .then((response)=>{
       console.log(response.data);
      //  setMessage("The article has been created successfully");
       console.log("The article has been created successfully");
      
     }).catch((err)=>{
       console.log(err);
      //  setMessage(err.response.data.message);
     })
  };
  const getAllUser = () => {
    // console.log("token : " + token);
    axios.get("http://localhost:5000/users/", {
        headers: { Authorization: "Bearer " + token },
      })
      .then((response) => {
        console.log(response.data.user);
        setUser([...response.data.user]);
        console.log(user);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  useEffect(() => {
    getAllUser();
  }, []);
  
  const handleFile=(e)=>{
    if(e.target.files&&e.target.files[0]){
      setImages(URL.createObjectURL(e.target.files[0]));
    }
  }
  const logoutHandler = () => {
    console.log('successfully logged out!');
    setProfile(null);
    console.log(profile);
history("/")

    // setIsSignedIn(false);
    // console.log(GoogleLogout);
  
  }
  return (
    <div className="HomePage">
      
      <input  className="file" type="file" onChange={handleFile}/>
         <Image cloudName="demo" publicId="">
   <Transformation crop="scale" width="200" angle="10" />
 </Image>
      <div className="suggestedfriends">
      <p className="friendsMAin">suggested friends:</p>
          {user.map((elem,i)=>{
            return(<div key={i} className="Friends"> 
           <button className="butFriends"> <p className="friends">{elem.firstName}</p>
               <p className="friendscountry">Country:{elem.country}</p>
               <p className="friendscountry">Age:{elem.age}</p></button>
              

               </div>)
          })}

        </div>
        <GoogleLogout
      clientId="994328639474-ub85dkgodp4vrm5nvfaemiklfko5jpt9.apps.googleusercontent.com"
      buttonText="Logout"
       onLogoutSuccess={logoutHandler}
    >
    </GoogleLogout>
        <div className="out"> <Link className="logOut" to="/Login" onClick={()=>{
          history("/Login")
setIsLoggedIn(false)
setToken("")

localStorage.clear();
  }}>Log Out</Link></div>
    
      
      {/* <h1>HomePage</h1> */}
      {articles &&
        articles.map((elem, i) => {
          return (
            <div key={i} className="postPage">
              
              <p className="post">{elem.post}</p>
              <p className="post">{elem.comment}</p>
             
              
              {/* <p className="post">{elem.commenter}</p> */}


              {/* <input  className="file" type="file" onChange={handleFile}/>
<img className="imgProfile" src={images}/> */}
              <div className="buttonHome">
              <button className="like" onClick={ handleClick }>
      <span >{ `Like | ${likes}` }</span>
      <p>{elem.like}</p>
    </button>
              {/* <button className="DeletePost" id={elem._id} onClick={(e)=>{
            axios.delete(`http://localhost:5000/articles/${e.target.id}`).then((res)=>{
                console.log("delete");
            }).catch((err)=>{
                console.log(err);
            })
        }}>Delete</button> */}

                {/* <div className="UpdateMain">
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
         </div> */}
              </div>
              <p className="comments">{elem.comment}</p>
              {/* <p className="comments">{elem.user}</p> */}

              
              <div className="commentMain">
              <input className="commentInput" type="text" 
     placeholder="comment" onChange={(e)=>{setComment(e.target.value)}}/>
      <button className="CommentButton" onClick={NewComment}>Add Comment</button>
               
              </div>
            </div>
          );
        })}
        
    
        <div class="footer">
  <p className="footerName">Done by Mohamed Asfour</p>
</div>
    </div>
  );
};
export default HomePage;
