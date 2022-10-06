import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import axios from "axios";
import { newContext } from "../../App";
import ImageUploading from 'react-images-uploading';
import {Image, Video, Transformation} from 'cloudinary-react';

const AddArticle=()=>{
// const [user, setUser] = useState([]);
// const [userId, setUserId] = useState("");
// const [firstName, setfirstName] = useState("");
// const [country, setCountry] = useState("");
// const [post, setPost] = useState("");
// const [poster, setPoster] = useState("");
// const [bio, setbio] = useState("");
// const [comment, setComment] = useState("");
const [message, setMessage] = useState("");
// const{ token,isLoggedIn}  =useContext(newContext);
const [selectedFile, setSelectedFile] = useState();
const [isFilePicked, setIsFilePicked] = useState(false);
// const [images, setImages] = useState(null);
const [articles, setArticles] = useState([]);
// const [articles, setArticles] = useState([]);
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

const newArticle=()=>{
    axios.post("http://localhost:5000/articles/",{post:post,poster:poster},
    { headers:{'Authorization': 'Bearer '+token}})
    .then((response)=>{
       console.log(response.data);
       setMessage("The article has been created successfully");
       console.log("The article has been created successfully");
      
     }).catch((err)=>{
       console.log(err);
       setMessage(err.response.data.message);
     })
  };
  const getArticle = () => {
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
  const handleUpdate = (articles) => {
    setUpdateInput(!updateInput);
    setArticleId(articles._id);

    setPost(articles.post);
    if (updateInput) updateArticle(articles._id);
  };
  const updateArticle =  (id) => {
    try {
       axios.put(`http://localhost:5000/articles/${id}`, {
        post:post,
        poster:poster
      });
      getArticle();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getArticle();
  }, []);
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
//  const updateArticle = async (id) => {
//     try {
//       await axios.put(`http://localhost:5000/articles/${id}`, {
//         post:post,
//         poster:poster
//       });
//       getAllArticle();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//create function getUser 
const getUser = () => {
    console.log("token : " + token);
    
    axios.get(`http://localhost:5000/users/one`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((response) => {
        // console.log(response.data.user);
         setUser([response.data.user]);
        // setUserId(user._id)
        console.log(response.data.user);
      // console.log(user);
      })
      .catch((err) => {
         console.log(err);
      });
  };
  useEffect(() => {
    getUser();
  }, []);

  //create function uploaded file
  const handleFile=(e)=>{
    if(e.target.files&&e.target.files[0]){
      setImages(URL.createObjectURL(e.target.files[0]));
    }
  }
  const handleClick = () => {
    if (isClicked) {
      setLikes(likes - 1);
      //setUserId(user._id);
    } else {
      setLikes(likes + 1);
    
    }
    setIsClicked(!isClicked);
   

  };
  
  //return  main function 
  return( 
    
  <div className="Article">
    <div className="imgUpl">
    <Image cloudName="imgProfile" publicId={images} src={images}>
   <Transformation crop="scale" width="200" angle="10" />
 </Image>
<input  className="file" type="file" onChange={handleFile}/>
 {/* <img className="imgProfile" src={images}/>  */}

  {/* {images.map((elem, index) => (
        <img key={index} src={elem.file.name} />
       
      ))} */}
       
</div>
    
     {user&&user.map((elem,i)=>{
    //return map function 
        return( 
        <div key={i} className="profile">
            <p className="firstName">{elem.firstName}</p>
            
            {/* <p className="lastName">{elem.lastName} </p> */}
            <p className="bio"><br/>Bio: {elem.bio}</p>
            <p className="country"><br/>Country:{elem.country}</p>
            <p className="Age"><br/>Age:{elem.age}</p>
            {/* <p className="imgProfile">{elem.imgProfile}</p> */}

            {/* <img className="img" src={`${elem.files}`}/> */}
            

        </div>)

        
    })}
     <input className="post" type="text" 
     placeholder="post" onChange={(e)=>{setPost(e.target.value)}}/>
     
      <button className="articalButton" onClick={newArticle}>Create New Post</button>
  {articles &&
        articles.map((elem, i) => {
          return (
            <div key={i} className="postPage">
               
              <p className="post">{elem.post}</p>
              <input  className="file" type="file" onChange={handleFile}/>
<img className="imgProfile" src={images}/>
              <div className="buttonHome">
              <button className="like" onClick={ handleClick }>
      <span >{ `Like | ${likes}` }</span>
      <p>{elem.like}</p>
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
              <p className="comments">{elem.comment}</p>
              
              <div className="commentMain">
              <input className="commentInput" type="text" 
     placeholder="comment" onChange={(e)=>{setComment(e.target.value)}}/>
      <button className="CommentButton" onClick={NewComment}>Add</button>
      
              {/* <input className="commentInput"onChange={(e) => {
                  setComment(e.target.value);
                }}
                type="comment"
                placeholder="comment"
              />

                <button id={elem._id} onClick={(e)=>{
            axios.post(`http://localhost:5000/articles/comments/`,
            {Comment:comment})
            .then((response)=>{
                console.log("done");
                console.log(response.data);
            }).catch((err)=>{
                console.log(err);
        
            })
            
        }}>Add comment</button> */}
               
              </div>
            </div>
          );
        })}
   
    


      <div class="footer">
  <p className="footerName">Done by Mohamed Asfour</p>
</div>
      </div>
  )
};







export default AddArticle;
