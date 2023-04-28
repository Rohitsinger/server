const mongoose = require('mongoose')
const validator = require('validator')
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name is required']
},
lastName:{
    type:String,
    
},

    email:{
        type:String,
        required:[true,'Email is required'],
        unique:true,
        validator: validator.isEmail
},
    password:{
        type:String,
        required:[true,'Password is required']
},
location:{
    type:String,
    default:"India"
},

},{timeStamps:true})



const User = mongoose.model("User",userSchema)

module.exports= User;