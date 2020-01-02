/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const len1 = nums1.length;
  const len2 = nums2.length;
  const totalLen = len1 + len2;
  const mid = Math.floor(totalLen / 2);
  let idx1 = 0;
  let idx2 = 0;
  const totalList = [];

  while (idx1 < len1 && idx2 < len2) {
    if (nums1[idx1] < nums2[idx2]) {
      totalList.push(nums1[idx1]);
      idx1++;
    } else {
      totalList.push(nums2[idx2]);
      idx2++;
    }
  }

  while (idx1 < len1) {
    totalList.push(nums1[idx1]);
    idx1++;
  }

  while (idx2 < len2) {
    totalList.push(nums2[idx2]);
    idx2++;
  }

  if (totalLen % 2 === 0) {
    return (totalList[mid] + totalList[mid - 1]) / 2;
  } else {
    return totalList[mid];
  }
};
