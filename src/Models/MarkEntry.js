const mongoose = require("mongoose");

const MarkEntrySchema = mongoose.Schema({
  eventId:{
    type: mongoose.Schema.Types.ObjectId,
     ref:"Events"
  },
  first: {
    type:mongoose.Schema.Types.ObjectId,
    ref:"UserRegister"
  },
  second: {
    type :mongoose.Schema.Types.ObjectId,
     ref:"UserRegister"
  },
  third: {
    type :mongoose.Schema.Types.ObjectId,
     ref:"UserRegister"
  },
});

module.exports = mongoose.model("MarkEntry", MarkEntrySchema);