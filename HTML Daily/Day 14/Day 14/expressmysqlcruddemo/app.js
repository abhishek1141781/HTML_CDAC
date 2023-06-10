//import libraries
const express=require("express");
const app=express();
const bodyparser=require("body-parser")
const path=require("path")
const mysql=require("mysql")
const routes=require("./routes/routers")

//define middleware
app.use(bodyparser.urlencoded({extended:false}));

//configure the application
//this setting will add .ejs extension to all view files 
//and it will search those files in view folder

app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs")  

//find all css and js(client side javascript) files in public folder
//public/css contains .css files
//public/js contains all .js files
app.use("/css",express.static(path.resolve(__dirname,"public/css")))
//app.use("/js",express.static(path.resolve(__dirname,"public/js")))
//app.use("/image",express.static(path.resolve(__dirname,"public/image")))

//define route handlers
app.use("/",routes);

//start the server
app.listen(3001,function(){
    console.log("server is running at port 3001");
});

module.exports=app;


