let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

let allMatches = (array, regex) => {
  return array.filter(i => regex.test(i))
}

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']