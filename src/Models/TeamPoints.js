const mongoose = require("mongoose");

const PointsSchema = mongoose.Schema({
  BSC: {
    type: Number,
    required: true,
  },
  BA: {
    type: Number,
    required: true,
  },
  BBA: {
    type: Number,
    required: true,
  },
  BCOM: {
    type: Number,
    required: true,
  },
  BVOC: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("TeamPoints", PointsSchema);
