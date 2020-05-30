/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var maxUncrossedLines = function (A, B) {
  const memo = {};
  return helper(A, 0, B, 0, memo);
};

function helper(A, i, B, j, memo) {
  if (i === A.length || j === B.length) {
    return 0;
  }

  const key = `${i}:${j}`;

  if (memo[key] >= 0) {
    return memo[key];
  }

  if (A[i] === B[j]) {
    memo[key] = 1 + helper(A, i + 1, B, j + 1, memo);
  } else {
    memo[key] = Math.max(
      helper(A, i + 1, B, j, memo),
      helper(A, i, B, j + 1, memo)
    );
  }

  return memo[key];
}
