//import libraries
const express=require("express")
const router=express.Router();
const connection=require("../db/dbconnect")

router.get("/employees",(req,resp)=>{
    connection.query("select * from employee",(err,data,fields)=>{
        if(!err){
            resp.send(data);
        }

    })

})

router.get("/employees/:eid",(req,resp)=>{
    connection.query("select * from employee where empid=?",[req.params.eid],(err,data,fields)=>{
        if(!err){
            resp.send(data[0]);
        }

    })

})

router.post("/employees",(req,resp)=>{
    connection.query("insert into employee values(?,?,?)",[req.body.empid,req.body.ename,req.body.sal],(err,data)=>{
        resp.send("{mesg:data added successfully");

    })

})

router.put("/employees/:eid",(req,resp)=>{
    connection.query("update employee set ename=?,sal=? where empid=?",[req.body.ename,req.body.sal,req.body.empid],(err,data)=>{
        resp.send("{mesg:data updated successfully");

    })

})

router.delete("/employees",(req,resp)=>{
    connection.query("delete from employee where empid=?",[req.params.eid],(err,data)=>{
        resp.send("{mesg:data deleted successfully");

    })

})

module.exports=router;