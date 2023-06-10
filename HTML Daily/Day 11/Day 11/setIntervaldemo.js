function addition(a,b){
    a=a+10;
    b=b+20;
    return a+b
}

var factorial=(n)=>{
   f=1;
   for(var i=1;i<=n;i++){
     f=f*i;
   }
   console.log("factorial :" +f);
}

function stopinterval(x){
    console.log("in stop interval")
    clearInterval(x);
}

console.log("before settimeout")
var a=setInterval(factorial,100,5)
console.log("addition : ",addition(12,13));
setTimeout(stopinterval,550,a);
console.log("after settimeout")
