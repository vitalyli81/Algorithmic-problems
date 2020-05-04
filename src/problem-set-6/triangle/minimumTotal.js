/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  if (!triangle || !triangle.length) return 0;
  const memo = {};
  return dfs(0, 0, triangle, memo);
};

function dfs(row, pos, triangle, memo) {
  const key = `${row}-${pos}`;
  if (row + 1 >= triangle.length) {
    return triangle[row][pos];
  }
  if (memo[key] !== undefined) {
    return memo[key];
  }

  return (memo[key] =
    triangle[row][pos] +
    Math.min(
      dfs(row + 1, pos, triangle, memo),
      dfs(row + 1, pos + 1, triangle, memo)
    ));
}
