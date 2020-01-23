/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = (m, n) => {
  if (!m || !n) return 0;
  return getPaths(0, 0, n, m);
};

const getPaths = (row, col, rows, cols) => {
  if (!isValidSquare(row, col, rows, cols)) return 0;
  if (isAtTarget(row, col, rows, cols)) return 1;
  return (
    getPaths(row + 1, col, rows, cols) + getPaths(row, col + 1, rows, cols)
  );
};

const isValidSquare = (row, col, rows, cols) => {
  return row < rows && col < cols;
};

const isAtTarget = (row, col, rows, cols) => {
  return row === rows - 1 && col === cols - 1;
};
