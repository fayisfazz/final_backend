const express = require("express");
const router = express.Router()
const Shedule = require("../Models/Shedules")

//auth utility
const authService = require("../Services/Auth");

//Get all Shedules
router.get('/', authService.autheticateTheUser,async(req,res) => {
    try{
        const shedule = await Shedule.find()
        res.json(shedule)
    }
    catch(err){
        res.send('Error' + err )
    }
    
})

//Get Shedule By Id
router.get('/:id', authService.autheticateTheUser,async(req,res) => {
    try{
        const shedule = await Shedule.findById(req.params.id)
        res.json(shedule)
    }
    catch(err){
        res.send('Error' + err )
    }
    
})

// Delete Shedule By Id
router.delete('/:id', authService.autheticateTheUser,async(req,res) => {
    try{
        const shedule = await Shedule.findById(req.params.id)
        if(!shedule) return res.send("Not Found");
        await shedule.delete();
        res.send("Deleted")
    }
    catch(err){
        res.send('Error' + err )
    }
    
})

//Shedule an event
router.post('/', authService.autheticateTheUser,async(req, res)=>{
    const shedule = new Shedule({ 
        eventName:req.body.eventName,
        sheduleDate:req.body.sheduleDate,
        sheduleTime:req.body.sheduleTime,
        shedulePlace:req.body.shedulePlace,
    })
    try{
        const s1 = await shedule.save();
        res.json(s1);
    }catch(err){
        res.send('Error' + err )
    }
})

//Update a shedule
router.patch('/:id', authService.autheticateTheUser,async(req,res)=>{
    try{
        const shedule = await Shedule.findById(req.params.id)
        if(!shedule) return res.send("Not Found");
        shedule.sheduleDate = req.body.sheduleDate
        shedule.shedulePlace=req.body.shedulePlace
        shedule.shedulePlace=req.body.shedulePlace
        const s1 = await shedule.save()
        res.json(s1)
    }catch(err){
        res.send('Error' + err)
    }
})

module.exports = router;