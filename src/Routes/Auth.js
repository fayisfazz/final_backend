const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth = require("../MiddleWares/auth");
const { check, validationResult } = require("express-validator");
const User = require("../Models/User");


var jwtSecret = "token";

router.get("/", async (req, res) => {
  try {
    const Users = await User.find();
    res.json(Users);
  } catch (err) {
    res.send("Error" + err);
  }
});



//Get user by token
router.get("/auth", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Internal Server Error");
  }
});

//Authentication user and get token
router.post(
  "/login",
  [
    check("email", "Please enter a valid email address").isEmail(),
    check("password", "Please is required").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;

    try {
      //if user exists
      let user = await User.findOne({ email });

      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }

      if (password === user.password) {
        isMatch =true;
      }
      else { 
        isMatch =false;
      }
  
      if ( !isMatch) {
        return res.status(400).json({ errors:[{ msg:"wrong password"}]})
      }

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }

      //Return jsonwebtoken
      const payload = {
        user: {
          id: user.id,
          type: user.userType,
        },
      };
      jwt.sign(payload, jwtSecret, { expiresIn: "5 days" }, (err, token) => {
        if (err) throw err;
       
        res.status(200).send({
          message: "Successfully logged in",
          data: {
            token,
            username: user.username,
            type: user.userType,
            
          },
        });
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

router.post(
  "/register",
  [
    check("userName", "User Name is Required").not().isEmpty(),
    check("email", "Please enter a valid email address").isEmail(),
    check(
      "password",
      "Please enter password with 5 or more characters"
    ).isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty) {
       return res.status(400).json({ errors: errors.array() });
    }
    const { username, email, password } = req.body;

    try {
      //if user exists
      let user = await User.findOne({ email });

      if (user) {
        res.status(400).json({ errors: [{ msg: "User already exist" }] });
      }else

      user = new User({
        username:username,
        email:email,
        password:password,
      });
      await user.save();
      res.status(200).json( [{ msg: "User Registered" }] );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Internal Server Error");
    }
  }
);




module.exports = router;
