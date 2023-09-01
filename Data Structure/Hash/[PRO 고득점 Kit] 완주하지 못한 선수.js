function countObject(values) {
  const countValues = {};
  values.forEach((obj) => {
    countValues[obj] = countValues[obj] ? countValues[obj] + 1 : 1;
  });
  return countValues;
}

function solution(participant, completion) {
  let answer;
  participant = countObject(participant);
  completion = countObject(completion);

  Object.keys(participant).forEach((name) => {
    if (completion[name] !== participant[name]) {
      answer = name;
      return;
    }
  });

  return answer;
}
