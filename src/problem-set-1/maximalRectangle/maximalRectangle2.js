/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
  const rows = matrix.length;
  if (!rows) return 0;
  const cols = rows ? matrix[0].length : 0;
  let maxSize = 0;
  const dp = Array(cols).fill(0);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      dp[j] = matrix[i][j] == 1 ? dp[j] + 1 : 0;
    }
    maxSize = Math.max(maxSize, largestRectangleArea(dp));
  }

  return maxSize;
};

function largestRectangleArea(heights) {
  const len = heights.length;
  if (!len) return 0;
  let maxArea = 0;

  for (let i = 0; i < len; i++) {
    let minWidth = Infinity;
    for (let j = i; j < len; j++) {
      minWidth = Math.min(minWidth, heights[j]);
      maxArea = Math.max(maxArea, minWidth * (j - i + 1));
    }
  }

  return maxArea;
}
