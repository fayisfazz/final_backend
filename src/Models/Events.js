const mongoose = require("mongoose");

const EventsSchema = mongoose.Schema({
  id: {
     type: mongoose.ObjectId,
     required: true,
    },
  eventName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Events", EventsSchema);