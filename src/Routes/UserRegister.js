// requiring the express methods to create custom routes
const express = require("express");
const router = express.Router();
const Registration = require("../Models/UserRegister")

//Get all Participants
router.get('/', async(req,res) => {
    try{
        const participants = await Registration.find()
        res.json(participants)
    }
    catch(err){
        res.send('Error' + err )
    }
    
})

//Get Participant By Id
router.get('/:id', async(req,res) => {
    {}
    try{
        const participant = await Registration.findById(req.params.id)
        res.json(participant)
    }
    catch(err){
        res.send('Error' + err )
    }
    
})

//Register for Program
router.post('/',
   async(req, res)=>{
    const participant = new Registration({ 
        candidateName:req.body.candidateName,
        year:req.body.year,
        department:req.body.department,
        admnNumber:req.body.admnNumber,
        gender:req.body.gender,
    })
    try{
        const r1 = await participant.save();
        res.json(r1);
    }catch(err){
        res.send('Error' + err )
    }
})

module.exports = router;
