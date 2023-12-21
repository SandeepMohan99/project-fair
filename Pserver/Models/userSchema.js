// import mongoose 
const mongoose = require('mongoose');

//import validator
const validator = require('validator')

// create schema - use schema class in mongoose
const userSchema = new mongoose.Schema({
    username: {
        type:String,
        require:true,
        min:[`3','username must be 3 characters long , got {VALUE}`]

    },
    email: {
        type:String,
        require:true,
        Unique:true,
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error('invalid email')
            }
        }
    },
    password: {
        type:String,
        require:true, 
    },
    github: {
        type:String, 
    },
    linkedin: {
        type:String
    },
    profile: {
        type:String
    }
})


// create modal
const users = mongoose.model("users",userSchema)

// export the modal
module.exports = users