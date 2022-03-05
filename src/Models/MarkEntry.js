const mongoose = require("mongoose");

const MarkEntrySchema = mongoose.Schema({
  first: {
    type: String,
    required: true,
    department:{
      type: mongoose.Object.Types.String,
      ref:"TeamPoints"
    }
  },
  second: {
    type: String,
    department:{
      type: mongoose.Object.Types.String,
      ref:"TeamPoints"
    }
  },
  third: {
    type: String,
    department:{
      type: mongoose.Object.Types.String,
      ref:"TeamPoints"
    }
  },
  eventId:{
    type: mongoose.Schema.Types.ObjectId,
     ref:"Events"
  },
});

module.exports = mongoose.model("MarkEntry", MarkEntrySchema);