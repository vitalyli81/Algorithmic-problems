/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  const copy = [...heights];
  let count = 0;

  heights.sort((a, b) => a - b);

  heights.forEach((el, i) => {
    if (el != copy[i]) {
      count++;
    }
  });
  return count;
};
