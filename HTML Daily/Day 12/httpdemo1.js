const http=require("http");
//req object is of type readStream and resp object is of type writeStream
const server=http.createServer(function(req,resp){
    console.log(req.url);
    resp.writeHeader(200,{"content-type":"text/html"})
    resp.write("<h1>Hello world!!</h1>");
    resp.end("<h2>Welcome to nodejs web application</h2>")

})
//start the server at 3001 and keep waiting for users request
server.listen(3001,function(){
    console.log("server is running on port 3001")
})

/*function precessfn(){

}
const server=http.createServer(precessfn)*/
