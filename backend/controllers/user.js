const express = require("express");
const mongoose=require('mongoose');
//const bcrypt = require("bcrypt");
//const jwt = require("jsonwebtoken");
const usersModel = require("../models/userShema");
//create register function
const register=(req,res)=>{
const{firstName,
  lastName,
  age,
  country,
  bio,
  imgProfile,
  email,
   password,
    role }=req.body;

const user=new usersModel({
    firstName,
    lastName,
    age,
    country,
    bio,
    imgProfile,
    email, 
    password, 
    role
});
user.save().then((result)=>{
    res.status(200)
    res.json({massage:"created user",user:result});
})
.catch((err)=>{
    res.status(500)
    res.json({massage:"Server Error",err})
});
};


//create function Login
// const Login=(req,res)=>{
//     const password=req.body.password;
//     const email=req.body.email;
//     usersModel.find({email:email,password:password})
//     .then(async(result)=>{
// //console.log(result);
// if (!result) {
//     return res.status(404).json({
//       success: false,
//       message: `The email doesn't exist`,
//     });
//   }
//   try {
//     const log = await bcrypt.compare(password, result.password);
//     if (!log) {
//       return res.status(403).json({message: " password  incorrect"});
//     }
//     const payload = {
//       userId: result._id,
//       role: result.role,
//       firstName: result.firstName,
//       country: result.country,
//       like:result.like,
//       bio:result.bio,
//       //Permissions:["write","read","delete"]
//     };

//     const options = {
//       expiresIn: "60m",
//     };
//     const token = await jwt.sign(payload, process.env.SECRET, options);
//     res.status(200).json({message:"login credentials incorrect",token: token });
//   } catch (err) {
//     res.json(err.message);
//   }
// })
// .catch((err) => {
//   res.status(500).json({ message:" Server Error",err: err.message });
// });
// };
module.exports={register};