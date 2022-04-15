const mongoose = require("mongoose");

const SheduleSchema = mongoose.Schema({
  eventName:{
    type: mongoose.Schema.Types.String,
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