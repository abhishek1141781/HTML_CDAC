const fs=require("fs");

fs.exists("sampledata.txt",function(exist){
    if(exist){
        fs.stat("sampledata.txt",function(err,status){
            if(err){
                console.log(err);
            }
            else{
            console.log(status);
            }

        }) //end of stat
    }
})//end os exists