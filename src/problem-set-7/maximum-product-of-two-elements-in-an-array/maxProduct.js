/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let first = 0;
  let second = 0;

  nums.forEach((n) => {
    if (n >= first) {
      second = first;
      first = n;
    } else if (n > second) {
      second = n;
    }
  });

  return (first - 1) * (second - 1);
};
