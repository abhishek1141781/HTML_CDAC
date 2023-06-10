const fs=require("fs")

var ws=fs.createWriteStream("myfile.txt")
var data="this is testing of writestream";
var data1="Testing writestream with 2 lines";
//to write data into stream
ws.write(data);
ws.write(data1);
// it tells write stream that writing is done
ws.end();

ws.on("finish",function(){
    console.log("finish event occur")
})

ws.on("error", function(){
    console.log("error event occur") 
})