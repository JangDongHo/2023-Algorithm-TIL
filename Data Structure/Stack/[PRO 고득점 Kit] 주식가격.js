function solution(prices) {
  const n = prices.length;
  const answer = new Array(n).fill(0);
  const stack = [];

  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
      const prevIndex = stack.pop();
      answer[prevIndex] = i - prevIndex;
    }
    stack.push(i);
  }

  // 스택에 남아있는 가격들은 가격이 떨어지지 않은 경우
  while (stack.length > 0) {
    const lastIndex = stack.pop();
    answer[lastIndex] = n - 1 - lastIndex;
  }

  return answer;
}

const prices = [1, 2, 3, 2, 3];
const result = solution(prices);
console.log(result); // [4, 3, 1, 1, 0]
