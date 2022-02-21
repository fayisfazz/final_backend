const mongoose = require("mongoose");

const SheduleSchema = mongoose.Schema({
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
  eventId:{
    type: mongoose.Schema.Types.ObjectId,
     ref:"Events"
  }
});

module.exports = mongoose.model("Shedules", SheduleSchema);