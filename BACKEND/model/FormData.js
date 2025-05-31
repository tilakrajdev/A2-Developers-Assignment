import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    Name:{
        type: String,
        required: true
    },
    Email:{
        type: String,
        required: true
    },
    Contact_Number:{
        type: Number,
        required: true
    },
    Institution_Name:{
        type: String,
        required: true
    },
    Requirements:{
        type: String,
        required: false
    },
})

export default mongoose.model('FormData', userSchema);