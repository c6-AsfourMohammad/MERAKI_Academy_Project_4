const mongoose = require('mongoose');
//creare User Schema
const userSchema= new mongoose.Schema({
    firstName:{ type:String,required:true},
    lastName:{type:String},
    age:{type:Number},
    country:{type:String},
    bio:{type:String},
    imgProfile:{type:String},
    email:{type: String, required: true, unique: true},
    password:{ type: String, required: true} ,
    role:{type:mongoose.Schema.Types.ObjectId,ref:"roles"}
});


module.exports=mongoose.model("user",userSchema);