/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let result = 0;
  const n = height.length;
  const leftMax = Array(n);
  leftMax[0] = height[0];
  const rightMax = Array(n);
  rightMax[n - 1] = height[n - 1];

  for (let i = 1; i < n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i]);
  }

  for (let i = n - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i]);
  }

  for (let i = 0; i < n; i++) {
    result += Math.min(leftMax[i], rightMax[i]) - height[i];
  }
  return result;
};
