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

//Get Details By Id
router.get("/:id", async (req, res) => {
  try {
    const details = await Details.findById(req.params.id);
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
    inuaguration:req.body.inuaguration,
    totalEvent: req.body.totalEvent,
    noOfDays : req.body.noOfDays,
    isRegistrationLock : req.body.isRegistrationLock,
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
    details.inuaguration = req.body.inuaguration;
    details.guest = req.body.guest;
    details.totalEvent = req.body.totalEvent;
    details.noOfDays = req.body.noOfDays;
    details.isRegistrationLock = req.body.isRegistrationLock;
    const d1 = await details.save();
    res.json(d1);
  } catch (err) {
    res.send("Error" + err);
  }
});

//Delete Details By Id
router.delete("/:id", async (req, res) => {
  try {
    const details = await Details.findById(req.params.id);
    if (!details) return res.send("Details Not Found");
    await details.delete();
    res.send({ details, message: "Deleted" });
  } catch (err) {
    res.send("Error" + err);
  }
});

module.exports = router;
