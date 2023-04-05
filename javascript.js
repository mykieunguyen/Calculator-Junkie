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
const firstNumber;
const secondNumber;
const operator; 

// operate function 
const operate = (a,b,operator) => {
    if (operator === 'add') {
        add(a,b);
    }
    else if (operator === 'subtract') {
        subtract(a,b);
    }
    else if (operator === 'multiply') {
        multiply(a,b);
    }
    else if (operator === 'divide') {
        divide(a,b);
    }
}