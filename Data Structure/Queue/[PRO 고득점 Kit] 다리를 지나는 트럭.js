function solution(bridge_length, weight, truck_weights) {
  let count = 0;
  let currentBridgeWeight = 0;
  let waitingQueue = truck_weights.map((weight, count) => ({
    weight: weight,
    count: bridge_length,
  }));
  let bridgeQueue = [];
  while (waitingQueue.length > 0) {
    count++;
    const truck = waitingQueue[0];
    // 다리 위의 트럭들의 count를 1씩 감소
    if (bridgeQueue.length > 0) {
      bridgeQueue.forEach((truck) => {
        truck.count--;
      });
      // 다 지나간 트럭은 큐에서 제거
      if (bridgeQueue[0].count === 0) {
        currentBridgeWeight -= bridgeQueue[0].weight;
        bridgeQueue.shift();
      }
    }
    if (bridgeQueue.length > bridge_length) continue; // 다리의 길이보다 더 많은 트럭이 올라올 경우
    if (truck.weight + currentBridgeWeight > weight) continue; // 다리의 최대 하중을 버티지 못하는 경우
    // 다리 위에 트럭 올리기
    bridgeQueue.push(truck);
    currentBridgeWeight += truck.weight;
    waitingQueue.shift();
  }
  while (bridgeQueue.length > 0) {
    count++;
    bridgeQueue.forEach((truck) => {
      truck.count--;
    });
    // 다 지나간 트럭은 큐에서 제거
    if (bridgeQueue[0].count === 0) {
      currentBridgeWeight -= bridgeQueue[0].weight;
      bridgeQueue.shift();
    }
  }
  return count;
}

console.log(solution(2, 10, [7, 4, 5, 6]));
console.log(solution(100, 100, [10]));
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]));
