// Calculator Functions 
// Add
const add = (a, b) =>  a + b;
// Subtract 
const subtract = (a, b) => a -b; 

// multiply 
const multiply = (a,b) => a * b;
//divide 
const divide = (a, b) => a / b;

// operate function 
const operate = (a,b,operator) => {
    if (operator === '+') {
        return add(a,b);
    }
    else if (operator === '-') {
        return subtract(a,b);
    }
    else if (operator === 'x') {
        return multiply(a,b);
    }
    else if (operator === '/') {
       return divide(a,b);
    }
}

// Selecting for elements in the DOM
let buttons = document.querySelectorAll('button[data-value]');
let clear = document.getElementById('clearButton');
let equals = document.getElementById('equalsButton');

let calculatorButtonContainer = document.querySelector('.calculatorContainer');
let calculatorDisplay = document.querySelector('calculatorScreen');
let calculatorTop = document.getElementById('topCalc');
let calculatorBottom = document.getElementById('bottomCalc');

// Variable Declarations
let firstOperand = [];
let secondOperand = [];
let operator = '';
let evalArray = ['', '', ''];

// Function to Clear Screen 
const clearScreen = () => {
    clear.addEventListener('click', () => {
        calculatorBottom.textContent = '';
        calculatorTop.textContent = '';
        firstOperand = [];
        secondOperand = [];
        operator = '';
        evalArray = ['', '', ''];
    }) 
}



// Function to obtain first operand, second operand, and calculator
const determineValue = (event, value) => {
    // if a number is clicked
       if (event.target.className === 'btn dataNumber') {
        
            // determine first operand 
            if (evalArray[1] === '') {
                firstOperand.push(value);
                evalArray[0] = firstOperand.join('');
            }
            // determine second operand
            else {
                secondOperand.push(value);
                evalArray[2] = secondOperand.join('');
            }
       }
       
       // if an operator is clicked
       else if (event.target.className === 'btn dataOperator') {
            operator = value;
            evalArray[1] = value;
       }
       // Render value onto calculator
       changeDisplay(evalArray.join(' '), firstOperand.join(''), secondOperand.join('')); 
   }


// Function to render value on screen
const changeDisplay = (calcTopValue, firstNumber, SecondNumber) => {
    if (evalArray[2] === '') {
        calculatorTop.textContent = calcTopValue;
        calculatorBottom.textContent = firstNumber;
    }
    else {
        calculatorTop.textContent = calcTopValue;
        calculatorBottom.textContent = SecondNumber;
    }

}

// Function to calculate expression 
const calcExpression = () => {
    let a = parseInt(firstOperand.join(''));
    let b = parseInt(secondOperand.join(''));
    let operatorOne = operator;

    let answer = operate(a, b, operatorOne);
    calculatorBottom.textContent = answer;
}

// Function to log calculator valriables
const eventHandler = event => {
    const value = event.target.attributes['data-value'].nodeValue;
    determineValue(event, value);
}

// Running Calculator
clearScreen();
buttons.forEach(btn => btn.addEventListener('click', eventHandler));
equals.addEventListener('click', calcExpression)

