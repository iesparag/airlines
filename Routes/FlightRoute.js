const express = require('express');
const {FlightModel} = require("../modals/Flight.modal");
const flightRouter = express.Router();



flightRouter.get("/flights",async (req,res)=> {
    try{
        const flightData = await FlightModel.find({});
        res.status(200).send(flightData)
    }catch(err){
        res.send({msg:err.message})
    }
})


flightRouter.get("/flights/:id",async (req,res)=> {

    const _id = res.params.id
    try{
        const flightData = await FlightModel.findOne({_id});
        if(flightData){

            res.status(200).send(flightData)
        }else{
            res.send({msg:"No Flight available"})
        }
    }catch(err){
        res.send({msg:err.message})
    }
})


flightRouter.post("/flights",async (req,res)=> {

    const data = req.body
    try{
        const flightData = await FlightModel.create(data)
        res.status(201).send(flightData)
       
    }catch(err){
        res.send({msg:err.message})
    }
})


flightRouter.patch("/flights/:id",async (req,res)=> {
    const _id = res.params.id
    const data = req.body
    try{
        const flightData = await FlightModel.findByIdAndupdate({_id},data)
        res.status(204).send({msg:"data updated successfully"})
       
    }catch(err){
        res.send({msg:err.message})
    }
})


flightRouter.delete("/flights/:id",async (req,res)=> {
    const _id = res.params.id
    try{
        const flightData = await FlightModel.findByIdAndDelete({_id})
        res.status(202).send({msg:"data deleted successfully",deletedData:flightData})
       
    }catch(err){
        res.send({msg:err.message})
    }
})



module.exports = {
    flightRouter
}



