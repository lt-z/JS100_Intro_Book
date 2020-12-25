let myArray = [1, 3, 6, 11, 4, 2,
  4, 9, 17, 16, 0];

// let result = myArray.filter(item => item % 2 === 0);
// console.log(result)

for (let i in myArray) {
  if (myArray[i] % 2 === 0) {
    console.log(myArray[i]);
  }
}
