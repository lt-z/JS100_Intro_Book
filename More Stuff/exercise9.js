let zero = val => 1 / val === -Infinity;

console.log(zero(-0));  // true
console.log(zero(0));  // false
console.log(zero(-5)); // false
