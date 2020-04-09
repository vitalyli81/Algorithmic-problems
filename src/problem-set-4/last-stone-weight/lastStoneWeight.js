import MaxPriorityQueue from '../../dataStructures/PriorityQueue/MaxPQ';

var lastStoneWeight = function (stones) {
  const pq = new MaxPriorityQueue(stones);

  while (pq.heapSize > 1) {
    const s1 = pq.heapExtractMax();
    const s2 = pq.heapExtractMax();

    pq.heapInsert(s1 - s2);
  }
  return pq.getHeapMax();
};
