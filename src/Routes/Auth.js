const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth = require("../MiddleWares/auth");
const { check, validationResult } = require("express-validator");
const User = require("../Models/User");
const authService = require("../Services/Auth");
const userService = require("../Services/User");

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
    const user = await User.findById(req.body.id).select("-password");
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
        isMatch = true;
      } else {
        isMatch = false;
      }

      if (!isMatch) {
        return res.status(400).json({ errors: [{ msg: "wrong password" }] });
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

      //creating token
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
      } else
        user = new User({
          username: username,
          email: email,
          password: password,
        });
      const data = await user.save();
      // console.log(data);
      res.status(200).json(data);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

//forget password
router.post("/forgot", async (req, res) => {
  const { username, email } = req.body;
  //checking username
  if (!username || !email)
    res.status(404).send({
      message: "forgot password credentials are not given",
    });

  //condition to fetch the user
  const conditions = {
    username,
    email,
  };
  //To get User By certain coditions
const getUsersBycondition = async (condition) => {
  const users = await User.find(conditions).select({
    password: 0,
    __v: 0,
    createdTime: 0,
  });
  return users;
};
  //getting all user records
  
  const userData = await getUsersBycondition(conditions);

  if (!userData || userData.length !== 1 || userData[0].status == "created")
    return res.status(404).send({
      message: "invalid username or password",
    });

  //data to embed as an paylod in token
  const userCoreData = {
    id: userData[0]._id,
    type: userData[0].userType,
  };

  //generating user jwt token
 // const userToken = await authService.createNewToken(userCoreData);
 jwt.sign(userCoreData, jwtSecret, { expiresIn: "5 days" }, (err, userToken) => {
  if (err) throw err;

  // sending back the generated token
  res.status(201).send({
    message: "user credential are successfully done",
    data: {
      userToken,
    },
  });
 
 });
});


//reset password
router.patch("/reset/:userToken",auth, async (req, res) => {
  const { password } = req.body;
  //password is not provided
  if (!password)
    res.status(404).send({
      message: "new password is not provided",
    });

  //encrypting the password using cryptoJs
   //const encryptedPassword = authService.encryptPassword(password);

   //updating the password
   await userService.updateUser(req.body.user.user.id, {
     password: password
   });

  //sending back the response
  res.status(200).send({ message: "password successfully updated" });
});
module.exports = router;
