const mongoose = require("mongoose");

const DetailsSchema = mongoose.Schema({
  pgmName: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  guest: {
    type: String,
    required: true,
  },
  totalEvent: {
    type: Number,
    required: true,
  },
  maxNoParticipation: {
    type: Number,
    required: true,
  },
  totalGroups: {
    type: Number,
    required: true,
  },
  deptDetails: [
    {
      deptname: String,
    },
  ],
});

module.exports = mongoose.model("Details", DetailsSchema);
