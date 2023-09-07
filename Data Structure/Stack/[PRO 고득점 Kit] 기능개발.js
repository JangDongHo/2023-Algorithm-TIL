function solution(progresses, speeds) {
  const answer = [];
  const daysLeft = progresses.map((x, i) => Math.ceil((100 - x) / speeds[i]));

  let maxDays = daysLeft[0];
  let count = 1;

  for (let i = 1; i < daysLeft.length; i++) {
    if (daysLeft[i] <= maxDays) {
      count++;
    } else {
      answer.push(count);
      count = 1;
      maxDays = daysLeft[i];
    }
  }

  answer.push(count);

  return answer;
}

const progresses = [95, 90, 99, 99, 80, 99];
const speeds = [1, 1, 1, 1, 1, 1];
console.log(solution(progresses, speeds));
