function largestRectangleArea(heights) {
  const len = heights.length;
  if (!len) return 0;
  const stack = [-1];
  let maxSize = 0;

  for (let i = 0; i < len; i++) {
    while (peek(stack) != -1 && heights[peek(stack)] > heights[i]) {
      maxSize = Math.max(heights[stack.pop()] * (i - peek(stack) - 1), maxSize);
    }
    stack.push(i);
  }

  while (peek(stack) != -1) {
    maxSize = Math.max(
      maxSize,
      heights[stack.pop()] * (heights.length - peek(stack) - 1)
    );
  }

  return maxSize;
}
