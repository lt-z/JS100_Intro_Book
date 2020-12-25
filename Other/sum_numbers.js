let rlSync = require('readline-sync');
let num1 = Number(rlSync.question('What is number 1?\n'));
let num2 = Number(rlSync.question('What is number 2?\n'));
let sum = num1 + num2;

console.log(`The sum of ${num1} and ${num2} is ${sum}`);
