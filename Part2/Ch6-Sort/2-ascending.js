const [length, ...students] = `2
홍길동 95
이순신 77`
  .trim()
  .split("\n");

const arr = [];
let answer = "";
students.forEach((student) => {
  const [name, score] = student.split(" ");
  arr.push({ name: name, score: score });
});
const sorted = arr.sort((a, b) => a.score - b.score);
// sorted.forEach((a) => console.log(a.name));
answer = sorted.reduce((cur, env) => `${cur.name} ${env.name}`);

console.log(answer);
