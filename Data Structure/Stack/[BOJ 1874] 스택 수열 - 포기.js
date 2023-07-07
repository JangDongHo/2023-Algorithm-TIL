const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n").map(Number);

// 변수 선언
const n = input[0]; // 1 <= n <= 100,000
const sequenceStack = []; // 수열을 담는 스택
const signStack = []; // 연산을 담는 스택
let nextNum = 1; // 다음으로 들어갈 숫자
let isPossible = true; // 가능한지 여부

for (let i = 1; i <= n; i++) {
  const inputNum = input[i];
  console.log(inputNum, nextNum);
  if (inputNum === nextNum) {
    sequenceStack.pop();
    signStack.push("-");
  } else if (inputNum > nextNum) {
    sequenceStack.push(nextNum);
    signStack.push("+");
    nextNum++;
    i--;
  } else {
    isPossible = false;
    break;
  }
}

console.log(signStack);
if (isPossible) {
  signStack.forEach((sign) => console.log(sign));
} else {
  console.log("NO");
}
