/*
시간: 60분
실패

채점 결과
정확성: 75.0
효율성: 0.0
합계: 75.0 / 100.0
*/

function solution(phone_book) {
  let answer = true;

  phone_book.forEach((number, index) => {
    for (let i = index + 1; i < phone_book.length; i++) {
      divide = 10 ** (phone_book[i].length - number.length);
      if (+number === Math.floor(+phone_book[i] / divide)) {
        answer = false;
      }
    }
  });

  return answer;
}

const phone_book = ["119", "97674223", "1195524421"];
console.log(solution(phone_book));
