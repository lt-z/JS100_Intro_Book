let multiply = (num1, num2) => num1 * num2;

let rlSync = require('readline-sync');
number1 = parseFloat(rlSync.question('Enter the first number: '))
number2 = parseFloat(rlSync.question('Enter the second number: '));

console.log(`${number1} * ${number2} = ${multiply(number1, number2)}`);
