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
});

module.exports = mongoose.model("MarkEntry", MarkEntrySchema);