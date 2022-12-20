const [length, ...maze] = `5 6
101010
111111
000001
111111
111111`
  .trim()
  .split("\n");

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];
const [n, m] = length.split(" ").map((a) => ~~a);
const graph = [];
for (let ma of maze) {
  graph.push(ma.split("").map((a) => ~~a));
}

const bfs = () => {
  const queue = [];
  queue.push([0, 0]);
  while (queue.length !== 0) {
    const [x, y] = queue.shift();
    for (let i in dx) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx === n || ny === m) continue;
      if (graph[nx][ny] === 0) continue;
      if (graph[nx][ny] === 1) {
        graph[nx][ny] = graph[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }
  return graph[n - 1][m - 1];
};

console.log(bfs());
