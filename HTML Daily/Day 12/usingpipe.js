const fs=require("fs");

var rs=fs.createReadStream("sampledata.txt");
var ws=fs.createWriteStream("mysampledata.txt")
rs.pipe(ws);