let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let newObj = Object.keys(obj).map(item => item.toUpperCase())
console.log(newObj);
console.log(obj);