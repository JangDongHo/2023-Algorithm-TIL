function solution(arr) {
  let answer = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) continue;
    answer.push(arr[i]);
  }
  answer.push(arr[arr.length - 1]);
  return answer;
}

const arr = [1, 1, 3, 3, 0, 1, 1];
console.log(solution(arr));
