jwt = require("jsonwebtoken");
const authorization=(string)=>{
    return (req,res,next)=>{
        const tokenPayload=req.token;
        console.log(tokenPayload);
if(tokenPayload.Permissions.includes(string)){
    next()
}else{
    res.status(403)
    res.json({success: false,massage: "Unauthorized"})
}
    };
};

module.exports =authorization; 