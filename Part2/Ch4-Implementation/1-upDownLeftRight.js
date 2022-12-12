const [n, m] = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : `5
R R R U D D`
)
  .trim()
  .split("\n");

const directions = m.split(" ");
const index = {
  U: ([x, y]) => {
    if (x === 1) return [x, y];
    return [x - 1, y];
  },
  D: ([x, y]) => {
    if (x === n) return [x, y];
    return [x + 1, y];
  },
  L: ([x, y]) => {
    if (y === 1) return [x, y];
    return [x, y - 1];
  },
  R: ([x, y]) => {
    if (y === n) return [x, y];
    return [x, y + 1];
  },
};

let point = [1, 1];
for (let dir of directions) {
  console.log(index[dir](point));
  point = index[dir](point);
}
