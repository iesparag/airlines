const express = require('express');;
const {connection} = require("./configs/db");
const  {SignupRouter}= require("./Routes/Auth_Route") 
const {LoginRouter} = require("./Routes/LoginRoute");
const { flightRouter } = require('./Routes/FlightRoute');
// const cors = require('cors');
require("dotenv").config();


const app = express();
app.use(express.json())
app.use("/api/register",SignupRouter);
app.use("/api/login",LoginRouter);
app.use("/api/",flightRouter);

app.get("/",(req,res)=> {
    res.send("Welcome to the Air Ticket system")
})



app.listen(process.env.PORT,async () => {
    try{

       await connection;
        console.log(`listening on http://localhost:${process.env.PORT}`)
    }catch(e){
        console.log("error aa gyi")
        console.log(e)
    }
})

