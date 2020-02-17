/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  if (nums1.length > nums2.length) return intersect(nums2, nums1);
  const res = [];
  const hash = {};
  nums1.forEach(n => {
    hash[n] = (hash[n] || 0) + 1;
  });
  nums2.forEach(n => {
    if (hash[n]) {
      res.push(n);
      hash[n]--;
      if (!hash[n]) delete hash[n];
    }
  });
  return res;
};
