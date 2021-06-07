import { response } from "express";
import workerSchema from "../model/worker.js";

export const registerWorker = async(req, res) => {
    const {first_name,role} = req.body;
    if(!first_name || !role){
        res.status(400).json({msg: "All fields required"})
    }
    try {
        const worker = await workerSchema.create(req.body);
        res.json({msg: "user Registered"})
    } catch (error) {
        res.status(400).send(error);
    }
}

export const getWorkers = async(req,res)=>{
    try {
        const workers = await workerSchema.find({});
        let prayer = workers.filter(value=>{
            return value.role==="Prayer";
        });
    
        let praiseWorship = workers.filter(value=>{
            return value.role==="Praise and Worship";
        });
    
        let offer = workers.filter(value=>{
            return value.role==="Offering and Tithe";
        });
    
        let preach = workers.filter(value=>{
            return value.role==="Sermons and Benediction";
        });
        let nWorkers = [prayer[Math.floor(Math.random()*prayer.length)],praiseWorship[Math.floor(Math.random()*prayer.length)],offer[Math.floor(Math.random()*prayer.length)],preach[Math.floor(Math.random()*prayer.length)]]
        res.json(nWorkers);
    } catch (error) {
        res.status(400).send(error);
    }
}