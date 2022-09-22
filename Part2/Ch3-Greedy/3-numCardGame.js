// 여기부턴 입력 받는다고 가정하겠습니다.
// 백준에서 풀이하는 형태입니다.
const [num, ...arr] = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : `3 3
3 1 2
4 1 4
2 2 2`
).split("\n");

let answer;

for (let i of arr) {
  const minNum = Math.min(...i.split(" ").map(Number));
  if (answer === undefined || answer < minNum) answer = minNum;
}

console.log(answer);
