/**
 * @param {number[][]} points
 * @return {number}
 */
var minAreaRect = function(points) {
  const rows = {};
  let ans = Infinity;
  const lastX = {};

  points.forEach(([x, y]) => {
    if (!rows[x]) rows[x] = [];
    rows[x].push(y);
  });

  for (let x in rows) {
    const row = rows[x];
    row.sort((a, b) => a - b);

    for (let i = 0; i < row.length; i++) {
      const y1 = row[i];

      for (let j = i + 1; j < row.length; j++) {
        const y2 = row[j];
        const key = `${y1}-${y2}`;

        if (lastX[key]) {
          ans = Math.min(ans, (x - lastX[key]) * (y2 - y1));
        }

        lastX[key] = x;
      }
    }
  }

  return ans < Infinity ? ans : 0;
};
