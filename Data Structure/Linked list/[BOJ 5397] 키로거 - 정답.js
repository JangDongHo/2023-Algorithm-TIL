/*
- : 백스페이스
< : 왼쪽으로 커서를 한 칸 옮김
> : 오른쪽으로 커서를 한 칸 옮김
나머지 문자: 비밀번호의 일부
만약 커서의 위치가 줄의 마지막이 아니라면, 커서 및 커서 오른쪽에 있는 모든 문자는 오른쪽으로 한 칸 이동한다.
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

// 입력 값 받기
const T = Number(input.shift()); // 테스트 케이스 개수

// keyLogger 함수
const keyLogger = (keys) => {
  // 필요한 변수 선언
  const front = [];
  const back = [];

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    switch (key) {
      case "<":
        if (front.length > 0) back.push(front.pop());
        break;
      case ">":
        if (back.length > 0) front.push(back.pop());
        break;
      case "-":
        if (front.length > 0) front.pop();
        break;
      default:
        front.push(key);
    }
  }
  console.log(front.join("") + back.reverse().join(""));
};

// 테스트 케이스만큼 반복
input.forEach((input) => {
  keyLogger(input.trim()); // 특수문자 제거 (\r)
});
