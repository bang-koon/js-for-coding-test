let n = 1260;
let count = 0;

const list = [500, 100, 50, 10];

for (let i of list) {
  count += Math.floor(n / i);
  n %= i;
}
