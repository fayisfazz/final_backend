const express = require("express");
const router = express.Router();
const UserEventsList = require("../Models/ParticipantsDetails");

//Get all Participants names with events list on DB
router.get("/", async (req, res) => {
  try {
    const eventslist = await UserEventsList.find();
    res.json(eventslist);
  } catch (err) {
    res.send("Error" + err);
  }
});

//Get Partcipants names with events list By Id
router.get("/:id", async (req, res) => {
  try {
    const eventlist = await UserEventsList.findById(req.params.id);
    res.json(eventlist);
  } catch (err) {
    res.send("Error" + err);
  }
});

//Post a new item or items to eventslist
router.post("/", async (req, res) => {
  const eventslist = new UserEventsList({
    candidateName: req.body.candidateName,
    itemsList: req.body.itemsList,
  });
  try {
    const e1 = await eventslist.save();
    res.json(e1);
  } catch (err) {
    res.send("Error" + err);
  }
});

//Delete events list  By Id
router.delete("/:id", async (req, res) => {
  try {
    const eventslist = await UserEventslist.findById(req.params.id);
    if (!eventslist) return res.send("Event Not Found");
    await eventslist.delete();
    res.send({ eventslist, message: "Deleted" });
  } catch (err) {
    res.send("Error" + err);
  }
});

//Get Event  names with Participants list  By using event Id
router.get("/:id", async (req, res) => {
  try {
    const eventName = await UserEventsList.findById(req.params.id);
    res.json(eventlist);
  } catch (err) {
    res.send("Error" + err);
  }
});


module.exports = router;
