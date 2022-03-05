const mongoose = require("mongoose");

const UserRegisterSchema = mongoose.Schema({
  candidateName: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  admnNumber: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("UserRegister", UserRegisterSchema);