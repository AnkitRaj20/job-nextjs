import mongoose, {Schema} from 'mongoose'

const contactSchema = new Schema({
    fullName:{
        type: String,
        required: [true, 'Please provide your full name']
    },
    email:{
        type: String,
        required: [true, 'Please provide your email']
    },
    message:{
        type: String,
        required: [true, 'Please provide your message']
    }
},{timestamp: true})

 const Contact = mongoose.models.contact || mongoose.model('contact', contactSchema)

 export default Contact