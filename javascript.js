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

