/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  const hash = {};
  for (let i = 0; i < numbers.length; i++) {
    const complement = target - numbers[i];
    if (complement in hash) {
      return [hash[complement] + 1, i + 1];
    }
    hash[numbers[i]] = i;
  }

  return [];
};
