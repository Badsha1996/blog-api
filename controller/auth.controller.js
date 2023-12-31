import User from "../models/user.model.js"

export const register = async(req, res) =>{
    try{
        const newUser = new User({
            username : "Subrata",
            email : "subrata@gmail.com",
            password : "sub123",
            totalBlogs: 5,
            location: "kolkata",
        })

        await newUser.save()
        res.status(200).send("New user has been created")

    }catch(err){
        res.status(500).send("Somwthing is wrong")
    }
}

export const login = async(req, res) =>{
    // user ifp ---> databse check 

}

export const logout = async(req, res) =>{

}
