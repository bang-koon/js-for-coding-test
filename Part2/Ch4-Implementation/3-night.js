let [x, y] = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : `h8`
).split("");

const steps = [
  [-2, -1],
  [-2, 1],
  [1, 2],
  [-1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2],
];

const limit = 8;
// const column = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4,
//   e: 5,
//   f: 6,
//   g: 7,
//   h: 8,
// };

x = x.charCodeAt() - 96;
y = ~~y;
// console.log(x, y);

let count = 0;
for (let step of steps) {
  const checkX = step[0] + x;
  const checkY = step[1] + y;
  console.log(checkX, checkY);
  if (0 < checkX && checkX < 9 && 0 < checkY && checkY < 9) count++;
}
console.log(count);
