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

  return Math.max(tasks.length, (max - 1) * (n + 1) + maxCount);
};
