const mongoose = require("mongoose");

const DetailsSchema = mongoose.Schema({
  pgmName: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  inuaguration: {
    type: String,
    required: true,
  },
  guest: {
    type: String,
    required: true,
  },
  totalEvent: {
    type: String,
    // required: true,
  },
  noOfDays: {
    type: String,
    required: true,
  },
  isRegistrationLock:{
    type: Boolean,
    default:false,
    // required:true
  }
});

module.exports = mongoose.model("Details", DetailsSchema);
