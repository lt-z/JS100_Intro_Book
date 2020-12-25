let evenOrOdd = (number) => {
  if (Number.isInteger(number)) {
    if (number % 2 === 0) {
      return 'even';
    } else {
      return 'odd';
    }
  } else {
    return 'not an integer'
  }
}

console.log(evenOrOdd(5));
console.log(evenOrOdd(26));
console.log(evenOrOdd(2.26));
