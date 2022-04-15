const express = require("express");
const router = express.Router();
const User = require("../Models/User");

// //auth utility
// const authService = require("../Services/Auth");

//Get all Users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.send("Error" + err);
  }
});

//Get User By Id
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (err) {
    res.send("Error" + err);
  }
});

//Get User By Id
router.get("/{userType}", async (req, res) => {
  try {
    const user = await User.findOne(req.params.userType === "admin");
    res.json(user);
  } catch (err) {
    res.send("Error" + err);
  }
});

//User Creation
router.post("/", async (req, res) => {
  //if event exists
  let user = await User.findOne({ username: req.body.username });
  let email = await User.findOne({ email: req.body.email });

  if (user)
    return res.status(400).json({ errors: [{ msg: "Username already exist" }] });
    if (email)
    return res.status(400).json({ errors: [{ msg: "Email already exist" }] });

  const newuser = new User({
    username: req.body.username,
    email: req.body.email,
    userType: req.body.userType,
  });

  try {
    const e1 = await newuser.save();
    res.json(e1);
  } catch (err) {
    res.send("Error" + err);
  }
});

//Password Updation
router.patch("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.send("User Not Found");
    user.password = req.body.password;
    const e1 = await user.save();
    res.json(e1);
  } catch (err) {
    res.send("Error" + err);
  }
});

module.exports = router;
