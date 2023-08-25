const errorHandler = (error,req,res,next)=>{
let status = error.status || 500;


console.log(error)
res.status(status)({
    success: false,
    status: status,
    error: error.messege
})
}

export default errorHandler