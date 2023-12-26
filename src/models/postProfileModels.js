import mongoose from "mongoose";

const postProfileSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: [true, "Please provide your user id"],
        unique: true
    },
    userName: {
        type: String,
        required: [true, "Please provide your user name"],
    },
    role: {
        type: String,
        required: [true, "Please provide job role"],
    },
    address: {
        type: String,
        required: [true, "Please provide job location"],
    },
    education: {
        type: String,
    },
    experience: {
        type: String,
    },
    english: {
        type: String,
    },
    mobile:{
        type:Number,
        required:[true,"Please provide mobile number"],
    },
    salary:{
        type:Number,
        required:[true,"Please provide approx salary"],
    },
    jobType:{
        type:String,
        required: [true,"Please provide job type "]
    },
    gender:{
        type:String,
        required: [true,"Please provide job type "]
    }

},{timestamps: true})

const postProfile = mongoose.models.postProfile || mongoose.model("postProfile", postProfileSchema);

export default postProfile;