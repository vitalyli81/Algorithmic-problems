/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  return height(root) !== Number.MIN_VALUE;
};

function height(node) {
  if (node === null) return 0;
  const left = height(node.left);
  if (left === Number.MIN_VALUE) return Number.MIN_VALUE;

  const right = height(node.right);
  if (right == Number.MIN_VALUE) return Number.MIN_VALUE;

  const diff = Math.abs(left - right);
  if (diff > 1) return Number.MIN_VALUE;

  return Math.max(left, right) + 1;
}
