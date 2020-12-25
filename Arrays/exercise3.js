let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

for (let array in myArray) {
  for (let item in myArray[array])
    if (myArray[array][item] % 2 === 0 ) {
      console.log(myArray[array][item])
    }
}