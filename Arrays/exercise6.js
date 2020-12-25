let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

let oddLengths = array => {
  return array.map(item => item.length).filter(item => item % 2 !== 0);
}
console.log(oddLengths(arr)); // => [1, 5, 3]
