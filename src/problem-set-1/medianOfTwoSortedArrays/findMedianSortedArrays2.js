/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const len1 = nums1.length;
  const len2 = nums2.length;
  const totalLen = len1 + len2;
  let idx1 = 0;
  let idx2 = 0;
  let cur;
  let last;

  while (idx1 + idx2 <= totalLen / 2) {
    if (cur !== undefined) {
      last = cur;
    }

    let el1 = nums1[idx1];
    let el2 = nums2[idx2];

    if (idx1 >= len1) {
      cur = el2;
      idx2++;
    } else if (idx2 >= len2) {
      cur = el1;
      idx1++;
    } else if (el1 < el2) {
      cur = el1;
      idx1++;
    } else {
      idx2++;
      cur = el2;
    }
  }

  return totalLen % 2 === 0 ? (last + cur) / 2 : cur;
};
