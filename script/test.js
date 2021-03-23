//const btnNumbers = document.getElementsByClassName('numbers');
//const btnOperators = document.getElementsByClassName('operator');
const btnClear = document.getElementById('clear');
const btnEqual = document.getElementById('equal');
const btnDecimal = document.getElementById('decimal');
const displayContent = document.getElementById('display');

//const displayContent = document.querySelector('.display');
const boxBody = document.querySelector('#body-calc');
const btnNumbers = boxBody.querySelectorAll('.numbers');
const btnOperators = document.querySelectorAll('.operator');


displayContent.value = "0"
init_displayvalue = displayContent.value

var first_op = null;
var operator = null;
var second_op = null;

btnNumbers.forEach((button) => {
            button.addEventListener('click', e=> {
               if (displayContent.value == 0 || operator !==  null){
                    displayContent.value = ""
                }
                displayContent.value += button.id;
            });
});

   

btnDecimal.addEventListener('click', e=> {
    if (!displayContent.value.includes(',')){
        displayContent.value += btnDecimal.innerText;
    }
});

function clear(){
    btnClear.addEventListener('click', e=> {
        displayContent.value = 0;
        first_op = null;
        second_op = null;
        operator = null;
//        console.log(first_op + " / " + second_op)
    });
};

btnOperators.forEach((button) => {
    button.addEventListener('click', e=> {
        operator = button.innerHTML; 
        console.log(first_op)
        console.log(second_op)
        
        if(second_op === null){
            first_op = displayContent.value;
            second_op = 0;
            console.log("result = " + first_op)
            return
        }

            second_op = displayContent.value;
            first_op = operate(Number(first_op), Number(second_op), operator);
            console.log("result = " + first_op)
            displayContent.value = first_op; 

    });
});


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
    console.log(test)
    return test

});

clear();



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
            break;
        case "-":
            result = substract(a,b);
            break;
        case "*":
            result = multiply(a,b);
            break;
        case "/":
            result = divide(a,b);
            break;
    }
    return result;
}

    /*    first_op = displayContent.value;
        console.log("first operand = " + first_op)
        first_op_num = Number(first_op);
        operator = button.innerHTML; 
        displayContent.value = "0"; 
    
        console.log("sec operand = " + second_op)
        second_op = operate(first_op_num, second_op, operator)
        console.log("sec operand = " + second_op)
*/        //console.log(second_op)
        //displayContent.value = second_op; 