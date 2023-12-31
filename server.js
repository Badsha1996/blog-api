import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import userRouter from "./routes/user.route.js"
import authRouter from "./routes/auth.route.js"

const app = express()
dotenv.config()
mongoose.set('strictQuery', true)

const connectDb = async() =>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Database is connected")
    }catch(error){
        console.log(error)
        throw process.exit()
    }
}

app.use("/api/users", userRouter)
app.use("/api/auth", authRouter)

app.listen(3000 , () => {
    connectDb()
    console.log("The server is running")
})
