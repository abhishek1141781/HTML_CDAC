//import libraries
const express=require("express");
const app=express();
const routes=require("./routes/routers");
const mysql=require("mysql")
const bodyparser=require("body-parser");
const bodyParser = require("body-parser");

//define middleware
//app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//configure the appliaction

//define url handler
app.use("/",routes)

//start the server
app.listen(3001,()=>{
    console.log("server is running on port 3001")
})

module.exports=app;


