/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
  const hash = {};
  let count = 0;
  dominoes.forEach(([n1, n2]) => {
    const key = n1 < n2 ? `${n1}-${n2}` : `${n2}-${n1}`;
    if (key in hash) {
      count += hash[key] + 1;
      hash[key]++;
    } else {
      hash[key] = 0;
    }
  });

  return count;
};
