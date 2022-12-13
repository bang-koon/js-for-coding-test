let [mapLength, pointDirection, ...map] = `4 4
1 1 0
1 1 1 1
1 0 0 1
1 1 0 1
1 1 1 1`
  .trim()
  .split("\n");

// 맵 2차원 배열로
map = map.map((a) => a.split(" ").map((a) => ~~a));
// n 세로, m 가로
const [n, m] = mapLength.split(" ");
// 현재 위치
let [y, x] = pointDirection
  .slice(0, 3)
  .split(" ")
  .map((a) => ~~a);
// 현재 위치 표기, 바다는 1, 간 곳은 2로 표기함
map[y][x] = 2;
// 방향
let dir = pointDirection.slice(4);

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];
const turnLeft = () => {
  dir -= 1;
  if (dir === -1) dir = 3;
};
let count = 1;
let turnCount = 0;

while (1) {
  if (turnCount === 4) {
    const nx = x - dx[dir];
    const ny = y - dy[dir];
    if (map[ny][nx] == 1) break;
    if (map[ny][nx] == 2) {
      turnCount = 0;
      x = nx;
      y = ny;
      continue;
    }
  }
  turnLeft();
  const nx = x + dx[dir];
  const ny = y + dy[dir];
  if (map[ny][nx] != 0) {
    turnCount++;
    continue;
  }
  map[ny][nx] = 2;
  x = nx;
  y = ny;
  count++;
}

console.log(count);
