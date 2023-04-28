const mongoose = require('mongoose')

const connectDb = async()=>{
    try {
      const con = await mongoose.connect(process.env.MONGO_URI)
            console.log(`conneced to ${mongoose.connection.host}`);
    
    } catch (error) {
        console.log(`Mongo Err ${error}`);
    }
}

module.exports = connectDb