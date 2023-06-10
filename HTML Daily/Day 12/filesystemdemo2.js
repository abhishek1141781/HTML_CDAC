const fs=require("fs");
console.log("before readfile testdata")
fs.readFile("test.txt",function(err,data){
      if(err){
        console.log(err);
        console.log("error occured")
      }else{
        console.log(data.toString())
      }
})
console.log("afte readfile testdata")
console.log("before readfile sampledata")
fs.readFile("sampledata.txt",function(err,data){
  if(err){
    console.log(err);
    console.log("error occured in sampledata")
  }  
  else{
    console.log(data.toString())
  }
})
console.log("after readfile sampledata")
