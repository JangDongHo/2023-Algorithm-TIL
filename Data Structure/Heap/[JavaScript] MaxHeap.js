class MaxHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.maxHeapifyUp();
  }

  delete() {
    const max = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.maxHeapifyDown();
    }
    return max;
  }

  maxHeapifyUp(index) {
    let currentIndex = index || this.heap.length - 1;
    let parentIndex = Math.floor((currentIndex - 1) / 2);

    while (this.heap[parentIndex] < this.heap[currentIndex]) {
      [this.heap[parentIndex], this.heap[currentIndex]] = [
        this.heap[currentIndex],
        this.heap[parentIndex],
      ];
      currentIndex = parentIndex;
      parentIndex = Math.floor((currentIndex - 1) / 2);
    }
  }

  maxHeapifyDown(index = 0) {
    let currentIndex = index;
    let leftChildIndex = currentIndex * 2 + 1;
    let rightChildIndex = currentIndex * 2 + 2;
    let nextIndex = currentIndex;

    if (this.heap[nextIndex] < this.heap[leftChildIndex])
      nextIndex = leftChildIndex;
    if (this.heap[nextIndex] < this.heap[rightChildIndex])
      nextIndex = rightChildIndex;
    if (nextIndex !== currentIndex) {
      [this.heap[currentIndex], this.heap[nextIndex]] = [
        this.heap[nextIndex],
        this.heap[currentIndex],
      ];
      this.maxHeapifyDown(nextIndex);
    }
  }
}
