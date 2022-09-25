const mongoose = require('mongoose');
//creare Roles Schema
const rolesSchema=mongoose.Schema({
role:{type:String,required:true},
permissions:{type:String,required:true}
});
module.exports = mongoose.model("role", rolesSchema);
