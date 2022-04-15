const mongoose = require("mongoose");

const ParticipantsDetails = mongoose.Schema({
  candidateName: {
    type: mongoose.Schema.Types.String,
    ref: "UserRegister",
    required: true,
  },
  itemsList: {
    type: [mongoose.Schema.Types.String],
    ref: "Events",
    // default: [],
    required:true,
  },
});

module.exports = mongoose.model("ParticipantsDetails", ParticipantsDetails);
