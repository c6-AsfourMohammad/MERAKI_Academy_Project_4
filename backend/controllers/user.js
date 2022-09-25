const express = require("express");
const mongoose=require('mongoose');
//const bcrypt = require("bcrypt");
//const jwt = require("jsonwebtoken");
const usersModel = require("../models/userShema");
//create register function
const register=(req,res)=>{
const{firstName,lastName,age,country,bio,imgProfile,email, password, role }=req.body;
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
module.exports={register};