//Controlled variables
let display = '';
let operatorSign = '';
let results = '';
let numberControl = 0;
let decimalControl = 0;
let operatorControl = 0;

let num1 = 0;
let num2 = '';

//Display box
const displayText = document.getElementById("display_container");
//Number Buttons
document.getElementById("num1").addEventListener('click', () => {numPressed('1')});
document.getElementById("num2").addEventListener('click', () => {numPressed('2')});
document.getElementById("num3").addEventListener('click', () => {numPressed('3')});
document.getElementById("num4").addEventListener('click', () => {numPressed('4')});
document.getElementById("num5").addEventListener('click', () => {numPressed('5')});
document.getElementById("num6").addEventListener('click', () => {numPressed('6')});
document.getElementById("num7").addEventListener('click', () => {numPressed('7')});
document.getElementById("num8").addEventListener('click', () => {numPressed('8')});
document.getElementById("num9").addEventListener('click', () => {numPressed('9')});
document.getElementById("num0").addEventListener('click', () => {numPressed('0')});
document.getElementById("decimal").addEventListener('click', () => {
    if (decimalControl == 0){
        numPressed('.');
      }
});
//Operator Buttons
document.getElementById("add_btn").addEventListener('click', () => {operatorPressed('+')});
document.getElementById("sub_btn").addEventListener('click', () => {operatorPressed('-')});
document.getElementById("mult_btn").addEventListener('click', () => {operatorPressed('*')});
document.getElementById("div_btn").addEventListener('click', () => {operatorPressed('/')});
//Equal sign Buttons
document.getElementById("enter_btn").addEventListener('click', () => {equalPressed()});
//Clear Button
document.getElementById("clear_btn").addEventListener('click', () => {clearDisplay()});

//Numbers evaluation to pass to display 
function numPressed(element) {
    if (element == '.'){
      decimalControl = 1;
    }
    if (numberControl == 0){
      display += element;
      setDis(display);
    }
    if (numberControl == 1){
      display = '';
      display += element;
      setDis(display);
      numberControl = 0;
    }
  }

//evaluates & passes number values and operator sign into variables.
function operatorPressed(sign){
    decimalControl = 0;
    if(operatorControl == 1){
        equalPressed();
    }
    operatorSign = sign;
    numberControl = 1;
    operatorControl = 1;
    num1 = display;
}

// passes values to be operated after enter is clicked
function equalPressed(){
    decimalControl = 0;
    num2 = display;
    operate(num1, operatorSign, num2);
    display = results;
    setDis(display);
}

//Operator functions
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

//Calculates input
function operate(num1, operator, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch(operator){
        case "+":
            results = add(num1, num2);
            return results;
            break;
        case "-":
            results = subtract(num1, num2);
            return results;
            break;
        case "*":
            results = multiply(num1, num2);
            return results;
            break;
        case "/":
            if(num2 == 0){
                results = "NO!"
            }else{
                results = divide(num1, num2);  
            }
            return results;
            break;
        default:
            return undefined;
    };

    
};

//Sets the display
function setDis() {
    displayText.innerHTML = display;
}


//Clears the display
function clearDisplay() {
   location.reload();

}





