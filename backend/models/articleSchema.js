const mongoose = require('mongoose');
//creare Post Schema
const articleSchema= new mongoose.Schema({
post:{type: String, required: true},
poster:{type: mongoose.Schema.Types.ObjectId, ref: "user" },
Comment:[{type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
//like:{type: Number}

});
module.exports=mongoose.model("article",articleSchema);
