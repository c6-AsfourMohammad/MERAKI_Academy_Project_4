const express = require("express");
const mongoose=require('mongoose');
const roleModel = require("../models/rolesSchema");
//creat function role
const createRole=(req,res)=>{
const {role,permissions}=req.body;
const roles=new roleModel({role,permissions});
roles.save().then((result)=>{
    res.status(200)
    res.json({massage:"created role",role:result});
})
.catch((err)=>{
    res.status(500)
    res.json({massage:"Error",err})
})
};
module.exports={createRole};