const [length, ...numbers] = `3
15
27
12`
  .trim()
  .split("\n");
const sortedNumbers = numbers.sort((a, b) => b - a);
console.log(sortedNumbers.join(" "));
