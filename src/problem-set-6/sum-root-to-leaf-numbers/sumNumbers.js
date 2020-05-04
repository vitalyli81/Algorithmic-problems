/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root, nums = '') {
  if (!root) return 0;
  let sum = 0;

  function traverse(root, nums = '') {
    if (!root) return;
    const nextNum = `${nums}${root.val}`;

    if (!root.left && !root.right) {
      sum += parseInt(nextNum);
      return;
    }
    traverse(root.left, nextNum);
    traverse(root.right, nextNum);
  }

  traverse(root);

  return sum;
};
