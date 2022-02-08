//importing the libraries
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const dbUrl = "mongodb+srv://eventive:PDEH5hhdu5jdLYr6@cluster0.gy5w1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(dbUrl, connectionParams)
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
app.use(express.json())

//Events List
const EventList = require("./src/Routes/Events")
app.use('/eventslist',EventList)

//Events Details
const Details = require("./src/Routes/Details")
app.use('/details',Details)

app.use("/users",require("./src/Routes/Auth"));

app.listen(3001, () => {
  console.log("server started");
})
