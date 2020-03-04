/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
  if (!arr.length) return arr;
  const hash = {};
  const res = [];
  const sortedArr = [...arr].sort((a, b) => a - b);
  let rank = 1;
  sortedArr.forEach(n => {
    if (!hash[n]) {
      hash[n] = rank;
      rank++;
    }
  });

  arr.forEach(n => {
    res.push(hash[n]);
  });

  return res;
};
