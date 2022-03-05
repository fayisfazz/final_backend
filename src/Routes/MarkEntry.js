const express = require("express");
const router = express.Router();
const Results = require("../Models/MarkEntry");
const Registration = require("../Models/UserRegister");

// const mongodb = require("mongodb")

//auth utility
const authService = require("../Services/Auth");

//Get all Results
router.get("/", async (req, res) => {
  try {
    const results = await Results.find();
   

    // const winners = result.map((result) => {});
    res.send(results);
    // res.send({ first: winner, second: secondPlace, third: thirdPlace });
  } catch (err) {
    res.send("Error" + err);
  }
});

//Get Results By Id
router.get("/:id", async (req, res) => {
  try {
    const result = await Results.findById(req.params.id);
    res.json(result);
  } catch (err) {
    res.send("Error" + err);
  }
});

//Result Entry
router.post("/", async (req, res) => {
  const result = new Results({
    first: req.body.first,
    second: req.body.second,
    third: req.body.third,
  });
  try {
    const r1 = await result.save();
    res.json(r1);
  } catch (err) {
    res.send("Error" + err);
  }
});

//Update a result
router.patch("/:id", async (req, res) => {
  try {
    const result = await Results.findById(req.params.id);
    if (!result) return res.send("Event Not Found");
    result.first = req.body.first;
    result.second = req.body.second;
    result.third = req.body.third;
    const r1 = await result.save();
    res.json(r1);
  } catch (err) {
    res.send("Error" + err);
  }
});

//Delete Result
router.delete("/:id", async (req, res) => {
  try {
    const result = await Results.findById(req.params.id);
    if (!result) return res.send("Event Not Found");
    await result.delete();
    res.send("Deleted");
  } catch (err) {
    res.send("Error" + err);
  }
});

module.exports = router;
