/**
 * @param {number[][]} workers
 * @param {number[][]} bikes
 * @return {number[]}
 */
var assignBikes = function(workers, bikes) {
  const result = Array(workers.length).fill(null);
  const usedBikes = new Set();
  const dist = getDistances(workers, bikes);
  dist.sort(wbSort);

  for (let i = 0; i < dist.length; i++) {
    if (usedBikes.size === workers.length) break;
    const [_, w, b] = dist[i];
    if (usedBikes.has(b) || result[w] !== null) continue;

    result[w] = b;
    usedBikes.add(b);
  }

  return result;
};

function getDistances(workers, bikes) {
  const distances = [];

  for (let i = 0; i < workers.length; i++) {
    const w = workers[i];

    for (let j = 0; j < bikes.length; j++) {
      const b = bikes[j];
      const dist = calcDist(w, b);
      distances.push([dist, i, j]);
    }
  }

  return distances;
}

function wbSort(a, b) {
  const [distA, wA, bA] = a;
  const [distB, wB, bB] = b;

  return distA == distB ? (wA == wB ? bA - bB : wA - wB) : distA - distB;
}

function calcDist(a, b) {
  return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
}
