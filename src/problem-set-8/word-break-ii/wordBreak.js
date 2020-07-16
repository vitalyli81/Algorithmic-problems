/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
  return dfs(s, wordDict, {});
};

const dfs = (s, dict, memo) => {
  if (memo[s]) return memo[s];
  if (s.length === 0) return [''];

  const res = [];

  dict.forEach((word) => {
    if (s.startsWith(word)) {
      const subList = dfs(s.substring(word.length), dict, memo);

      subList.forEach((sub) => {
        res.push(word + (sub ? ' ' : '') + sub);
      });
    }
  });

  return (memo[s] = res);
};
