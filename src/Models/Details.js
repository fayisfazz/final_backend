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
  inuagration: {
    type: String,
    required: true,
  },
  guest: {
    type: String,
    required: true,
  },
  totalEvent: {
    type: Number,
    required: true,
  },
  noOfDays: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Details", DetailsSchema);
