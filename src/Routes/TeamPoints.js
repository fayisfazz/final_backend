const express = require("express");
const router = express.Router()
const TeamPoints = require("../Models/TeamPoints")

//auth utility
const authService = require("../Services/Auth");

//Get all Participants names with events list on DB
router.get('/', authService.autheticateTheUser, async(req,res) => {
    try{
        const teampoints = await TeamPoints.find()
        res.json(teampoints)
    }
    catch(err){
        res.send('Error' + err )
    }
    
})

//Get Partcipants names with events list By Id
router.get('/:id', authService.autheticateTheUser, async(req,res) => {
    try{
        const teampoints = await TeamPoints.findById(req.params.id)
        res.json(teampoints)
    }
    catch(err){
        res.send('Error' + err )
    }
    
})


module.exports = router;