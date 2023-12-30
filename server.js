import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import { exitCode } from "process"

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


app.listen(3000 , () => {
    connectDb()
    console.log("The server is running")
})
