const http=require("http");
const url=require("url");
const fs=require("fs");

var server=http.createServer(function(req,resp){
    var q=url.parse(req.url,true);
    switch(q.pathname){
        case "/home":
            var rs=fs.createReadStream("./public/hello.html");
            rs.pipe(resp);  //end event will be taken care by pipe
            break;
        case "/aboutus":
            resp.write("<h3> on aboutus page")
            resp.end("<h3>contact us at abc@gmail.com");
            break;
         default:
            resp.write("<h3> on some other page page")
            resp.end("<h3>contact us at abc@gmail.com");
    }

})
server.listen(3001,function(){
    console.log("server started at port 3001")
})