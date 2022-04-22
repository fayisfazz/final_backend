const mongoose = require("mongoose");

const DepartmentPoints = mongoose.Schema({
  BSC: {
    type: Number,
    required: true,
    default: 0,
  },
  BBA: {
    type: Number,
    required: true,
    default: 0,
  },
  BCOM: {
    type: Number,
    required: true,
    default: 0,
  },
  BBA: {
    type: Number,
    required: true,
    default: 0,
  },
  BA: {
    type: Number,
    required: true,
    default: 0,
  },
});

module.exports = mongoose.model("DepartmentPoints", DepartmentPoints);
