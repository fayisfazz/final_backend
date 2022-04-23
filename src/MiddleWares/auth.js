const jwt = require("jsonwebtoken");

var jwtSecret = "token";

module.exports = function (req, res, next) {
  console.log("token");
  //get the token from header frontend

  const token = req.headers.token;
  console.log(token);

  //get the token from header postman
  // const token = req.header("x-auth-token");

  //check if there is no token
  if (!token) {
    return res.status(401).json({ msg: "No token,Authorization denied" });
  }

  //Verify the token
  try {
    const decoded = jwt.verify(token, jwtSecret);
    //injecting user details to the request
    req.body = decoded.user;
    // req.body.user = decoded;
    next();
  } catch (err) {
    res.send(401).json({ msg: "Token is not valid" });
  }
};
