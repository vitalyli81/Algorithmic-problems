/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  const countHash = {};
  let max = 0;
  let maxCount = 0;

  tasks.forEach((t) => {
    countHash[t] = (countHash[t] || 0) + 1;

    if (countHash[t] > max) {
      max = countHash[t];
      maxCount = 1;
    } else if (countHash[t] === max) {
      maxCount++;
    }
  });

  const parts = max - 1;
  const empty = parts * (n - (maxCount - 1));
  const available = tasks.length - max * maxCount;
  const idles = Math.max(0, empty - available);

  return tasks.length + idles;
};
