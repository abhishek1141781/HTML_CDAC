
function calculate(num,r){
//closure function ----//
//a function who has access to its parent scope variable 
    function factorial(n){
          var f=1;
          for(var i=1;i<=n;i++){
            f=f*i;
          }
          return f;
    }
    console.log("combination:",factorial(num)/(factorial(num-r)*factorial(r)));
    console.log("permutation:",factorial(num)/factorial(num-r))
}

calculate(6,5);