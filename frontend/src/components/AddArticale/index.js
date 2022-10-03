import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import axios from "axios";
import { newContext } from "../../App";
import ImageUploading from 'react-images-uploading';
const AddArticle=()=>{
const [user, setUser] = useState([]);
// const [userId, setUserId] = useState("");
// const [firstName, setfirstName] = useState("");
// const [country, setCountry] = useState("");
const [post, setPost] = useState("");
const [poster, setPoster] = useState("");
// const [bio, setbio] = useState("");
// const [comment, setComment] = useState("");
const [message, setMessage] = useState("");
const{ token,isLoggedIn}  =useContext(newContext);
const [selectedFile, setSelectedFile] = useState();
const [isFilePicked, setIsFilePicked] = useState(false);
const [images, setImages] = useState([]);

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
 const getAllArticle=()=>{
    axios.get("http://localhost:5000/articles/",
    { headers:{'Authorization': 'Bearer '+token}})
    
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
    console.log(e.target.files);
    console.log(e.target.files[0]);
  }
  //return  main function 
  return( 
  <div className="Article">

    {user&&user.map((elem,i)=>{
    //return map function 
        return( 
        <div key={i} className="profile">
            <p className="firstName">{elem.firstName}</p>
            {/* <p className="lastName">{elem.lastName} </p> */}
            <p className="bio"><br/>Bio: {elem.bio}</p>
            <p className="country"><br/>Country:{elem.country}</p>
            <p className="Age"><br/>Age:{elem.age}</p>
            {/* <img className="img" src={`${elem.files}`}/> */}
            

        </div>)

        
    })}
    

<div>


<input  className="file" type="file" onChange={(e)=>{
handleFile(e)}}/>
  {images.map((elem, index) => (
        <img key={index} src={elem.File.name} />
       
      ))}
      
</div>
     <input className="post" type="text" 
     placeholder="post" onChange={(e)=>{setPost(e.target.value)}}/>
     
      <button className="articalButton" onClick={newArticle}>Create New Post</button>
      </div>
  )
};







export default AddArticle;
