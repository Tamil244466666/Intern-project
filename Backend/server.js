import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { FormRouter } from "./Routes/FormRoute.js";
import cors from 'cors';

const app = express();
dotenv.config();
app.use(cors());
app.use('/form',FormRouter);
app.use(express.urlencoded({extended:true}));
app.use(express.json());




mongoose.connect(process.env.mongoDBURL).then(()=>
    {
    console.log("DB is online");
    app.listen(process.env.PORT || 8080,()=>
        {
        console.log("server is online");
        })
})
.catch((err)=>{
    console.log(err);
})





