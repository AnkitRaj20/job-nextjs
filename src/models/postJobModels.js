import mongoose from "mongoose";

const postJobSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide your  name"],
    },
    title: {
        type: String,
        required: [true, "Please provide job title"],
    },
    role: {
        type: String,
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
    languages: {
        type: String,
    },
    gender:{
        type:String,
    },
    mobile:{
        type:Number,
        required:[true,"Please provide mobile number"],
    },
    email:{
        type:String,
    },

})

const PostJobs = mongoose.models.postJobs || mongoose.model("postJobs", postJobSchema);

export default PostJobs;