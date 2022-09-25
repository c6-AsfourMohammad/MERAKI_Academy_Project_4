const jwt = require("jsonwebtoken");
const authentication=(req,res,next)=>{
    const token=req.headers.authorization.split(" ").pop();
    const secretKey=process.env.SECRET;
    jwt.verify(token,secretKey,(err,result)=>{
        if(err){
            res.json("Forbidden");
            return
        }
        console.log(result);
        req.token=result;
        next()
    });
}
module.exports= authentication;