/**
 * @param {string} source
 * @param {string} target
 * @return {number}
 */
var shortestWay = function(source, target) {
  if (!source || !target) return -1;
  let curTarget = 0;
  let prevTarget = null;
  let count = 0;

  while (curTarget !== prevTarget) {
    count++;
    prevTarget = curTarget;
    for (let char of source) {
      let targetChar = target[curTarget];
      if (char === targetChar) curTarget++;
      if (target[curTarget] === undefined) return count;
    }
  }

  return -1;
};
