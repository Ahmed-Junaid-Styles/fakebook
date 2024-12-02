import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
    firstname: {
        type: String,
        required: [true, "First Name is required."],
        trim: true,
        minLength: [2, "First Name must be atleast 3 characters"],
        maxLength: [50, "First Name must be lesser than 50 characters"],
    },
    surname: {
        type: String,
        required: [true, "Last Name is required."],
        trim: true,
        minLength: [2, "Last Name must be atleast 3 characters"],
        maxLength: [50, "Last Name must be lesser than 50 characters"],
    },
    email_phone: {
        type: String,
        required: [true, "Email or Phone number is required."],

    },
    password: {
        type: String,
        required: [true, "Password is required."],
        minlength: [8, "Password must be at least 8 characters long"] // Example constraint
    },
    birth_day: {
        type: String,
        
    },
    gender: {
        type: String,
        
    },

    date: {
        type: Date,
        default: Date.now,
    },
})


const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema)
export default Contact
