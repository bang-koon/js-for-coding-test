const num =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : `5`;

count = 0;
for (let i = 0; i <= num; i++) {
  for (let j = 0; j < 60; j++) {
    for (let k = 0; k < 60; k++) {
      if (`${i}${j}${k}`.includes(num)) count++;
    }
  }
}
