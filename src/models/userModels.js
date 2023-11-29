import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Please provide your first name"],
    },
    middleName: {
        type: String,
    },
    lastName: {
        type: String,
        required: [true, "Please provide your last name"],
    },
    email: {
        type: String,
        required: [true, "Please provide a email"],
        unique: true,
    },
    mobile: {
        type: Number,
        required: [true, "Please provide a mobile number"],
        unique: true,
    },
    gender: {
        type: String,
        required: [true, "Please provide your gender"],
    },
    address: {
        type: String,
        required: [true, "Please provide your address"],
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
    },
    isVerfied: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    isUser: {
        type: Boolean,
        default: true,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
},{timestamps: true});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;