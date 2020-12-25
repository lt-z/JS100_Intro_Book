let array = [3, 5, 7];

let sumOfSquares = arr => {
  return arr.reduce((accumulator, element) => {
    return accumulator + (element * element)
  }, 0);
}

console.log(sumOfSquares(array)); // => 83
