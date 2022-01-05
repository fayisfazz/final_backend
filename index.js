//importing the libraries
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");


// importing the environmental variables
require("dotenv/config");

// creating an instance of the express app
const app = express();

//importing custom routing file from routes folder
const DetailsRoutes = require("./src/Routes/Details");
const EventRoutes = require("./src/Routes/Events");
const SheduleRoutes = require("./src/Routes/Shedules");
const MarkEntryRoutes = require("./src/Routes/MarkEntry");
const UserRoutes = require("./src/Routes/User");

//Routes 
app.use("/details",DetailsRoutes);
app.use("/events",EventRoutes);
app.use("/shedules",SheduleRoutes);
app.use("/markentry",MarkEntryRoutes);
app.use("/users",UserRoutes);

//Connecting to the Database (altas mongoDB)
// mongoose.connect(process.env.DB_CONNECTION, () =>
//   console.info("DB CONNECTED SUCCESSFULLY")
// );

// Running server
// app.listen(process.env.PORT || 3000, function () {
//     console.info(
//       "Express server listening on port %d in %s mode",
//       this.address().port,
//       app.settings.env
//     );
//   });