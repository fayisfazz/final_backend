//importing the libraries
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors")


// dotenv.config({ path: "./.env" });
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
mongoose
  .connect(process.env.dbUrl)
  .then(() => {
    console.info("Connected");
  })
  .catch((e) => {
    console.error("Error", e);
  });
// importing the environmental variables
// require("dotenv/config");

// creating an instance of the express app
const app = express();
app.use(express.json());
app.use(cors());

//Events List
const EventList = require("./src/Routes/Events");
app.use("/eventslist", EventList);

//Shedule List
const SheduleList = require("./src/Routes/Shedules");
app.use("/shedules", SheduleList);

//Results
const Results = require("./src/Routes/MarkEntry");
app.use("/results", Results);

//Events Details
const Details = require("./src/Routes/Details");
app.use("/details", Details);

//User Registration for Events
const Registration = require("./src/Routes/UserRegister");
app.use("/registration", Registration);

//User Authentication
app.use("/users", require("./src/Routes/Auth"));

//login
app.use("/login", require("./src/Routes/User"));


//Participants Details
const ParticipantDetails = require("./src/Routes/ParticipantsDetails");
app.use("/participantsdetails", ParticipantDetails);

app.listen(process.env.PORT || 3001, () => console.log("Server started"));
