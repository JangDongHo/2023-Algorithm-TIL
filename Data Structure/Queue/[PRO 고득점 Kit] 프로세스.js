function addQueue(array) {
  array.reverse();
  const front = array.pop();
  array.reverse();
  array.push(front);
  return array;
}

function solution(priorities, location) {
  const n = priorities.length;
  let checkQueue = new Array(n).fill(false);
  checkQueue[location] = true;
  console.log(checkQueue);
  let answer = 1;
  for (let i = 0; i < n; i++) {
    if (priorities.some((x) => priorities[i] < x)) {
      priorities = addQueue(priorities);
      checkQueue = addQueue(checkQueue);
    }
  }
  console.log(checkQueue);
}

priorities = [1, 1, 9, 1, 1, 1];
location = 0;
console.log(solution(priorities, location));
