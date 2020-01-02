/**
 * @param {number[][]} workers
 * @param {number[][]} bikes
 * @return {number}
 */
var assignBikes = function(workers, bikes) {
  const visited = {};
  let minObj = { min: Infinity };
  dfs(workers, bikes, 0, 0, visited, minObj);

  return minObj.min;
};

function dfs(workers, bikes, dist, index, visited, minObj) {
  if (index >= workers.length) {
    minObj.min = Math.min(minObj.min, dist);
    return;
  }
  if (dist >= minObj.min) {
    return;
  }
  for (let i = 0; i < bikes.length; i++) {
    if (!visited[i]) {
      visited[i] = 1;
      let newDist = getDist(workers[index], bikes[i]);
      dfs(workers, bikes, dist + newDist, index + 1, visited, minObj);
      visited[i] = 0;
    }
  }
}

function getDist(a, b) {
  return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
}
