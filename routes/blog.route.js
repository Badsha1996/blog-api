import express from "express"
const router = express.Router()

router.get("/test", (req, res)=>{
    res.send("This is blog")
})

export default router