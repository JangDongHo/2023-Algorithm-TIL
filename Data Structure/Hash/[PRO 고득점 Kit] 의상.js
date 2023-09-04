function sortClothes(clothes) {
  let clothesObj = {};
  for (const cloth of clothes) {
    const [name, type] = cloth;
    clothesObj[type] = clothesObj[type] + 1 || 1;
  }
  return clothesObj;
}

function solution(clothes) {
  let answer = 1; // 코니는 하루에 최소 1개 이상의 의상을 입는다.
  const clothesObj = sortClothes(clothes); // 의상 종류 별 카운트
  // 각 의상 종류에 '착용 하지 않음' 경우의 수 추가 (+1)
  for (const clothType in clothesObj) {
    answer *= clothesObj[clothType] + 1;
  }
  // 아무 것도 착용하지 않는 경우의 수 제외 (-1)
  return answer - 1;
}

const clothes = [
  ["yellow_hat", "headgear"],
  ["blue_sunglasses", "eyewear"],
  ["green_turban", "headgear"],
];

console.log(solution(clothes));
