/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const minDistance = (word1, word2) => {
  if (!word1.length || !word2.length) {
    return word2.length || word1.length;
  }
  const memo = {};

  return helper(word1, word2, 0, 0, memo);
};

const helper = (w1, w2, i, j, memo) => {
  if (w1.length === i) {
    return w2.length - j;
  }
  if (w2.length === j) {
    return w1.length - i;
  }
  const key = `${i}-${j}`;

  if (memo[key] >= 0) return memo[key];

  let res;

  if (w1[i] === w2[j]) {
    res = helper(w1, w2, i + 1, j + 1, memo);
  } else {
    const insert = helper(w1, w2, i, j + 1, memo);
    const del = helper(w1, w2, i + 1, j, memo);
    const replace = helper(w1, w2, i + 1, j + 1, memo);

    res = Math.min(insert, del, replace) + 1;
  }

  return (memo[key] = res);
};
