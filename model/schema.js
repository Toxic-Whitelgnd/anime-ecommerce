import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
    
    },
    mobileno:{
        type:Number,
        required:true,
        unique:true
    }
});

module.exports = mongoose.models.User || mongoose.model('User',userSchema)