//import all libraries
const express=require("express");
var router=express.Router();
const connection=require("../db/dbconnect")
//databse connection


//this function will display data in table format
router.get("/employee",function(req,resp){
    //connection.query("select * from employee",function(){})
   connection.query("select * from employee",(err,data,fields)=>{
    if(!err){
        console.log(data);
        //execute index.ejs   ./views/index.ejs
        //resp.render("index",{empdata:data});
        resp.send(data);
    }
    else{
        resp.status(500).send("error occured"+JSON.stringify(err,undefined,2))
    }

   })
})

//to display the empty form to accept new employee details
router.get("/addemp",(req,resp)=>{
    resp.render("add-emp")
})

//to add new record into databse
router.post("/saveemp",(req,resp)=>{
    console.log(req.body);
    connection.query("insert into employee values(?,?,?)",[req.body.empid,req.body.ename,req.body.sal],(err,data)=>{
        if(!err){
            if(data.affectedRows>0)
               resp.redirect("/employee")
        }
    })

})

//to edit employee data
///editemp/1000
router.get("/editemp/:eid",(req,resp)=>{
    connection.query("select * from employee where empid=?",[req.params.eid],(err,data,fields)=>{
        if(!err){
        resp.render("update-emp",{emp:data[0]})
    }
    else{
        resp.status(500).send("error occured"+JSON.stringify(err,undefined,2))
    }
    })

})

//update data in th etable
router.post("/updateemp",(req,resp)=>{
    connection.query("update employee set ename=?,sal=? where empid=?",[req.body.ename,req.body.sal,req.body.empid],(err,data)=>{
        resp.redirect("/employee")
    })
})

//delete the record
router.get("/deleteemp/:eid",(req,resp)=>{
     connection.query("delete from employee where empid=?",[req.params.eid],(err,data)=>{
         if(!err){
            console.log(data);
            resp.redirect("/employee")
         }
         else{
            resp.status(500).send("error occured"+JSON.stringify(err))
         }

     })
})





module.exports=router;