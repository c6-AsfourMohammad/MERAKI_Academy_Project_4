const mongoose = require("mongoose");
//creare comment Schema
const commentSchema= new mongoose.Schema({
    comment: { type: String, required: true },
    commenter: { type: mongoose.Schema.Types.ObjectId, ref: "post" }
});
module.exports=mongoose.model("comment",commentSchema);
