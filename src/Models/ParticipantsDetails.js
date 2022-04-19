const mongoose = require("mongoose");

const ParticipantsDetails = mongoose.Schema({
  candidateName: {
    // type: mongoose.Schema.Types.String,
    // ref: "UserRegister",
    type: String,
    required: true,
  },
  itemsList:
    // type: [mongoose.Schema.Types.String],
    // ref: "Events",
    // // default: [],
    // required:true,
    [{ type: String }],
});

module.exports = mongoose.model("ParticipantsDetails", ParticipantsDetails);
