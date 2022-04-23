const mongoose = require("mongoose");

const ParticipantsDetails = mongoose.Schema({
  candidateId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserRegister",
    
  },
  itemsList: {
    type: [mongoose.Schema.Types.String],
    ref: "Events",
    default: [],
  },
});

module.exports = mongoose.model("ParticipantsDetails", ParticipantsDetails);
