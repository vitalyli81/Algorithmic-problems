/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  return buildTree(nums, 0, nums.length - 1);
};

const buildTree = (nums, start, end) => {
  if (start > end) return null;

  const mid = Math.floor((start + end) / 2);
  const node = new TreeNode(nums[mid]);
  node.left = buildTree(nums, start, mid - 1);
  node.right = buildTree(nums, mid + 1, end);

  return node;
};
