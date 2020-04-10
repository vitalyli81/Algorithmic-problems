/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function (nums, index) {
  const target = [];

  nums.forEach((num) => {
    const idx = index.shift();
    target.splice(idx, 0, num);
  });

  return target;
};
