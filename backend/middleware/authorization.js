const jwt = require("jsonwebtoken");
const authorization=(string)=>{
    return (req, res, next) => {
        // const tokenPayload=req.token;
        // console.log(tokenPayload);
        if (!req.token.role.permissions.includes(string)) {

          return res.status(403).json(
            {success: false, message: `Unauthorized`,});
        }
        next();
      };
};

module.exports =authorization; 