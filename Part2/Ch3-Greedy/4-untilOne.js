let [n, k] = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : `25 3`
)
  .split(" ")
  .map(Number);

let result = 0;

while (n > 1) {
  n % k === 0 ? (n /= k) : (n -= 1);
  result++;
}
console.log(result);

// 효율적인 코드, 책에서는 3-6.py
// while부분만 씀
// while (true) {
//   target = Math.floor(n / k) * k;
//   result += n - target;
//   n = target;

//   if (n < k) break;
//   result += 1;
//   n /= k;
// }
// result += n - 1;
// console.log(result);
