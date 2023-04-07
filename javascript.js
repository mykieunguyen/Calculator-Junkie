// Calculator Functions 
// Add
const add = (a, b) =>  a + b;
// Subtract 
const subtract = (a, b) => a -b; 

// multiply 
const multiply = (a,b) => a * b;
//divide 
const divide = (a, b) => a / b;

// Calculator operation variable declartion 
let firstNumber;
let secondNumber;
let operator; 

// operate function 
const operate = (a,b,operator) => {
    if (operator === 'add') {
        return add(a,b);
    }
    else if (operator === 'subtract') {
        return subtract(a,b);
    }
    else if (operator === 'multiply') {
        return multiply(a,b);
    }
    else if (operator === 'divide') {
       return divide(a,b);
    }
}

// Selecting for elements in the DOM
let buttons = document.querySelectorAll('button[data-value]');
let clear = document.getElementById('clearButton');

let calculatorButtonContainer = document.querySelector('.calculatorContainer');
let calculatorDisplay = document.querySelector('calculatorScreen');
let calculatorTop = document.getElementById('topCalc');
let calculatorBottom = document.getElementById('bottomCalc');

// Function to Clear Screen 
const clearScreen = () => {
    clear.addEventListener('click', () => {
        calculatorBottom.textContent = '';
        calculatorTop.textContent = '';
    }) 
}

// Variable Declarations
let numberArray = [];
let evalArray = ['', '', ''];

// Function to Function to change calculator screen display 
const determineValue = (event, value) => {
    // if a number is clicked
       if (event.target.className === 'btn dataNumber') {
            numberArray.push(value);
        
            // determine first operand 
            if (evalArray[1] === '') {
                evalArray[0] = numberArray.join('');
            }
            // determine second operand
            else {
                evalArray[2] = numberArray.join('');
            }
       }
       
       // if an operator is clicked
       else if (event.target.className === 'btn dataOperator') {
            evalArray[1] = value;
            numberArray = [];
       }

       // Render value onto calculator
       changeDisplay(evalArray.join(' '), numberArray.join('')); 
   }


// Function to render value on screen
const changeDisplay = (calcTopValue, calcBotValue) => {
    calculatorTop.textContent = calcTopValue;
    calculatorBottom.textContent = calcBotValue;
}


// Function to log calculator valriables
const eventHandler = event => {
    const value = event.target.attributes['data-value'].nodeValue;
    determineValue(event, value);
}

// Running Calculator
clearScreen();
buttons.forEach(btn => btn.addEventListener('click', eventHandler));


