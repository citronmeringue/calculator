const btnClear = document.getElementById('clear');
const btnBackspace = document.getElementById('del');
const btnEqual = document.getElementById('equal');
const btnDecimal = document.getElementById('decimal');
const displayContent = document.getElementById('display');
const boxBody = document.querySelector('#body-calc');
const btnNumbers = boxBody.querySelectorAll('.numbers');
const btnOperators = document.querySelectorAll('.operator');

displayContent.value = "0"
let first_op = null;
let operator = null;
let second_op = null;


btnBackspace.addEventListener('click', e => {
    if (displayContent.value.length > 1) {
        displayContent.value = displayContent.value.slice(0, -1);
    } else {
        displayContent.value = 0
    }
});

btnNumbers.forEach((button) => {
    button.addEventListener('click', e => {
        btnOperators.forEach(e => e.removeAttribute("disabled"))

        if (displayContent.value == 0 || (operator !== null && displayContent.value == first_op)) {
            displayContent.value = "";
        }
        displayContent.value += button.id;
        console.log(displayContent.value)
    });
});


btnOperators.forEach((button) => {
    button.addEventListener('click', e => {
        if (first_op === null && second_op === null) {
            first_op = Number(displayContent.value);
            operator = button.innerHTML;
            return
        }

        second_op = displayContent.value;
        output = operate(Number(first_op), Number(second_op), operator);
        operator = button.innerHTML;

        displayContent.value = output;
        first_op = output

        btnOperators.forEach(e => e.setAttribute("disabled", "disabled"));
    });
});

btnEqual.addEventListener('click', e => {
    if (first_op === null && second_op === null) {
        displayContent.value;
        return
    }
    first_op = Number(first_op);
    second_op = displayContent.value;
    second_op = Number(second_op);

    output = operate(first_op, second_op, operator);
    displayContent.value = output;
    btnEqual.setAttribute("disabled", "disabled");
    btnBackspace.setAttribute("disabled", "disabled");
});

btnDecimal.addEventListener('click', e => {
    if (!displayContent.value.includes('.')) {
        displayContent.value += btnDecimal.innerText;
    }
});

btnClear.addEventListener('click', e => {
    btnEqual.removeAttribute("disabled");
    btnBackspace.removeAttribute("disabled");
    displayContent.value = 0;
    reset()
});


const reset = () => {
    first_op = null;
    second_op = null;
    operator = null;
}


const add = (a, b) => a + b;

const substract = (a, b) => a - b;

const multiply = (a, b) => a * b;
const divide = (a, b) => {
    if (b == 0) throw displayContent.value = "Can't be divided by zero !";
    return a / b;
}

const operate = (a, b, operator) => {
    switch (operator) {
        case "+":
            return add(a, b);

        case "-":
            return substract(a, b);

        case "*":
            return multiply(a, b);

        case "/":
            return divide(a, b);
    }
}