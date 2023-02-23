const  express = require('express');
const {userModel} = require("../modals/user.modal");
const  LoginRouter = express.Router();
const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");

LoginRouter.post("/", async (req,res)=> {
     const {email,password} = req.body;
     console.log(email,password)

     try{
        let user = await userModel.find({email:email});
        if(user.length>0){
            bcrypt.compare(password, user[0].password,(error,result)=> {
                if(result){
                    var token = jwt.sign({course:"mock_10"},"masai");
                    res.send({msg:"loginSuccessfull",token:token})
                }else{
                    res.send({msg:"wrong credential"})
                }
            })
        }else{
            res.send({msg:"loginFailure"})
        }
     }catch(err){
        res.send({msg:"user Not Exist"})
     }

})


module.exports = {
    LoginRouter
}