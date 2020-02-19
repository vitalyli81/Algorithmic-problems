/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
  if (!nums || !nums.length || r * c > nums.length * nums[0].length) {
    return nums;
  }
  let rows = 0;
  let cols = 0;
  const res = Array(r);
  for (let i = 0; i < res.length; i++) {
    res[i] = Array(c);
  }

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[0].length; j++) {
      if (cols === c) {
        rows++;
        cols = 0;
      }
      res[rows][cols] = nums[i][j];
      cols++;
    }
  }

  return res;
};
