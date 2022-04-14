const jwt = require("jsonwebtoken");

var jwtSecret = "token"

module.exports = function (req, res, next) {
    //get the token from header
    const token = req.header("x-auth-token");

    //check if there is no token
    if(!token) {
        return res.status(401).json({msg:"No token,Authorization denied"})
    }

    //Verify the token
    try{
        const decoded = jwt.verify(token,jwtSecret);
         //injecting user details to the request
        // req.body = decoded.user;
         req.body.user = decoded;
    console.log(req.body)
        //req.user = decoded.user;
        next();
    }catch(err){
         res.send(401).json({msg:"Token is not valid"})
    }
}