export const maximalSquare = matrix => {
  const rows = matrix.length;
  const cols = rows ? matrix[0].length : 0;
  let maxSqrLen = 0;
  const dp = Array(rows + 1);

  for (let i = 0; i < dp.length; i++) {
    dp[i] = Array(cols + 1).fill(0);
  }

  for (let row = 1; row <= rows; row++) {
    for (let col = 1; col <= cols; col++) {
      if (matrix[row - 1][col - 1] === '1') {
        dp[row][col] =
          Math.min(dp[row - 1][col], dp[row][col - 1], dp[row - 1][col - 1]) +
          1;
        maxSqrLen = Math.max(maxSqrLen, dp[row][col]);
      }
    }
  }

  return maxSqrLen * maxSqrLen;
};

export default maximalSquare;
