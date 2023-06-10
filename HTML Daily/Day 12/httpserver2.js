const http=require("http")
const url=require("url")
const server=http.createServer(function(req,resp){
    //it will separate url and data into q object
    //q{pathname:"/home",query:{name:"kishori"}}
    var q=url.parse(req.url,true);
    resp.writeHeader(200,{"content-type":"text/html"})
    switch(q.pathname){
        case "/home":
            resp.write("<h1>on home page</h1>")
            resp.end("<h3>wel come to our site</h3>")
           break;
        case "/aboutus":
            resp.write("<h1>on aboutus page</h1>")
            resp.end("<h3>contact use at abc@gmail.com</h3>")
           break;
        default:
              resp.write("<h1>on some other page</h1>")
            resp.end("<h3>use home url</h3>")
            
    }

});
server.listen(3001,function(){
    console.log("server is running at port 3001")
})