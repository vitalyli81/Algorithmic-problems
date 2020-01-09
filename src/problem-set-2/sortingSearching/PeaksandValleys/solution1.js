/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var peaksAndValeys = function(nums) {
  nums.sort((a, b) => a - b);

  for (let i = 1; i < nums.length; i += 2) {
    swap(nums, i - 1, i);
  }
};

function swap(list, a, b) {
  const tmp = list[a];
  list[a] = list[b];
  list[b] = tmp;
}
