const mongoose = require("mongoose");

const MarkEntrySchema = mongoose.Schema({
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
  eventId:{
    type: mongoose.Schema.Types.ObjectId,
     ref:"Events"
  },
});

module.exports = mongoose.model("MarkEntry", MarkEntrySchema);