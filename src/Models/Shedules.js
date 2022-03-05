const mongoose = require("mongoose");

const SheduleSchema = mongoose.Schema({
  eventId:{
    type: mongoose.Schema.Types.ObjectId,
     ref:"Events"
  },
  sheduleDate: {
    type: String,
    required: true,
  },
  sheduleTime: {
    type: String,
    required: true,
  },
  shedulePlace: {
    type: String,
    required: true,
  },
  isMarkEntered:{
    type: Boolean,
    required: true,
  },
  isPublished:{
    type: Boolean,
    required: true,
  }
});

module.exports = mongoose.model("Shedules", SheduleSchema);