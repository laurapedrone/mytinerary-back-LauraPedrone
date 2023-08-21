import mongoose from "mongoose";

mongoose.connect("mongodb+srv://laupedrone:Admin1234@cluster0.ito3z78.mongodb.net/")
.then(()=>{
    console.log("Database connected")
})
.catch(()=>{
    console.log("Database conection failed")
})