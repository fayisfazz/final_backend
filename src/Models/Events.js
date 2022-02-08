const mongoose = require("mongoose");

const SheduleSchema = mongoose.Schema({
  sheduleDate: {
    type: String,
    // required: true,
  },
  sheduleTime: {
    type: String,
    // required: true,
  },
  shedulePlace: {
    type: String,
    // required: true,
  },
});

const MarkEntrySchema = mongoose.Schema({
  first: {
    type: String,
    // required: true,
  },
  second: {
    type: String,
  },
  third: {
    type: String,
  },
});

const EventsSchema = mongoose.Schema({
  eventId: {
     type: mongoose.ObjectId,
    //  required: true,
    },
    isSheduled:{
      type:Boolean,
      default: false,
    },
    isMarkEntered:{
      type:Boolean,
      default: false,
    },
    isResultPublished:{
      type:Boolean,
      default: false,
    },
  eventName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  shedule:[SheduleSchema],
  result:[MarkEntrySchema],
});

module.exports = mongoose.model("Events", EventsSchema);
