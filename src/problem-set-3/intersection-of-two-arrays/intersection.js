/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  if (nums1.length > nums2.length) return intersection(nums2, nums1);
  const set = new Set(nums1);
  const res = [];
  nums2.forEach(num => {
    if (set.has(num)) {
      set.delete(num);
      res.push(num);
    }
  });
  return res;
};
