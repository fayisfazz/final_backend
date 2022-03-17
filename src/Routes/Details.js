const express = require("express");
const router = express.Router();
const Details = require("../Models/Details");

//Get Details on DB
router.get("/", async (req, res) => {
  try {
    const details = await Details.find();
    res.json(details);
  } catch (err) {
    res.send("Error" + err);
  }
});

//Get Details by Id
router.get("/:id", async (req, res) => {
  try {
    const details = await Details.findOne();
    res.json(details);
  } catch (err) {
    res.send("Error" + err);
  }
});

//Set Details
router.post("/", async (req, res) => {
  const details = new Details({
    pgmName: req.body.pgmName,
    date: req.body.date,
    place: req.body.place,
    guest: req.body.guest,
    totalEvent: req.body.totalEvent,
    maxNoParticipation: req.body.maxNoParticipation,
    totalGroups: req.body.totalGroups,
    deptDetails: req.body.deptDetails,
  });
  try {
    const d1 = await details.save();
    res.json(d1);
  } catch (err) {
    res.send("Error" + err);
  }
});

//Details Update
router.patch("/:id", async (req, res) => {
  try {
    const details = await Details.findById(req.params.id);
    details.pgmName = req.body.pgmName;
    details.date = req.body.date;
    details.place = req.body.place;
    details.guest = req.body.guest;
    details.totalEvent = req.body.totalEvent;
    details.maxNoParticipation = req.body.maxNoParticipation;
    details.totalGroups = req.body.totalGroups;
    details.deptDetails = req.body.deptDetails;
    const d1 = await details.save();
    res.json(d1);
  } catch (err) {
    res.send("Error" + err);
  }
});

module.exports = router;
