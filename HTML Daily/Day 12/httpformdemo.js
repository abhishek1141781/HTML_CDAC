const http=require("http");
const url=require("url");
const fs=require("fs");

var server=http.createServer(function(req,resp){
    var q=url.parse(req.url,true);
    resp.writeHeader(200,{"content-type":"text/html"})
    switch(q.pathname){
        case "/home":
            var rs=fs.createReadStream("./public/addition.html");
            rs.pipe(resp);  //end event will be taken care by pipe
            break;
        default:
            resp.write("<h2>in some other page</h2>")
            resp.end();
        
    }

})
server.listen(3001,function(){
    console.log("server started at port 3001")
})