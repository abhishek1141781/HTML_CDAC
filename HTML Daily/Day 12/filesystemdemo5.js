const fs=require("fs");
//check whether file exists
fs.exists("sampledata.txt",function(exist){
    if(exist){
        //check the status of the file
        fs.stat("sampledata.txt",function(err,status){
            if(err){
                console.log(err);
            }
            else{
               fs.open("sampledata.txt","r",function(err,fd){
                if(err){console.log(err,"error in open");}
                else{
                    var buffer=Buffer.alloc(status.size)
                    fs.read(fd,buffer,0,20,null,function(err,bytesread,buffer){
                        console.log(buffer.toString())
                    })//end of read
                }
               })//end of open
            }

        }) //end of stat
    }
})//end os exists