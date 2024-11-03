import mongoose  from "mongoose";

const FormSchema = mongoose.Schema({
    Name:{
        type:String
    },
    Email:{
        type:String
    },
    Phone_Number:{
        type:Number
    },
    Course:{
        type:String
    },
    Role:{
        type:String
    },
    Status:{
        type:String
    }
})

export const FormModel = mongoose.model("FormData",FormSchema);