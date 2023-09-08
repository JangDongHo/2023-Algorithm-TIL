function solution(s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === ")") {
      if (stack[stack.length - 1] === "(") stack.pop();
      else return false;
    } else stack.push(c);
  }
  // s를 다 돌고나서 남아있는게 없을 경우 true 반환
  return stack.length === 0 ? true : false;
}
