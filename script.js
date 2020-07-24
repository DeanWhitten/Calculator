const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

function operate(num1, operator, num2) {
    switch(operator){
        case "+":
            return(add(num1, num2));
            break;
        case "-":
            return(subtract(num1, num2));
            break;
        case "*":
            return(multiply(num1, num2));
            break;
        case "/":
            return(divide(num1, num2));
            break;
        default:
            return undefined;
    };
};

let numbers = document.getElementById("num1");
numbers.addEventListener("click", () => {
document.getElementById(display_container).innerHTML = 5;


});