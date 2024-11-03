import express from "express";
import { FormModel } from "../Models/FormSchema.js";
import cors from "cors";
const router = express.Router();
router.use(express.json());
router.use(cors())



//View
router.get('/',async(req,res)=>{
    try{
        const all_formData = await FormModel.find();
        res.json({all_formData});
    }
    catch(err){
        res.json({status:err.message})
    }
})

//create
router.post('/',async(req,res)=>{
try{
    console.log(req.body.FormData)
    await FormModel.create(req.body.FormData)
   res.json({status:"successfully created"})
}
catch(err){
    res.json({status:err.message})
}
})

//update
router.put('/:id',async(req,res)=>{
    try{
        if(!req.body){
            res.status(500).json({status:"haven't filled"})
        }
        else{
            const {id} = req.params;
            const OneData = await FormModel.findOne({_id:id});

            const updatedData = {
                Name:req.body.FormData.Name ? req.body.FormData.Name : OneData.Name, 
                Email:req.body.FormData.Email ? req.body.FormData.Email : OneData.Email, 
                Phone_Number:req.body.FormData.Phone_Number ? req.body.FormData.Phone_Number : OneData.Phone_Number, 
                Course:req.body.FormData.Course ? req.body.FormData.Course : OneData.Course,
                Role:req.body.FormData.Role ? req.body.FormData.Role : OneData.Role,
                Status:req.body.FormData.Status ? req.body.FormData.Status : OneData.Status,
            }
            await FormModel.findByIdAndUpdate(id,updatedData);
            res.json({status:"Successfully updated"})
        }
    }catch(err){
        res.json({status:err.message})
    }
})


//delete
router.delete('/:id',async(req,res)=>{
    try{
        const {id} = req.params
        await FormModel.findByIdAndDelete(id);
        res.json({status:"successfully deleted"})
    }
    catch(err){
        res.json({status:err.message})
    }
})


export {router as FormRouter}