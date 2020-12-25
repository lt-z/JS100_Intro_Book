let maxNum = array => array.reduce(function(a, b) {
  return Math.max(a, b);
});

let list1 = [1, 6, 3, 2];
let list2 = [-1, -6, -3, -2];
let list3 = [2, 2];

console.log(maxNum(list1));
console.log(maxNum(list2));
console.log(maxNum(list3));
