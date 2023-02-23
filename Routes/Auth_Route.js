const  express = require('express');
const {userModel} = require("../modals/user.modal");
const SignupRouter = express.Router();
const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");


SignupRouter.post("/",async (req,res ) => {
    const {email,name,password} = req.body

    try{
     const emailFind = await userModel({email: email})  ;
     if(emailFind.length>0){
        res.send("user exist please login")
     }else{
        bcrypt.hash(password,2,async(error,secure_pass) => {
            if(error){
                res.send("some error occured while hashing password")
                console.log(error)
            }else{
                const user = new userModel({
                    name,
                    email,
                    password:secure_pass
                })
                await user.save();
                res.send("user Registered")
            }
        })
     }

    }catch(error){
        res.send("error in registering the user");
        console.log(error)
    }

})


module.exports = {
    SignupRouter
}