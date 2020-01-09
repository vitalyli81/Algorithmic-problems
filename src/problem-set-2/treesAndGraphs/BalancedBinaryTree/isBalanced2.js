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
  return height(root) !== -1;
};

function height(node) {
  if (node === null) return 0;
  const left = height(node.left);
  if (left === -1) return -1;

  const right = height(node.right);
  if (right == -1) return -1;

  const diff = Math.abs(left - right);
  if (diff > 1) return -1;

  return Math.max(left, right) + 1;
}
