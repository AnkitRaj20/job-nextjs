import mongoose from "mongoose";

const postJobSchema = new mongoose.Schema({
    employerId: {
        type: String,
        required: [true, "Please provide your employer id"],
    },
    role: {
        type: String,
        required: [true, "Please provide job role"],
    },
    location: {
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
    }

})

const PostJobs = mongoose.models.postJobs || mongoose.model("postJobs", postJobSchema);

export default PostJobs;