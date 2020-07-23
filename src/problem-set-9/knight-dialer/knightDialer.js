/**
 * @param {number} N
 * @return {number}
 */
var knightDialer = function (N) {
  const graph = [
    [4, 6],
    [8, 6],
    [7, 9],
    [4, 8],
    [3, 9, 0],
    [],
    [1, 7, 0],
    [2, 6],
    [1, 3],
    [4, 2],
  ];
  let count = 0;
  const memo = {};

  for (let i = 0; i <= 9; i++) {
    count = (count + dfs(N - 1, i, graph, memo)) % 1000000007;
  }

  return count;
};

const dfs = (N, cur, graph, memo) => {
  if (N === 0) return 1;
  const key = N + ':' + cur;
  if (memo[key] !== undefined) return memo[key];
  let count = 0;
  for (let next of graph[cur]) {
    count = (count + dfs(N - 1, next, graph, memo)) % 1000000007;
  }

  return (memo[key] = count);
};
