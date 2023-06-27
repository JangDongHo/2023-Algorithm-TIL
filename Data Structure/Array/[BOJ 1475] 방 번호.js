const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString();

const inputArr = Array.from(input);
let digitCount = {};

inputArr.forEach((digit) => {
  digitCount[digit] = digitCount[digit] + 1 || 1;
});

digitCount["6"] = digitCount["6"] || 0;
digitCount["9"] = digitCount["9"] || 0;
digitCount["6"] = Math.ceil(Number(digitCount["6"] + digitCount["9"]) / 2);
digitCount["9"] = 0;

sortedDigitArr = Object.values(digitCount).sort((a, b) => b - a);

console.log(sortedDigitArr[0]);
