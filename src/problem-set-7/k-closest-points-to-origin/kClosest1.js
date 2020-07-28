/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function (points, K) {
  select(points, K, 0, points.length - 1);
  return points.slice(0, K);
};

const select = (points, K, start, end) => {
  if (start >= end) return;

  const pivot = randPartition(points, start, end);

  if (pivot === K - 1) return;
  if (pivot < K - 1) return select(points, K, pivot + 1, end);
  return select(points, K, start, pivot - 1);
};

const randPartition = (points, start, end) => {
  const rand = Math.floor(Math.random() * (end - start) + start);
  swap(points, rand, end);

  return partition(points, start, end);
};

const partition = (points, start, end) => {
  let pivot = start;

  for (let i = start; i < end; i++) {
    if (getDist(points[i]) < getDist(points[end])) {
      swap(points, pivot, i);
      pivot++;
    }
  }

  swap(points, pivot, end);

  return pivot;
};

const getDist = (point) => {
  return point[0] ** 2 + point[1] ** 2;
};

const swap = (points, i, j) => {
  const temp = points[i];
  points[i] = points[j];
  points[j] = temp;
};
