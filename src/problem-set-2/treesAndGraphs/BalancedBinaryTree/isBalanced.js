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
  if (root === null) return true;
  const heightDiff = Math.abs(getHeight(root.left) - getHeight(root.right));
  return heightDiff < 2 && isBalanced(root.left) && isBalanced(root.right);
};

function getHeight(node) {
  if (node === null) return 0;
  return Math.max(getHeight(node.left), getHeight(node.right)) + 1;
}
