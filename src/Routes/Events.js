const express = require("express");
const router = express.Router();
const Event = require("../Models/Events");

//auth utility
const authService = require("../Services/Auth");

//Get all Events
router.get("/", async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.send("Error" + err);
  }
});

//Get Event By Id
router.get("/:id", async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    res.json(event);
  } catch (err) {
    res.send("Error" + err);
  }
});

//Event Creation
router.post("/", async (req, res) => {
  //if event exists
  let event = await Event.findOne({ eventName: req.body.eventName });

  if (event)
    return res.status(400).json({ errors: [{ msg: "Event already exist" }] });

  const events = new Event({
    eventName: req.body.eventName,
    gender: req.body.gender,
  });

  try {
    const e1 = await events.save();
    res.json(e1);
  } catch (err) {
    res.send("Error" + err);
  }
});

//Event Updation
router.patch("/:id", async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.send("Event Not Found");
    event.eventName = req.body.eventName;
    event.gender = req.body.gender;
    const e1 = await event.save();
    res.json(e1);
  } catch (err) {
    res.send("Error" + err);
  }
});

//Delete Event By Id
router.delete("/:id", async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.send("Event Not Found");
    await event.delete();
    res.send({ event, message: "Deleted" });
  } catch (err) {
    res.send("Error" + err);
  }
});

module.exports = router;
