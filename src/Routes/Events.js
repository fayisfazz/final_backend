const express = require("express");
const router = express.Router()
const Event = require("../Models/Events")

//Get all Events
router.get('/', async(req,res) => {
    try{
        const events = await Event.find()
        res.json(events)
    }
    catch(err){
        res.send('Error' + err )
    }
    
})

//Get Event By Id
router.get('/:id', async(req,res) => {
    try{
        const event = await Event.findById(req.params.id)
        res.json(event)
    }
    catch(err){
        res.send('Error' + err )
    }
    
})

//Event Creation
router.post('/', async(req, res)=>{
    const events = new Event({ 
        eventName:req.body.eventName,
        gender:req.body.gender,
    })
    try{
        const e1 = await events.save();
        res.json(e1);
    }catch(err){
        res.send('Error' + err )
    }
})

//Event Updation
router.patch('/:id',async(req,res)=>{
    try{
        const event = await Event.findById(req.params.id)
        event.eventName = req.body.eventName
        event.gender = req.body.gender
        const e1 = await event.save()
        res.json(e1)
    }catch(err){
        res.send('Error' + err)
    }
})

module.exports = router;