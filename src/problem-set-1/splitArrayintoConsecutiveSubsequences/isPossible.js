/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function(nums) {
  const count = {};
  const tail = {};

  nums.forEach(element => {
    count[element] = (count[element] || 0) + 1;
  });

  for (let i = 0; i < nums.length; i++) {
    const el = nums[i];

    if (count[el] === 0) {
      continue;
    } else if (tail[el] > 0) {
      tail[el]--;
      tail[el + 1] = (tail[el + 1] || 0) + 1;
    } else if (count[el + 1] > 0 && count[el + 2] > 0) {
      count[el + 1]--;
      count[el + 2]--;
      tail[el + 3] = (tail[el + 3] || 0) + 1;
    } else {
      return false;
    }
    count[el]--;
  }

  return true;
};
