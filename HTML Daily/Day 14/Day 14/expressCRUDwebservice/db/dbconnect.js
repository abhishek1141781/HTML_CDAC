const mysql=require("mysql");
var mysqlConnection=mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"root123",
    database:"test",
    port:3306
})
mysqlConnection.connect((err)=>{
    if(!err){
        console.log("connection established successfully!!")
    }
    else{
        console.log("connection failed !"+JSON.stringify(err,undefined,2))
    }

})

module.exports=mysqlConnection;