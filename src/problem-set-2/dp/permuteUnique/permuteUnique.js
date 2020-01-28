/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  if (!nums) return null;
  const result = [];
  const freqHash = buildFreqMap(nums);
  permute(freqHash, [], nums.length, result);
  return result;
};

const permute = (hash, prefix, remaining, result) => {
  if (remaining === 0) {
    result.push(prefix);
    return;
  }

  Object.keys(hash).forEach(key => {
    const count = [hash[key]];
    if (count > 0) {
      hash[key]--;
      permute(hash, [...prefix, key], remaining - 1, result);
      hash[key]++;
    }
  });
};

const buildFreqMap = nums => {
  const hash = {};
  nums.forEach(num => {
    hash[num] = (hash[num] || 0) + 1;
  });
  return hash;
};
