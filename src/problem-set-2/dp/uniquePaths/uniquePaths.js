/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = (m, n) => {
  if (!m || !n) return 0;
  const memo = {};
  return getPaths(0, 0, n, m, memo);
};

const getPaths = (row, col, rows, cols, memo) => {
  if (!isValidSquare(row, col, rows, cols)) return 0;
  const key = `${row}-${col}`;
  if (memo[key]) return memo[key];
  if (isAtTarget(row, col, rows, cols)) return (memo[key] = 1);

  return (memo[key] =
    getPaths(row + 1, col, rows, cols, memo) +
    getPaths(row, col + 1, rows, cols, memo));
};

const isValidSquare = (row, col, rows, cols) => {
  return row < rows && col < cols;
};

const isAtTarget = (row, col, rows, cols) => {
  return row === rows - 1 && col === cols - 1;
};
