const [length, ...ices] = `4 5
00110
00011
11111
00000`
  .trim()
  .split("\n");

const [n, m] = length.split(" ").map((a) => ~~a);
let graph = [];

for (let i of ices) {
  graph.push(i.split("").map((a) => ~~a));
}

const dfs = (x, y) => {
  if (x < 0 || x >= n || y < 0 || y >= m) return false;
  if (graph[x][y] === 1) return false;
  graph[x][y] = 1;
  dfs(x - 1, y);
  dfs(x, y - 1);
  dfs(x + 1, y);
  dfs(x, y + 1);
  return true;
};

let answer = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (dfs(i, j)) {
      answer += 1;
    }
  }
}

console.log(answer);
