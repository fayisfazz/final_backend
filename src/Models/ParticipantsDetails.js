const mongoose = require("mongoose");

const ParticipantsDetails = mongoose.Schema({
  candidateId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserRegister",
    required: true,
  },
  itemsId: [
    {
      eventId:mongoose.Schema.Types.ObjectId,
    // type: mongoose.Schema.Types.ObjectId,
    // ref: "Events",
    // required: true,
    }
  ],
});

module.exports = mongoose.model("ParticipantsDetails", ParticipantsDetails);
