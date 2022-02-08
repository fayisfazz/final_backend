const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique:true
  },
  password: {
    type: String,
  },
  // status: {
  //   type: String,
  //   required: true,
  // },
  // userType: {
  //   type: String,
    // required: true,
  // },
  date:{
    type:Date,
    default:Date.now
  }
});

module.exports = mongoose.model("user", UserSchema);