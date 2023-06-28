const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

// 입력값 처리
const N = Number(input[0]);
const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const X = Number(input[2]);

// 변수 선언
let count = 0;
let i = 0; // 배열 시작 인덱스
let j = N - 1; // 배열 끝 인덱스

// 끝 값부터 차례대로 비교
while (i < j) {
  const sum = arr[i] + arr[j];
  // sum == X일 시, i와 j 둘다 증감
  if (sum == X) {
    count++;
    i++;
    j--;
  } else if (sum < X) {
    i++;
  } else {
    j--;
  }
}

// 쌍의 개수 출력
console.log(count);
