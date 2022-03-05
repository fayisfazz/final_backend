//importing the libraries
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

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

const Registration = require("./src/Routes/UserRegister");
app.use("/registration", Registration);

app.use("/users", require("./src/Routes/Auth"));

app.listen(3001, () => {
  console.log("server started");
});
