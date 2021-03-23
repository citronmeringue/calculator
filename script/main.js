const btnBox = document.querySelector('#btn');
btnBox.setAttribute('style', 'border : solid; background: pink;');


function inputDigit(){
    document.querySelectorAll('button').forEach((button) => {
        button.classList.add('btnClass');
        button.addEventListener('click', e=> {
            toto = button.id;
             console.log("toto = " + toto);
        });
    });
};

function add(num1, num2){
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    let sum = num1 + num2;
    return sum;
}
num1 = inputDigit();
//num2 = inputDigit();
console.log(num1)
//add(num1, num2)
















//btnBox.appendChild(btnTest);


/*

function substract(min, max){
    min = parseInt(min);
    max = parseInt(max);
    let result = min - max;
    return result;
}
*/


//btn.setAttribute('style', 'background : blue;');
//btnBox.appendChild(btn);
/*
function test(){
    document.querySelectorAll('.testClass').forEach((button) => {
        button.addEventListener('mouseenter', e=> {
            button.setAttribute('style', 'background : pink;');
        });
    });

}


/*
function operate(){

}    


var min = prompt("donner min");
    var max = prompt("donner max");

    console.log(min);
    console.log(max);
    console.log(substract(min, max));
  */
//    console.log(add(min, max));
    