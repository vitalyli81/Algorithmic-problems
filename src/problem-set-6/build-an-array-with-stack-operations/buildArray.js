/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
  const res = [];
  let curN = 1;

  for (let i = 0; i < target.length; i++) {
    const cur = target[i];

    while (curN !== cur) {
      res.push('Push', 'Pop');
      curN++;
      continue;
    }
    res.push('Push');
    curN++;
  }
  return res;
};
