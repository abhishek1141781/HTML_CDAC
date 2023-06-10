function addition(){
    var n1=parseInt(document.getElementById("n1").value);
    var n2=parseInt(document.getElementById("n2").value);
    //alert("addition : "+(n1+n2))
    //it will refresh the page and then it will show the result
    //document.write("addition :"+(n1+n2));
    //display it in the tetxbox
    document.getElementById("result").value=(n1+n2);
    document.getElementById("mydiv").innerHTML="Addition :"+(n1+n2)
}