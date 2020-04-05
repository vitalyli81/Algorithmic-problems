/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
  let count = 0;
  let hash = {};

  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points.length; j++) {
      if (i === j) {
        continue;
      }
      const dist = getDist(points[i], points[j]);
      hash[dist] = (hash[dist] || 0) + 1;
    }
    Object.values(hash).forEach(val => {
      count += val * (val - 1);
    });
    hash = {};
  }

  return count;
};

const getDist = (a, b) => {
  const dx = a[0] - b[0];
  const dy = a[1] - b[1];

  return dx * dx + dy * dy;
};
