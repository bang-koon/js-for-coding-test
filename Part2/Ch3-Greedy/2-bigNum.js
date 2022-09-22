let arr = [2, 4, 5, 4, 6];
const n = arr.length; // 배열 크기
const k = 3; // 중복 가능 횟수
const m = 8; // 더할 횟수
let count = 0; // (가장 큰수 +  두번째로 큰 수) 가 더해질 횟수
let result = 0; // 최종 값

arr = arr.sort(); // 배열 정렬
const first = arr[n - 1];
const second = arr[n - 2];

// (가장 큰수 +  두번째로 큰 수) 의 형태로 나눠질 수 있는 횟수
count += Math.floor(m / (k + 1));
const etc = m % (k + 1); // 나머지 횟수(가장 큰 수)

result += count * (k * first + second);
result += etc * first;

console.log(result);
