const mongoose = require("mongoose");

const SheduleSchema = mongoose.Schema({
  eventId:{
        type: "String",
        required: true
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
});

module.exports = mongoose.model("Shedules", SheduleSchema);