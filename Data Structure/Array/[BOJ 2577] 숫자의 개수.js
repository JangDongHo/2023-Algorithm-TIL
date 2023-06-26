const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((x) => +x);

let mult = String(input[0] * input[1] * input[2]);
let arr = Array.from(mult);
let countNum = {};

arr.forEach((num) => {
  if (!countNum[num]) {
    countNum[num] = 0;
  }
  countNum[num]++;
});

for (let i = 0; i < 10; i++) {
  console.log(countNum[i] ? countNum[i] : 0);
}
