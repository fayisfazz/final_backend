const express = require("express");
const router = express.Router();
const Status = require("../Models/RegistrationStatus");

//Get Registration status on DB
router.get("/", async (req, res) => {
  try {
    const status = await Status.find();
    res.json(status);
  } catch (err) {
    res.send("Error" + err);
  }
});

//Get Registration Status By Id
router.get("/:id", async (req, res) => {
  try {
    const status = await Status.findById(req.params.id);
    res.json(status);
  } catch (err) {
    res.send("Error" + err);
  }
});

//Set Status
router.post("/", async (req, res) => {
  const status = new Status({
    isLock: req.body.isLock,
  });
  try {
    const st = await status.save();
    res.json(st);
  } catch (err) {
    res.send("Error" + err);
  }
});

//Status Update
router.patch("/:id", async (req, res) => {
  try {
    const status = await Status.findById(req.params.id);
    status.isLock = req.body.isLock;
    const st = await status.save();
    res.json(st);
  } catch (err) {
    res.send("Error" + err);
  }
});

module.exports = router;
