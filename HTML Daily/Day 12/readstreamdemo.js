const fs=require("fs")
//highWatermark --- will; help to modify the size of buffer used by readStream
// default value of buffer size is 65536
//rs=fs.createReadStream("test.txt","utf8",{ highWaterMark: 60000 });
var rs=fs.createReadStream("sampledata.txt");
var str="";
//stream is full of data it will generate data event,
//event handler function will concate data to str variable
rs.on("data",function(value){
    console.log("data event occur")
    str=str+value;
})
//when the file reaches to end then it will generate end event
//in the handler function define what to do when end event occurs
rs.on("end", function(value){
    console.log(str);
    console.log("end event occured")

})

//error event will occur if any error occurs
rs.on("error",function(err){
    console.log(err);
})

//to find the current buffer size
console.log("Buffer size in read stream:"+rs._readableState.highWaterMark);
