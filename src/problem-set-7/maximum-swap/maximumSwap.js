/**
 * @param {number} num
 * @return {number}
 */

var maximumSwap = function (num) {
  const bucket = Array(10);
  const nums = String(num).split('');

  for (let i = 0; i < nums.length; i++) {
    bucket[nums[i]] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    for (let j = 9; j > nums[i]; j--) {
      if (bucket[j] > i) {
        const tmp = nums[i];
        nums[i] = nums[bucket[j]];
        nums[bucket[j]] = tmp;
        return nums.join('');
      }
    }
  }

  return num;
};
