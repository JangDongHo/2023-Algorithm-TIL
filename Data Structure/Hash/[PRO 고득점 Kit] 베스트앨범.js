function getGenreRank(objArray) {
  const playCountObj = {};
  const result = [];
  objArray.forEach((obj) => {
    const { genre, play } = obj;
    playCountObj[genre] = playCountObj[genre] + play || play;
  });
  const sortedPlayCountObj = Object.entries(playCountObj).sort(
    (a, b) => b[1] - a[1]
  );
  sortedPlayCountObj.forEach((obj) => {
    result.push(obj[0]);
  });
  return result;
}

function solution(genres, plays) {
  let answer = [];
  let musicObjArray = [];

  genres.forEach((genre, i) => {
    const musicObj = {};
    musicObj["id"] = i;
    musicObj["genre"] = genre;
    musicObj["play"] = plays[i];
    musicObjArray.push(musicObj);
  });

  // 장르 별로 순위 매기는 함수
  const genreRank = getGenreRank(musicObjArray);

  // 각 장르 별 재생 순위 매기는 함수
  genreRank.forEach((genre) => {
    const arr = [];
    musicObjArray.forEach((obj) => {
      if (obj.genre === genre) {
        arr.push([obj.id, obj.play]);
      }
    });
    const sortedArr = arr.sort((a, b) => b[1] - a[1]);
    for (let i = 0; i < sortedArr.length; i++) {
      if (i > 1) {
        break;
      }
      answer.push(sortedArr[i][0]);
    }
  });
  return answer;
}

const genres = ["classic", "pop", "classic", "classic", "pop"];
const plays = [500, 600, 150, 800, 2500];
console.log(solution(genres, plays));
