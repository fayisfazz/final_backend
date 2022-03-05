const express = require("express");
const router = express.Router()
const Eventslist = require("../Models/ParticipantsDetails")

//auth utility
const authService = require("../Services/Auth");

//Get all Participants names with events list on DB
router.get('/', authService.autheticateTheUser, async(req,res) => {
    try{
        const eventslist = await Eventslist.find()
        res.json(eventslist)
    }
    catch(err){
        res.send('Error' + err )
    }
    
})

//Get Partcipants names with events list By Id
router.get('/:id', authService.autheticateTheUser, async(req,res) => {
    try{
        const eventlist = await Eventslist.findById(req.params.id)
        res.json(eventlist)
    }
    catch(err){
        res.send('Error' + err )
    }
    
})

//Post a new item or items to eventslist
router.post('/', authService.autheticateTheUser, async(req, res)=>{
    const eventslist = new Eventslist([{ 
        itemslist:req.body.itemslist,
    }])
    try{
        const e1 = await eventslist.save();
        res.json(e1);
    }catch(err){
        res.send('Error' + err )
    }
})


//Delete events list  By Id
router.delete('/:id', authService.autheticateTheUser,async(req,res) => {
    try{
        const eventslist = await Eventslist.findById(req.params.id)
        if(!eventslist) return res.send("Event Not Found");
        await eventslist.delete();
        res.send({eventslist,message:"Deleted"});
    }
    catch(err){
        res.send('Error' + err )
    }
    
})

module.exports = router;