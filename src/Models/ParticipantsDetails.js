const mongoose = require("mongoose");

const ParticipantDetails = mongoose.modelSchema({
  candidateName: {
    type: mongoose.Schema.Types.String,
    ref: "Events",
    required: true,
  },
  itemslist: [
    {
      type: String,
      required: true,
    },
  ],
});

module.exports = mongoose.model("ParticipantDetails", ParticipantDetails);
