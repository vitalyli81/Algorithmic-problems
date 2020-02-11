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

const helper = (word1, word2, i, j, memo) => {
  if (word1.length === i) {
    return word2.length - j;
  }
  if (word2.length === j) {
    return word1.length - i;
  }
  const key = `${i}-${j}`;

  if (memo[key] >= 0) return memo[key];

  let res;

  if (word1[i] === word2[j]) {
    res = helper(word1, word2, i + 1, j + 1, memo);
  } else {
    const insert = helper(word1, word2, i, j + 1, memo);
    const del = helper(word1, word2, i + 1, j, memo);
    const replace = helper(word1, word2, i + 1, j + 1, memo);

    res = Math.min(insert, del, replace) + 1;
  }

  return (memo[key] = res);
};
