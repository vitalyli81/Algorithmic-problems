/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let result = 0;

  for (let i = 0; i < height.length; i++) {
    const leftMax = getLeftMax(height, i);
    const rightMax = getRightMax(height, i);

    result += Math.min(leftMax, rightMax) - height[i];
  }

  return result;
};

function getLeftMax(list, idx) {
  let max = 0;

  for (let i = idx; i >= 0; i--) {
    max = Math.max(max, list[i]);
  }

  return max;
}

function getRightMax(list, idx) {
  let max = 0;

  for (let i = idx; i < list.length; i++) {
    max = Math.max(max, list[i]);
  }

  return max;
}
