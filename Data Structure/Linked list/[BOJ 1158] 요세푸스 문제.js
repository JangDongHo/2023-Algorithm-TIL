const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 입력 값 받기
let [N, K] = fs.readFileSync(filePath).toString().split(" ").map(Number);

// 변수 선언
const yoseArr = []; // 요세푸스 순열을 저장할 배열
const humanArr = []; // 사람들의 번호를 저장할 배열
for (let i = 1; i <= N; i++) {
  humanArr.push(i);
}
let index = -1; // humanArr 포인터

// K번째 사람 제거 반복
while (N > 0) {
  let canMove = K; // 포인터가 이동할 수 있는 거리
  while (canMove > 0) {
    index = (index + 1) % N;
    canMove--;
  }
  yoseArr.push(humanArr[index]);
  humanArr.splice(index, 1);
  index--;
  N--;
}

// 요세푸스 순열 출력
let yoseArrString = "<";
yoseArrString += yoseArr.join(", ");
yoseArrString += ">";
console.log(yoseArrString);
