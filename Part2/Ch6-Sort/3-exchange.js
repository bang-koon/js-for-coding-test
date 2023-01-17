// n = arr.length, k = count
const [nk, a, b] = `5 3
1 2 5 4 3
5 5 6 6 5
`
  .trim()
  .split("\n");

let [n, k] = nk.split(" ");
let arrA = a.split(" ").map((a) => ~~a);
let arrB = b.split(" ").map((a) => ~~a);

arrA = arrA.sort((a, b) => a - b);
arrB = arrB.sort((a, b) => a - b);

for (let i = 0; i < k; i++) {
  const aNum = arrA[i];
  const bNum = arrB[i];
  if (aNum < bNum) {
    arrA[i] = bNum;
    arrB[i] = aNum;
  }
}

// while (arrB[n - 1] >= arrA[0] && k >= 1) {
//   arrA.push(arrB.pop());
//   arrB.push(arrA.shift());
//   arrA = arrA.sort((a, b) => a - b);
//   arrB = arrB.sort((a, b) => a - b);
//   console.log(k);
//   k--;
// }

console.log(arrA.reduce((cur, env) => cur + env));
