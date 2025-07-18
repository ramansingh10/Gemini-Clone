import mongoose, { mongo } from "mongoose";
import validator from 'validator'

const schema = mongoose.Schema({
    email:{
        type:String,
        validate:[validator.isEmail, 'Please provide a valid email'],
        unique:true
    },
    password:{
        type:String,
        minLength:[5,'Password must be of 5 characters']
    },
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    }
})

export const formDetails = mongoose.model('formDetails', schema)