let isNotANumber = value => {
  return !isFinite(value);
}

console.log(isNotANumber(NaN));
console.log(isNotANumber(5));
