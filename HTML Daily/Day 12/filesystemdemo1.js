const fs=require("fs")
fs.writeFileSync("test.txt","hello word!!!\nwelcome to nodejs progamming")
var data=fs.readFileSync("test.txt")
console.log(data.toString())