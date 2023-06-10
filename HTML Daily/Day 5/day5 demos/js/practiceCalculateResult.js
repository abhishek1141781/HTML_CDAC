function practiceCalculateResult(){
    var n1 = parseInt(document.getElementById("num1").value)
    var n2 = parseInt(document.getElementById("num2").value)
    var arr = document.getElementsByName("operation")
    var op

    // document.get
    // switch
    for (var ob of arr){
        if(ob.checked){
            op=ob.value;
            break;
        }
    }

//              perform operation based on value of op
    switch (op){
        case "add":
            var result = "Addition: "+(n1 + n2)
        break;
        case "sub":
            var result = "Subtraction: "+(n1 - n2)
        break;
        case "mult":
            var result = "Multiplication: "+(n1 * n2)
        break;
    }
//              display value of result in textbox
    document.getElementById("result").value = result;
    // alert(result)
    // to clear the textboxes
    document.getElementById("num1").value=""
    document.getElementById("num2").value=""
    // focus sends the control back to the num1 box
    document.getElementById("num1").focus()
}
// function validateData(){
//     ()
//     validate
// }