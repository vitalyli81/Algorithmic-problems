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
