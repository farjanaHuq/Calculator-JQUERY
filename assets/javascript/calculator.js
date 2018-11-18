// declare variables for num1 and num2, for operator, and for the result


//onclick function for operators
//let the operators know that two numbers has been clicked
//onclick function for equal sign
// generate result after onclick function

var num1 = "";
var num2 = "";
var operator = "";
var result = "";

// convert operator 'word' into symbol

var optTxtToSymbol = function(){

    ///console.log(operator === "times");
    if(operator === "plus"){
        return " + " ; 
    }
    else if (operator === "minus"){
        return " - "; 
    }
    else if (operator === "times"){
        return "*";   
    }
    else if (operator === "divide"){
        return "/ "; 
    }
    else if (operator === "power"){
        return " ^ ";
    }
    else if (operator === "equal"){
        return " = ";
    }
    else{
        console.error("Something is wrong!");
    }
   
}

$(document).ready(function(){

//onclick function to get the numbers
$(".number").on("click", function(){
    if(!operator){
        num1 += $(this).val();
        //$("#first-number").text(num1);
        console.log(num1);
    }
    else if(!result){
        num2 += $(this).val();
        $("#second-number").text(num2);
        console.log(num2);
    }
});

$(".operator").on( "click " , function(){
      if(num1 && !num2){
          operator = $(this).val();
          $("#operator").text(optTxtToSymbol);
      }
});

$("#button-equal").on ("click" , function(){
      
    if(operator === "plus"){
        result = Number(num1) + Number(num2);
    }
    else if (operator === "minus"){
        result = Number(num1) - Number(num2);
    }
    else if (operator === "times"){
        result = Number(num1) * Number(num2);
    }
    else if (operator === "divide"){
        result = Number(num1) / Number(num2);
    }
    else if (operator === "power"){
        result = Math.pow(Number(num1), Number(num2));
    }
    else{
        console.error("Error!");
    }
    $("#result").text(result);
    console.log(result);
   
});

$("#button-clear").on("click" , function(){
    num1 = "";
    num2 = "";
    operator = "";
    result = "";

    $("#first-number").empty();
    $("#second-number").empty();
    $("#operator").empty();
    $("#result").empty();
})

});