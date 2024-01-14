import mongoose from "mongoose";

const postJobSchema = new mongoose.Schema({
    employerId: {
        type: String,
        required: [true, "Please provide your employer id"],
    },
    employerName: {
        type: String,
        required: [true, "Please provide your employer name"],
    },
    role: {
        type: String,
        required: [true, "Please provide job role"],
        lowercase: true,
    },
    location: {
        type: String,
        required: [true, "Please provide job location"],
        lowercase: true,
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
    }

},{timestamps: true})

const PostJobs = mongoose.models.postJobs || mongoose.model("postJobs", postJobSchema);

export default PostJobs;