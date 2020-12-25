let strings = ['a', 'b', 'c', 'd']

let test = (array) => {
  array.reduce((accumulator, element) => {
    return accumulator + element.toUpperCase()
  }, '');
}


  console.log(test)