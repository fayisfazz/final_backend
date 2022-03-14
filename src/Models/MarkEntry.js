const mongoose = require("mongoose");

const MarkEntrySchema = mongoose.Schema({
  eventName: {
    type: mongoose.Schema.Types.String,
    ref: "Events",
  },
  first: {
    name:{type:String},
    department:{
      type:mongoose.Schema.Types.String,
      ref:"UserRegister"
    }
  },
  second: {
    name:{type:String},
    department:{
      type:mongoose.Schema.Types.String,
      ref:"UserRegister"
    }
  },
  third: {
    name:{type:String},
    department:{
      type:mongoose.Schema.Types.String,
      ref:"UserRegister"
    }
  }
});

module.exports = mongoose.model("MarkEntry", MarkEntrySchema);
