function factorial(n1){
    var f=1;
    for(var i=1;i<=n1;i++){
        f=f*i;
    }
    return f;
}
function calculateresult(){
    var n1=parseInt(document.getElementById("n1").value)
    var n2=parseInt(document.getElementById("n2").value)
    var arr=document.getElementsByName("operation");
    var op;
    //both these loops will assign the value of checked 
    //radion button to var op
    /*for(var i=0;i<arr.length;i++){
        if(arr[i].checked){
           op=arr[i].value;
           break;
        }
    }*/
    //array foreach loop in javascript
    for(var ob of arr){
       if(ob.checked){
        op=ob.value;
        break;
       }
    }
    //alert(op);
    // perform the operation based on value of op
    switch(op){
        case "add":
            var result="Addition : "+(n1+n2);
            break;
        case "subtract":
            result="Subtraction : "+(n1-n2);
            break;
        case "factorial":
            result="Factorial :"+factorial(n1);
            break;
    }
    //to display value of result in the textbox
    document.getElementById("result").value=result;
    //to clear the text boxes
    document.getElementById("n1").value="";
    document.getElementById("n2").value="";
    //focus will send the control in the text box
    document.getElementById("n1").focus()
}