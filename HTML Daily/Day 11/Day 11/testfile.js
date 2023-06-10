function f1(){
    console.log("in function f1")
}
function f3(){
    console.log("in function f3")
}
function f4(){
    console.log("in function f4")
}
function f2(){
    console.log("in function f2")
}

//delays the call to callback function by 2000 ms
setTimeout(f1,2000);
setTimeout(f2,1000);
setTimeout(f1,3000);
f3()
f4()