const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
const connectDb = require('./config/db')
const testRoutes = require('./routes/testRoutes')
const authRoutes = require('./routes/authRoutes')
const morgan = require('morgan')

dotenv.config()
//MongoDb connection
connectDb()
app.use(express.json());

//middleware 
app.use(cors())
app.use(morgan('dev'))
//use of roues
app.use('/api/v1/test',testRoutes)
app.use('/api/v1/auth',authRoutes)

const port = 8000

app.get('/',(req,res)=>{
   res.json("Hello World")
})
app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})