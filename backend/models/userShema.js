const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
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
userSchema.pre("save", async function(){
    this.password=await bcrypt.hash(this.password,10)
})

module.exports=mongoose.model("user",userSchema);