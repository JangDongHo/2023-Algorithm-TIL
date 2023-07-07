const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const n = input[0]; // 수열의 길이
const sequence = input.slice(1); // 주어진 순열

const stack = []; // 스택
const operations = []; // 스택에 넣는 연산을 나타내는 문자열 저장 (+, -)
let current = 1; // 스택에 넣을 수를 관리하는 변수

for (let num of sequence) {
  // 스택에 넣을 수 보다 주어진 순열의 숫자보다 작을 때는 push
  while (current <= num) {
    stack.push(current);
    operations.push("+");
    current++;
  }

  // 스택에 넣을 수와 주어진 순열의 숫자가 같을 때는 pop
  if (stack[stack.length - 1] === num) {
    stack.pop();
    operations.push("-");
    // 아니라면 불가능하므로 "NO" 출력
  } else {
    console.log("NO");
    return;
  }
}

console.log(operations.join("\n"));
