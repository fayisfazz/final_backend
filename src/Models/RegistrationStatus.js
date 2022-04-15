const mongoose = require("mongoose");

const RegisterStatusSchema = mongoose.Schema({
  isLock:{
    type: Boolean,
    required: true,
  }
});

module.exports = mongoose.model("RegistrationStatus", RegisterStatusSchema);