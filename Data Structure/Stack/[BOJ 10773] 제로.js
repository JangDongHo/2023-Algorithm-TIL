const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n").map(Number);

// 변수 선언
const K = input[0]; // 1 <= K <= 100,000
const stack = [];
let sum = 0;

for (let i = 1; i <= K; i++) {
  const num = input[i];
  if (num === 0) stack.pop();
  else stack.push(num);
}

stack.forEach((num) => {
  sum += num;
});

console.log(sum);
