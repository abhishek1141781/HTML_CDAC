function f1(){
    console.log("in function f1")
}

exports.f2=function(){
    //calling f1 function
    f1();
    console.log("after call to f1 in f2")
}
exports.user={userid:'user1',password:'pass1'}