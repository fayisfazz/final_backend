const mongoose = require("mongoose");

const MarkEntrySchema = mongoose.Schema({
  eventName: {
    type: mongoose.Schema.Types.String,
    ref: "Events",
  },
  first: {
    type: String,
    required: true,
  },
  second: {
    type: String,
    required: true,
  },
  third: {
    type: String,
    required: true,
  },
  firstDepartment: {
    type: String,
    required: true,
  },
  secondDepartment: {
    type: String,
    required: true,
  },
  thirdDepartment: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("MarkEntry", MarkEntrySchema);
