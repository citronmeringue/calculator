//const btnNumbers = document.getElementsByClassName('numbers');
//const btnOperators = document.getElementsByClassName('operator');

const btnClear = document.getElementById('clear');
const btnEqual = document.getElementById('equal');
const btnDecimal = document.getElementById('decimal');
const displayContent = document.getElementById('display');


const boxBody = document.querySelector('#body-calc');
//const displayContent = document.querySelector('.display');
const btnNumbers = boxBody.querySelectorAll('.numbers');
const btnOperators = document.querySelectorAll('.operator');


function inputNumbers(){
btnNumbers.forEach((button) => {
        button.addEventListener('click', e=> {
            if (displayContent.value == 0){
                displayContent.value = ""
            }
            displayContent.value += button.id;
        });
});
};
inputNumbers();
btnDecimal.addEventListener('click', e=> {
    if (!displayContent.value.includes(',')){
        displayContent.value += btnDecimal.innerText;
    }
});

function clear(){
    btnClear.addEventListener('click', e=> {
        displayContent.value = 0;
    });
};
clear()

var first_op;
var operator;
var second_op;

function operator(){
btnOperators.forEach((button) => {
    button.addEventListener('click', e=> {
        first_op = displayContent.value;
        operator = button.innerHTML;
        //reinitialise
        displayContent.value = 0; 
        //console.log("first operand = " + first_op)
        //console.log("operator = " +operator)

    });
});
};

operator();

btnEqual.addEventListener('click', e=> {
    console.log("first operand = " + first_op)
    first_op = Number(first_op);
    console.log("operator = " + operator)
    second_op = displayContent.value;
    console.log("second operand = " + second_op)
    second_op = Number(second_op);

    console.log("------------------------")

   var test = operate(first_op, second_op, operator);

    displayContent.value = test;

    console.log("test ")
    console.log(test)
   /* console.log("test2 ")
    console.log(first_op + second_op)
    console.log("ref " + parseFloat(3)+parseFloat(3))
    console.log(parseFloat(3)+parseFloat(3))
    */
});
/*
if (btnOperators.id == "add"){
    console.log("add is selected")
}*/





//---------------------------------------------------------

function add(a,b){
    return a + b;
}

function substract(a,b){
    return a - b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}


function operate(a,b, operator){
    switch(operator){
        case "+":
            result = add(a,b);
           // console.log(result);
            break;
        case "-":
            result = substract(a,b);
           // console.log(result)
            break;
        case "*":
            result = multiply(a,b);
           // console.log(result)
            break;
        case "/":
            result = divide(a,b);
           // console.log(result)
            break;
    }
//    console.log("fin switch")
    return result;
}

