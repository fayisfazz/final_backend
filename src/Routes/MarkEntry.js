const express = require("express");
const router = express.Router();
const Results = require("../Models/MarkEntry");
const DepartmentPoints = require("../Models/DepartmentPoints");
//auth utility
const authService = require("../Services/Auth");



//Get all Results
router.get("/points", async (req, res) => {
  try {
    const results = await Results.find();

    let Department = {
      BSC: 0,
      BA: 0,
      BBA: 0,
      BCOM: 0,
      BVOC: 0,
    };

    results.forEach(result => {
      for (const key in Department)
      {
        if(key==result.firstDept){
          Department[key] += result.firstPoint
        }
        else if(key==result.secondDept){
          Department[key] += result.secondPoint
        }
        else if(key==result.thirdDept){
          Department[key] += result.thirdPoint
        }else{
          Department[key] += 0
        }
      }
    });
    console.log(Department)
    res.send({Department})
  } catch (err) {
    return res.send(err);
  }
});

//Get all Results
router.get("/", async (req, res) => {
  try {
    const results = await Results.find();
    res.send(results);
  } catch (err) {
    return res.send(err);
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
    eventName: req.body.eventName,
    first: req.body.first,
    second: req.body.second,
    third: req.body.third,
    firstDept: req.body.firstDept,
    secondDept: req.body.secondDept,
    thirdDept: req.body.thirdDept,
    firstPoint:req.body.firstPoint,
    secondPoint:req.body.secondPoint,
    thirdPoint:req.body.thirdPoint,
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
    (result.first = req.body.first),
      (result.second = req.body.second),
      (result.third = req.body.third),
      (result.firstDept = req.body.firstDept),
      (result.secondDept = req.body.secondDept),
      (result.thirdDept = req.body.thirdDept),
      (result.firstPoint = req.body.firstPoint)
      (result.secondPoint = req.body.secondPoint)
      (result.thirdPoint = req.body.thirdPoint)
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
