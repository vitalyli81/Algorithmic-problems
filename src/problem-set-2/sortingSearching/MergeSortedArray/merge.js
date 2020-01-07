/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  for (let i = 0; i < n; i++) {
    let ind = m + i - 1;
    while (ind >= 0 && nums2[i] <= nums1[ind]) {
      nums1[ind + 1] = nums1[ind];
      ind--;
    }
    nums1[ind + 1] = nums2[i];
  }
};
