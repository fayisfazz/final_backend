const mongoose = require("mongoose");

const ParticipantsDetails = mongoose.Schema({
  candidateId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserRegister",
    required: true,
  },
  itemsList: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Events",
    default: [],
  },
});

module.exports = mongoose.model("ParticipantsDetails", ParticipantsDetails);
