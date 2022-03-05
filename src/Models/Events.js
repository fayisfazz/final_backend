const mongoose = require("mongoose");


const EventsSchema = mongoose.Schema({
  eventName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  isSheduled:{
    type: Boolean,
    required: true,
    default:false
  },
  isMarkEntered:{
    type: Boolean,
    required: true,
    default:false
  },
  isPublished:{
    type: Boolean,
    required: true,
    default:false
  }
});

module.exports = mongoose.model("Events", EventsSchema);
