const mongoose = require("mongoose");

const MarkEntrySchema = mongoose.Schema({
  eventName: {
    type: String,
    required: true,
  },
  first: {
    type: String,
    required: true,
  },
  second: {
    type: String,
  },
  third: {
    type: String,
  },
  firstDept: {
    type: String,
    required: true,
  },
  secondDept: {
    type: String,
  },
  thirdDept: {
    type: String,
  },
  firstPoint:{
    type:Number,
    required:true
  },
  secondPoint:{
    type:Number,
  },
  thirdPoint:{
    type:Number,
  }
});
module.exports = mongoose.model("MarkEntry", MarkEntrySchema);
