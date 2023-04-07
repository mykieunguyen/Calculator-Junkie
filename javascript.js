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
let delButton = document.getElementById('deleteButton');

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
        playSound();
        calculatorBottom.textContent = '';
        calculatorTop.textContent = '';
        firstOperand = [];
        secondOperand = [];
        operator = '';
        evalArray = ['', '', ''];
    }) 
}

// Function to Delete last Input 
const delInput = () => {
    delButton.addEventListener('click', () => {
        playSound();
        console.log(evalArray);

        for (let i = evalArray.length-1; i >= 0; i--) {
            if (evalArray[i] !== '') {
                evalArray[i] = '';
                break;
            }
        }
        firstOperand = evalArray[0].split('');
        operator = evalArray[1];
        secondOperand = evalArray[2].split('');

        changeTop(evalArray.join(' '));
        changeBottom('');
        // console.log(firstOperand);
        // console.log(operator);
        // console.log(secondOperand);
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
                changeBottom(firstOperand.join(''));
                changeTop(evalArray.join(' '));

            }
            // determine second operand
            else {
                secondOperand.push(value);
                evalArray[2] = secondOperand.join('');
                changeBottom(secondOperand.join(''));
                changeTop(evalArray.join(' '));
            }
       }
       
       // if an operator is clicked
       else if (event.target.className === 'btn dataOperator') {
            if (evalArray[1] === '') {
                operator = value;
                evalArray[1] = value;
                changeTop(evalArray.join(' '));
            }
            else {
                let answer = calcExpression();
                
                firstOperand= [];
                secondOperand = [];
                evalArray = [];
                evalArray[1] = value;
                evalArray[0] = answer.toString();
                evalArray[2] = '';
                operator = value;
                firstOperand.push(answer);

                changeBottom(answer);   
                changeTop(evalArray.join(' '));
            }
       }
   }


// Function to render value on screen
    // Change top Display
const changeTop = (calcTopValue) => {
        calculatorTop.textContent = calcTopValue;
   }

   // Change bottom Display 
const changeBottom = (value) => {
        calculatorBottom.textContent = value;
}

// Function to calculate expression 
const calcExpression = () => {
    playSound();
    let a = parseInt(firstOperand.join(''));
    let b = parseInt(secondOperand.join(''));
    let operatorOne = operator;

    let answer = operate(a, b, operatorOne);
    calculatorBottom.textContent = answer;
    return answer;
}



// Function to log calculator valriables
const eventHandler = event => {
    playSound();
    const value = event.target.attributes['data-value'].nodeValue;
    determineValue(event, value);
}

// Running Calculator
clearScreen();
delInput();
buttons.forEach(btn => btn.addEventListener('click', eventHandler));
equals.addEventListener('click', calcExpression)

// Function to play sound on button click 
function playSound() {
    let sound = new Audio('mixkit-on-or-off-light-switch-tap-2585.wav');
    sound.play();
}