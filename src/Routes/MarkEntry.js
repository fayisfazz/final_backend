const express = require("express");
const router = express.Router()
const Results = require("../Models/MarkEntry")
// const mongodb = require("mongodb")

//auth utility
const authService = require("../Services/Auth");

//Get all Results
router.get('/', authService.autheticateTheUser,async(req,res) => {
    try{
        const result = await Results.find()
        res.json(result)
    }
    catch(err){
        res.send('Error' + err )
    }
    
})

//Get Results By Id
router.get('/:id',  authService.autheticateTheUser, async(req,res) => {
    try{
        const result = await Results.findById(req.params.id)
        res.json(result)
    }
    catch(err){
        res.send('Error' + err )
    }
    
})

//Result Entry
router.post('/', authService.autheticateTheUser, async(req, res)=>{
    const result = new Results({ 
        first:req.body.first,
        second:req.body.second,
        third:req.body.third,
    })
    try{
        const r1 = await result.save();
        res.json(r1);
    }catch(err){
        res.send('Error' + err )
    }
})

//Update a result
router.patch('/:id', authService.autheticateTheUser, async(req,res)=>{
    try{
        const result = await Results.findById(req.params.id);
        if(!result) return res.send("Event Not Found");
        result.first = req.body.first;
        result.second =req.body.second;
        result.third=req.body.third;
        const r1 = await result.save()
        res.json(r1)
    }catch(err){
        res.send('Error' + err)
    }
})

//Delete Result 
router.delete('/:id', authService.autheticateTheUser,async(req,res) => {
    try{
        const result = await Results.findById(req.params.id)
        if(!result) return res.send("Event Not Found");
        await result.delete();
        res.send("Deleted");
    }
    catch(err){
        res.send('Error' + err )
    }
    
})

module.exports = router;