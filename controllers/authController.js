const mongoose = require('mongoose')
const User = require('../models/userModel');


const registerController = async(req,res)=>{
   try {
    const {name,email,password} = req.body;
    console.log(req.body);
    if(!name,!email,!password){
       return res.status(401).send({
            message:"Please fill all the credentials"
        })
    }

    const existingUser = await User.findOne({email})
    if(existingUser){
       return res.status(400).send({
            success:false,
            message:"User already exist"
        })
    } 

    const user = new User({name,email,password})
    user.save().then(()=>{
        return res.status(201).send({
            message:"user created Successfully",
            success:true,
            user,
        })
    })
  
    

   } catch (error) {
     console.log(error);
   return res.status(500).send({
   
        message:"Error in RegisterController",
        success:false,
        error
    })
   }
}

module.exports = registerController