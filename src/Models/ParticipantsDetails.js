const mongoose = require("mongoose");

const ParticipantsDetails = mongoose.Schema({
  candidateName: {
    type: String,
    required: true,
  },
  itemsList:
    [{ type: String }],
});

module.exports = mongoose.model("ParticipantsDetails", ParticipantsDetails);
