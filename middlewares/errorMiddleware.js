//errror Middleware

const errorMiddleware = (err,req,res,next) => {
    console.log(err)
    res.status(500).send({
        message:"Something went wrong",
        err,
    })
}

module.exports = errorMiddleware