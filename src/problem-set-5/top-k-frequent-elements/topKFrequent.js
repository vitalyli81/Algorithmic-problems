/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const res = [];
  const freqHash = {};
  const bucket = Array(nums.length + 1);

  for (let n of nums) {
    freqHash[n] = (freqHash[n] || 0) + 1;
  }

  for (let [key, freq] of Object.entries(freqHash)) {
    bucket[freq] = bucket[freq] || [];
    bucket[freq].push(key);
  }

  for (let i = bucket.length - 1; i >= 0 && res.length < k; i--) {
    if (bucket[i]) {
      res.push(...bucket[i]);
    }
  }

  return res;
};
