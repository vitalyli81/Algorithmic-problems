/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function (S) {
  const res = [];
  dfs('', 0, res, S);
  return res;
};

function dfs(str, i, res, S) {
  if (str.length === S.length) {
    res.push(str);
    return;
  }

  if (S[i] >= 0 && S[i] <= 9) {
    dfs(str + S[i], i + 1, res, S);
  } else {
    dfs(str + S[i].toLowerCase(), i + 1, res, S);
    dfs(str + S[i].toUpperCase(), i + 1, res, S);
  }
}
