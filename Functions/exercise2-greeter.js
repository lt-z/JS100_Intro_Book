let getNames = () => {
  let rlSync = require('readline-sync');
  let firstName = rlSync.question('What is your first name? ');
  let lastName = rlSync.question('What is your last name? ');
  return [firstName, lastName];
}

let greet = (first, last) => `Hello, ${first} ${last}!`;

let fullName = getNames()
console.log(greet(fullName[0], fullName[1]))
